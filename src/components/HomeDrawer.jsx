import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import 'react-image-gallery/styles/css/image-gallery.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
// import ds145 from '../assets/images/lamess/ds145.png';
// import ds195 from '../assets/images/lamess/ds195.png';
// import bowl from '../assets/images/lamess/bowl.png';
// import hotCorn from '../assets/images/lamess/hotCorn.png';
// import nodePower from '../assets/images/lamess/nodePower.png';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import MoreDetailesDialog from './MoreDetailesDialog';
import {FieldSetHomeDrawer, InfoFieldSetFromHomeDrawer} from "./Drawers/FieldSetHomeDrawer";
import Drawer from "./Drawers/Drawer";

const useStyle = makeStyles({
  description: {
    paddingTop: 24,
    display: 'flex',
    justifyContent: 'space-between',
  },
  props: {
    textAlign: 'center',
    width: '100%',
  },
  firstProps: {
    borderRight: '2px solid rgb(193, 193, 193)',
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
  firstFormControl: {
    marginBottom: 16,
  },
  additionalParams: {
    display: 'grid',
    justifyContent: 'space-between',
    marginTop: 24,
    flexWrap: 'wrap',
  },
  listItem: {
    paddingLeft: 0,
  },
  formLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const info = {
  insulation: {
    title: 'Межвенцовый утеплитель премиум',
    text:
      'Холлофайбер изготавливается из полиэстеровых волокон, при помощи нетканого метода.Материал выпускается в рулонах и пластинах, каждая разновидность имеет своюплотность. Холлофайбер обладает высокими показателями эластичности. Такаяособенность очень удобна при теплоизоляции межвенцовых швов, особенно прииспользовании клееного или профилированного бруса. В таком материале отсутствуютпоры, а значит, при высыхании его может покоробить. Если используется утеплитель из натурального материала, то появление щелей неизбежно. При применении холлофайбера дополнительное уплотнение межвенцовых швов после высыхания бруса не требуется. Волокна этого материала заполнят появившиеся трещины самостоятельно. Кроме высокой степени эластичности холлофайбер обладает и рядом других преимуществ.',
  },
  nodePower: {
    title: 'Пружинный «Узел сила»',
    text:
      'Современный крепежный элемент пружинный узел «Сила» внешне напоминает саморез длиной 16 – 28 см с пружиной в его верхней части. Изготавливается он из нержавеющей прочной стали и оцинкован полностью либо частично (помимо пружины). Это позволяет избежать образования ржавчины на пружинном узле, а в дальнейшем гниения и разрушения деревянного материала. Использовать пружинные узлы «Сила» можно для деревянных зданий, изготовленных из любого строительного материала. Данные элементы не только сохраняют геометрию конструкции, но и утепляют ее, препятствуя образованию межвенцовых щелей. Они скрепляют брус между собой, благодаря чему между венцами не образуются зазоры. Пружинный узел «Сила» прижимает брус между собой с силой 130 кгс. На венец нужно уложить около 4-х данных элементов, таким образом, на него будет действовать сила, составляющая 520 кгс. Эта нагрузка и не позволяет образовываться щелям и зазорам между венцами.',
    img: 'https://storage.yandexcloud.net/for-projects/kora-dom/lamess/nodePower.png',
  },
  warmCorner: {
    title: 'Технология «Теплый угол»',
    text:
      'Тёплый угол – это специальный метод углового соединения в брусе посредством системы «шип-паз». Брус профилированный поставляется на стройплощадку в заготовке длиной6м и там уже опытными плотниками запиливается соединительный узел. Если правильно соблюдены параметры,  угол получается герметичным, и в нём не наблюдаются «мостика холода». Разумеется, дерево запиливается таким образом, чтобы все детали плотно прилегали друг к другу. К этому добавляется давление венцов, и в результате сооружение становится более устойчивым и надёжным. Основным преимуществом данного метода является экономичность, т.к. торцевые части бруса не выступают за стены и клиент не переплачивает за данную кубатуру.',
    img: 'https://storage.yandexcloud.net/for-projects/kora-dom/lamess/hotCorn.png',
  },
  bowl: {
    title: 'Технология «В чашу»',
    text:
      'Данный метод углового соединения в брусе считается самым надежным. Чаша и торцовка деталей выполняется на нашем производстве с использованием высокоточного оборудования лидирующих мировых производителей и поставляется на стройплощадку уже готовый домокомплект. Используемая нами чаша считается самой сложной по своей конфигурации, т.к. она выпилена со всех сторон и с двух сторон имеет смещение. Помимо того, что данное узловое соединение полностью исключает продувание угла, оно не требует дополнительной отделки снаружи.',
    img: 'https://storage.yandexcloud.net/for-projects/kora-dom/lamess/bowl.png',
  },
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

const items = ({ size, openDialog }) => [
  { text: `Профилированный брус (ель, сосна) ${size ? '145х195' : '145х145'}` },
  { text: 'Высота первого этажа не менее 2,7 м' },
  { text: 'Высота подъема второго этажа не менее 1,3 м' },
  { text: 'Подкладочная доска 50Х200 лиственница (антисептированная), гидроизоляция' },
  { text: 'Фронтоны из бруса' },
  { text: `Все внутренние перегородки профилированный брус ${size ? '145х195' : '145х145'}` },
  { text: 'Балки перекрытия сечением 100х200 с шагом 0,6м' },
  {
    text: 'Межвенцовый утеплитель «Премиум»',
    content: (
      <Chip
        onClick={() => {
          openDialog(info.insulation);
        }}
        size="small"
        label="Подробней"
      />
    ),
  },
  {
    text: 'Пружинный «Узел Сила»',
    content: (
      <Chip
        onClick={() => {
          openDialog(info.nodePower);
        }}
        size="small"
        label="Подробней"
      />
    ),
  },
  { text: 'Комплектующие' },
  { text: 'Доставка до г. Москва (70 км от МКАД)' },
];

const initialState = {
  size: '',
  bowl: '',
  drying: '',
};

const HomeDrawer = ({ home, open, onClose, makeOrder }) => {
  const sizeL = useMediaQuery('(min-width:800px)');
  const sizeM = useMediaQuery('(min-width:600px)');

  const classes = useStyle({ sizeL, sizeM });
  const [state, setState] = React.useState(initialState);

  const handleChange = (field) => ({ target }) => {
    setState({ ...state, [field]: target.value });
  };

  const totalPrice = open
    ? state.size && state.bowl && state.drying
      ? home.withAll
      : state.size || state.bowl || state.drying
      ? home['with' + state.size + state.bowl + state.drying]
      : home.price
    : null;

  React.useEffect(() => {
    setState(initialState);
  }, [open]);

  const handleClick = () => {
    makeOrder({
      comment: `${home.title} / ${state.size ? '145x195' : '145x145'} / ${
        state.bowl ? 'Чаша присутствует' : 'Чаша отсутствует'
      } / ${state.drying ? 'Камерная сушка' : 'Естественная влажность'}`,
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

  return (
    <>

      <Drawer totalPrice={totalPrice}
              handleClick={handleClick}
              data={home}
              makeOrder={makeOrder}
              onClose={onClose}
              open={open}
      >
        {home  && (
          <>
            <div className={classes.description}>
              <div className={classes.props + ' ' + classes.firstProps}>
                <Typography variant={sizeM ? 'h5' : 'subtitle2'}>{home.size + ' м2'}</Typography>
                <Typography className={classes.label} variant="subtitle2">
                  Площадь
                </Typography>
              </div>
              <div className={classes.props + ' ' + classes.firstProps}>
                <Typography variant={sizeM ? 'h5' : 'subtitle2'}>{home.rooms}</Typography>
                <Typography className={classes.label} variant="subtitle2">
                  {home.rooms > 4 ? 'Спален' : 'Спальни'}
                </Typography>
              </div>
              <div className={classes.props}>
                <Typography variant={sizeM ? 'h5' : 'subtitle2'}>{home.floors}</Typography>
                <Typography className={classes.label} variant="subtitle2">
                  {home.floors === 1 ? 'Этаж' : 'Этажа'}
                </Typography>
              </div>
            </div>
            <div className={classes.params}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Брус</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={state.size}>
                  <FieldSetHomeDrawer label={"145x145"}
                                      img={'https://storage.yandexcloud.net/for-projects/kora-dom/lamess/ds145.png'}
                                      initialState={initialState}
                                      checked={state.size === ''}
                                      value=""
                                      onChange={handleChange('size')}
                                      infoAboutDetails={false}
                                      infoAboutImg={true}
                  />
                  <FieldSetHomeDrawer label={"145x195"}
                                      img={'https://storage.yandexcloud.net/for-projects/kora-dom/lamess/ds195.png'}
                                      initialState={initialState}
                                      checked={state.size === 'LSize'}
                                      value="LSize"
                                      onChange={handleChange('size')}
                                      infoAboutDetails={false}
                                      infoAboutImg={true}
                  />
                </RadioGroup>
              </FormControl>
              <FormControl component="fieldset">
                <div className={classes.formLabel}>
                  <FormLabel component="legend">Угол</FormLabel>
                </div>
                <RadioGroup aria-label="gender" name="gender2" value={state.bowl}>
                  <FieldSetHomeDrawer img={'https://storage.yandexcloud.net/for-projects/kora-dom/lamess/hotCorn.png'}
                                      initialState={initialState}
                                      checked={state.bowl === ''}
                                      value=""
                                      onChange={handleChange('bowl')}
                                      infoTechnology={info.warmCorner}
                                      name={'Теплый угол'}
                                      infoAboutDetails={true}
                                      infoAboutImg={true}
                  />
                  <FieldSetHomeDrawer img={'https://storage.yandexcloud.net/for-projects/kora-dom/lamess/bowl.png'}
                                      initialState={initialState}
                                      checked={state.bowl === 'Bowl'}
                                      value="Bowl"
                                      onChange={handleChange('bowl')}
                                      infoTechnology={info.bowl}
                                      name={'В чашу'}
                                      infoAboutDetails={true}
                                      infoAboutImg={true}
                  />
                </RadioGroup>
              </FormControl>
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
            </div>
            <div className={classes.additionalParams}>
              <InfoFieldSetFromHomeDrawer value={'Кровля'} classesTest={classes.firstFormControl}/>
              <InfoFieldSetFromHomeDrawer value={'Фундамент'}/>
            </div>
            <List className={classes.list}>
              <FormLabel component="legend">Что входит в заказ?</FormLabel>
              {items({ size: state.size, openDialog }).map((item, index) => (
                  <ListItem className={classes.listItem} key={index} button>
                    <ListItemText primary={item.text} />
                    {item.content}
                  </ListItem>
              ))}
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

export default HomeDrawer;
