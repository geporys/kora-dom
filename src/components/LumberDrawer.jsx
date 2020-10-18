import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import 'react-image-gallery/styles/css/image-gallery.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ArrowForward } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import List from '@material-ui/core/List';
import MoreDetailesDialog from './MoreDetailesDialog';
import Slider from "@material-ui/core/Slider";

const useStyle = makeStyles({
  content: {
    maxWidth: ({ sizeL }) => (sizeL ? 800 : '100%'),
    padding: '64px 24px 16px',
  },
  image: {
    width: '100%',
    height: ({ sizeM }) => (sizeM ? 500 : '70vw'),
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 24,
    position: ({ sizeL }) => !sizeL && 'fixed',
    bottom: ({ sizeL }) => !sizeL && 0,
    left: ({ sizeL }) => !sizeL && 0,
    width: ({ sizeL }) => !sizeL && '100%',
    backgroundColor: 'white',
    padding: ({ sizeL }) => !sizeL && 24,
    zIndex: 1000,
    boxShadow: ({ sizeL }) =>
      !sizeL &&
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
  header: {
    paddingBottom: 24,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  paper: {
    width: ({ sizeL }) => !sizeL && '100%',
  },
  price: {
    height: 32,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 22,
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(43, 45, 51)',
    borderRadius: 16,
    outline: 0,
    marginRight: ({ sizeL }) => !sizeL && 40,
    '&:hover': {
      color: 'rgb(43, 45, 51)',
    },
  },
  props: {
    textAlign: 'center',
    width: '100%',
  },
  params: {
    marginTop: 36,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  label: {
    color: 'rgba(0, 0, 0, 0.54)',
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
      comment: `${lumber.title} / 
      ${state.drying ? 'Камерная сушка' : 'Естественная влажность'}`,
    });
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const [dialogInfo, setDialogInfo] = React.useState(null);
  const openDialog = (info) => {
    setDialogInfo(info);
  };
  const closeDialog = () => {
    setDialogInfo(null);
  };
  const [value, setValue] = React.useState(10);

  const handleChangeVolume = (event, newValue) => {
    setValue(newValue);
    state.volume=newValue
  };
  return (
    <>
      <Drawer
        classes={{
          paper: classes.paper,
        }}
        open={open}
        onClose={onClose}
        anchor="right"
      >
        {lumber && (
          <div className={classes.content}>
            <div className={classes.header}>
              <IconButton onClick={onClose}>
                <ArrowForward style={{ fontSize: 36 }} />
              </IconButton>
            </div>

            <img alt="" className={classes.image}  src={lumber.img} />
            <div className={classes.title}>
              <Typography variant="h6">{lumber.title}</Typography>
              <Chip
                onClick={handleClick}
                variant="outlined"
                className={classes.price}
                label={totalPrice + ' ₽'}
              />
            </div>
            {lumber.priceWithDrying &&(
                <div className={classes.params}>
                  <FormControl className={classes.lastFormControl} component="fieldset">
                    <FormLabel component="legend">Влажность</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="gender3"
                        value={state.drying}
                        onChange={handleChange('drying')}
                    >
                      <div className={classes.formLabel}>
                        <FormControlLabel value="" control={<Radio />} label="Естественная влажность" />{' '}
                        <Chip
                            onClick={() => {
                              openDialog(info.naturalHumidity);
                            }}
                            size="small"
                            label="Подробней"
                        />{' '}
                      </div>
                      <div className={classes.formLabel}>
                        <FormControlLabel value="Drying" control={<Radio />} label="Камерная сушка" />{' '}
                        <Chip
                            onClick={() => {
                              openDialog(info.chamberDrying);
                            }}
                            size="small"
                            label="Подробней"
                        />{' '}
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
            )}

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
          </div>
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
