import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fab from '../components/Fab';
import TabDrawer from '../components/TabDrawer';

const useSyles = makeStyles({
  root: {
    width: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    display: 'flex',
    justifyContent: ({ sizeL }) => sizeL && 'center',
    alignItems: 'center',
    zIndex: 1000,
    paddingTop: ({ sizeM }) => (sizeM ? 30 : 16),
  },
  logo: {
    paddingRight: 32,
    paddingLeft: ({ sizeL, sizeM }) => (!sizeL && sizeM ? 64 : 16),
  },
  textColorInherit: {
    color: 'white',
    opacity: 1,
  },
  indicator: {
    backgroundColor: 'white',
    display: ({ sizeL }) => !sizeL && 'none',
  },
  logoTab: {
    paddingLeft: ({ sizeM }) => !sizeM && 0,
  },
});

const tabs = [
  { label: 'НАШИ ДОМА', id: 'homes', ref: 'homes' },
  { label: 'О нас', id: 'about', ref: 'about' },
  { label: 'ПРЕИМУЩЕСТВА', id: 'advantage', ref: 'advantage' },
  { label: 'Причины', id: 'causes', ref: 'causes' },
  { label: 'Вопросы', id: 'questions', ref: 'questions' },
  { label: 'Контакты', id: 'map', ref: 'map' },
];

const Header = () => {
  const sizeL = useMediaQuery('(min-width:1100px)');
  const sizeM = useMediaQuery('(min-width: 600px)');
  const classes = useSyles({ sizeL, sizeM });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = (event) => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className={classes.root}>
      <Tabs
        classes={{
          indicator: classes.indicator,
        }}
        value={value}
        onChange={handleChange}
      >
        <Tab
          classes={{
            root: classes.logoTab,
            textColorInherit: classes.textColorInherit,
          }}
          icon={
            <div className={classes.logo}>
              <Logo />
            </div>
          }
        />
        {sizeL &&
          tabs.map(({ label, id, ref }) => (
            <Tab
              component="a"
              href={'#' + ref}
              classes={{
                textColorInherit: classes.textColorInherit,
              }}
              key={id}
              label={label}
            />
          ))}
      </Tabs>
      {!sizeL && <Fab onClick={handleOpen} />}
      {!sizeL && <TabDrawer open={isOpen} onClose={handleClose} tabs={tabs} />}
    </header>
  );
};

export default Header;
