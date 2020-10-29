import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import 'react-image-gallery/styles/css/image-gallery.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import List from '@material-ui/core/List';
import MoreDetailesDialog from './MoreDetailesDialog';
import Slider from "@material-ui/core/Slider";
import {FieldSetHomeDrawer} from "./Drawers/FieldSetHomeDrawer";
import Drawer from "./Drawers/Drawer";

const useStyle = makeStyles({
  params: {
    marginTop: 36,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  list: {
    marginTop: 24,
  },
  lastFormControl: {
    marginTop: 16,
  },
  formLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slider: {
    marginTop: 24,
    width: 320,
  }
});

const info = {
  naturalHumidity: {
    title: 'Естественная влажность',
    text:
      'Профилированный брус естественной влажности представляет собой строительный материал из хвойных пород древесины, обработанный на оборудовании без применения принудительной сушки древесины в сушильных камерах. Данный материал, как правило, имеет влажность от 30%. Строительство из профилированного бруса естественной влажности требует больше времени, т.к. теплый контур должен выстояться до начала отделочных работ не менее восьми месяцев в зависимости от времени года и климатических условий. Усадка стен дома из профилированного бруса естественной влажности составляет 7-8%. Основным преимуществом сборки дома из данного материала является его стоимость, т.к. не переплачиваешь за дополнительные операции на производстве.',
  },
  chamberDrying: {
    title: 'Камерная сушка',
    text:
      'Производство профилированного бруса естественной влажности и камерной сушки не имеет отличий с точки зрения очередности этапов, но отличается их содержание и длительность, в частности – этап сушки древесины. Сушка древесины необходима для предотвращения появления кручения, деформаций, грибка на этапе производства, а не эксплуатации дома. Таким образом, сушка оказывает одно из основных влияний на прочность, качество, количество трещин, вероятность появления деформаций и сохранность физических и эксплуатационных свойств профилированного бруса. К основным плюсам профилированного бруса камерной сушки можно отнести меньшую усадку дома в сравнении с брусом естественной влажности и скорость строительства, т.к. к отделке возможно приступить практически сразу после возведения теплого контура.',
  },
};

const initialState = {
  drying: '',
  volume: 10,
};

const LumberDrawer = ({ lumber, open, onClose, makeOrder }) => {
  const sizeL = useMediaQuery('(min-width:800px)');
  const sizeM = useMediaQuery('(min-width:600px)');

  const classes = useStyle({ sizeL, sizeM });
  const [state, setState] = React.useState(initialState);

  const handleChange = (field) => ({ target }) => {
    setState({ ...state, [field]: target.value });
  };

  const totalPrice = open
      ? state.drying
          ? lumber.priceWithDrying * state.volume
          : lumber.price * state.volume
      : null;

  React.useEffect(() => {
    setState(initialState);
  }, [open]);

  const handleClick = () => {
    makeOrder({
      comment: `${lumber.title} / ${state.drying ? 'Камерная сушка' : 'Естественная влажность'} / Объем: ${
                  state.volume} м³;`,
    });
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const [dialogInfo, setDialogInfo] = React.useState(null);

  const closeDialog = () => {
    setDialogInfo(null);
  };
  const [value, setValue] = React.useState(10);

  const handleChangeVolume = (event, newValue) => {
    setValue(newValue);
    setState({...state, volume: newValue})
  };


  return (
    <>
      <Drawer totalPrice={totalPrice}
              handleClick={handleClick}
              data={lumber}
              makeOrder={makeOrder}
              onClose={onClose}
              open={open}
      >
        {lumber &&(
          <>
            <div className={classes.params}>
              {lumber.priceWithDrying &&(
                  <FormControl className={classes.lastFormControl} component="fieldset">
                    <FormLabel component="legend">Влажность</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="gender3"
                        value={state.drying}
                        onChange={handleChange('drying')}
                    >
                      <div className={classes.formLabel}>
                        <FieldSetHomeDrawer infoTechnology={info.naturalHumidity}
                                            value={''}
                                            name={"Естественная влажность"}
                                            infoAboutDetails={true}
                                            infoAboutImg={false}
                        />
                      </div>
                      <div className={classes.formLabel}>
                        <FieldSetHomeDrawer infoTechnology={info.chamberDrying}
                                            value={'Drying'}
                                            name={"Камерная сушка"}
                                            infoAboutDetails={true}
                                            infoAboutImg={false}
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
              )}
            </div>


            <FormControl className={classes.slider}>
              <FormLabel>Объем(м³)</FormLabel>
              <Slider
                  value={value}
                  onChange={handleChangeVolume}
                  defaultValue={10}
                  aria-labelledby="discrete-slider-small-steps"
                  valueLabelDisplay="auto"
                  step={10}
                  //marks
                  min={10}
                  max={200}
              />
            </FormControl>
            <List className={classes.list}>
              <FormLabel component="legend">Что входит в заказ?</FormLabel>
            </List>
          </>
        )}
      </Drawer>
      {Boolean(dialogInfo) && (
        <MoreDetailesDialog
          open={Boolean(dialogInfo)}
          onClose={closeDialog}
          title={dialogInfo.title}
          text={dialogInfo.text}
          img={dialogInfo.img}
        />
      )}
    </>
  );
};

export default LumberDrawer;
