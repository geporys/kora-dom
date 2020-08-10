import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ArrowForward } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import MoreDetailesDialog from './MoreDetailesDialog';

const useStyle = makeStyles({
  content: {
    maxWidth: ({ sizeL }) => (sizeL ? 800 : '100%'),
    padding: '64px 24px 16px',
  },
  image: {
    width: '100%',
    height: ({ sizeM }) => (sizeM ? 500 : '70vw'),
  },
  thumbnail: {
    width: ({ sizeL }) => (sizeL ? 90 : 70),
    height: ({ sizeL }) => (sizeL ? 70 : 60),
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
  description: {
    paddingTop: 24,
    display: 'flex',
    justifyContent: 'space-between',
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
  firstProps: {
    borderRight: '2px solid rgb(193, 193, 193)',
  },
  params: {
    marginTop: 36,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  radioWithPhoto: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 16,
  },
  radioImg: {
    width: 160,
    height: 160,
  },
  miniParams: {
    display: 'flex',
    flexDirection: 'column',
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
  link: {
    textDecoration: 'none',
  },
  formLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secondChip: {
    marginLeft: 16,
  },
  labelImg: {
    textAlign: 'center',
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
    img: 'https://i.imgur.com/a0j9HqF.jpg',
  },
  warmCorner: {
    title: 'Технология «Теплый угол»',
    text:
      'Тёплый угол – это специальный метод углового соединения в брусе посредством системы «шип-паз». Брус профилированный поставляется на стройплощадку в заготовке длиной6м и там уже опытными плотниками запиливается соединительный узел. Если правильно соблюдены параметры,  угол получается герметичным, и в нём не наблюдаются «мостика холода». Разумеется, дерево запиливается таким образом, чтобы все детали плотно прилегали друг к другу. К этому добавляется давление венцов, и в результате сооружение становится более устойчивым и надёжным. Основным преимуществом данного метода является экономичность, т.к. торцевые части бруса не выступают за стены и клиент не переплачивает за данную кубатуру.',
    img: 'https://i.imgur.com/d2raJbV.png',
  },
  bowl: {
    title: 'Технология «В чашу»',
    text:
      'Данный метод углового соединения в брусе считается самым надежным. Чаша и торцовка деталей выполняется на нашем производстве с использованием высокоточного оборудования лидирующих мировых производителей и поставляется на стройплощадку уже готовый домокомплект. Используемая нами чаша считается самой сложной по своей конфигурации, т.к. она выпилена со всех сторон и с двух сторон имеет смещение. Помимо того, что данное узловое соединение полностью исключает продувание угла, оно не требует дополнительной отделки снаружи.',
    img: 'https://i.imgur.com/PYmN5lS.jpg',
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
      <Drawer
        classes={{
          paper: classes.paper,
        }}
        open={open}
        onClose={onClose}
        anchor="right"
      >
        {home && (
          <div className={classes.content}>
            <div className={classes.header}>
              <IconButton onClick={onClose}>
                <ArrowForward style={{ fontSize: 36 }} />
              </IconButton>
            </div>
            <ImageGallery
              showPlayButton={false}
              showFullscreenButton={false}
              items={home.imgs.map((img) => ({
                original: img,
                sizes: '100x100',
                renderItem: () => <img alt="item" className={classes.image} src={img} />,
                renderThumbInner: () => <img alt="thumb" className={classes.thumbnail} src={img} />,
              }))}
            />
            <div className={classes.title}>
              <Typography variant="h6">{home.title}</Typography>
              <Chip
                onClick={handleClick}
                variant="outlined"
                className={classes.price}
                label={totalPrice + ' ₽'}
              />
            </div>
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
                  <FormControlLabel
                    value=""
                    control={
                      <div className={classes.radioWithPhoto}>
                        <Radio
                          value=""
                          checked={state.size === ''}
                          onChange={handleChange('size')}
                        />{' '}
                        <img
                          alt="1"
                          className={classes.radioImg}
                          src="https://i.imgur.com/qozRGBz.png"
                        />
                      </div>
                    }
                    label="145x145"
                  />
                  <FormControlLabel
                    value="LSize"
                    control={
                      <div className={classes.radioWithPhoto}>
                        <Radio
                          value="LSize"
                          checked={state.size === 'LSize'}
                          onChange={handleChange('size')}
                        />
                        <img className={classes.radioImg} src="https://i.imgur.com/9OOgsQS.png" />
                      </div>
                    }
                    label="145x195"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl component="fieldset">
                <div className={classes.formLabel}>
                  <FormLabel component="legend">Угол</FormLabel>
                </div>
                <RadioGroup aria-label="gender" name="gender2" value={state.bowl}>
                  <FormControlLabel
                    value=""
                    control={
                      <div className={classes.radioWithPhoto}>
                        <Radio
                          value=""
                          checked={state.bowl === ''}
                          onChange={handleChange('bowl')}
                        />{' '}
                        <img className={classes.radioImg} src={'https://i.imgur.com/d2raJbV.png'} />
                      </div>
                    }
                    label={
                      <div className={classes.labelImg}>
                        Теплый угол{' '}
                        <Chip
                          onClick={() => {
                            openDialog(info.warmCorner);
                          }}
                          size="small"
                          label="Подробней"
                        />
                      </div>
                    }
                  />
                  <FormControlLabel
                    value="Bowl"
                    control={
                      <div className={classes.radioWithPhoto}>
                        <Radio
                          value="Bowl"
                          checked={state.bowl === 'Bowl'}
                          onChange={handleChange('bowl')}
                        />
                        <img className={classes.radioImg} src={'https://i.imgur.com/PYmN5lS.jpg'} />
                      </div>
                    }
                    label={
                      <div className={classes.labelImg}>
                        {' '}
                        В чашу{' '}
                        <Chip
                          onClick={() => {
                            openDialog(info.bowl);
                          }}
                          size="small"
                          label="Подробней"
                        />
                      </div>
                    }
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
            <div className={classes.additionalParams}>
              <FormControl className={classes.firstFormControl} component="fieldset">
                <FormLabel component="legend">Кровля</FormLabel>
                <Typography>Уточняется по телефону</Typography>
              </FormControl>
              <FormControl component="fieldset">
                <FormLabel component="legend">Фундмаент</FormLabel>
                <Typography>Уточняется по телефону</Typography>
              </FormControl>
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

export default HomeDrawer;
