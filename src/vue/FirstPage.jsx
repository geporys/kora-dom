import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from '../assets/images/home1/img11.png';
import { ReactComponent as Trees } from '../assets/icons/trees.svg';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import scrollToElement from 'scroll-to-element';

const useSyles = makeStyles({
  root: {
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage: `url(${image})`,
    zIndex: 0,
    boxShadow: 'inset 1px 93px 30px -14px rgba(0, 0, 0, 0.5)',
    backgroundPosition: 'bottom',
  },
  content: {
    display: 'flex',
    color: 'white',
    height: '100vh',
    alignItems: 'center',
    zIndex: 1000,
    justifyContent: 'space-between',
    backgroundColor: 'rgb(0, 20, 36, 0.3)',
    padding: ({ sizeM }) => (sizeM ? '0 64px' : '0 16px'),
  },
  title: {
    fontWeight: 800,
    fontSize: 80,
    lineHeight: ({ sizeM }) => (sizeM ? '24px' : '70px'),
  },
  subTitle: {
    fontWeight: 500,
    lineHeight: '32px',
    letterSpacing: 2,
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 4,
  },
});

const FirstPage = ({ makeOrder, homeRef }) => {
  const sizeL = useMediaQuery('(min-width:1000px)');
  const sizeM = useMediaQuery('(min-width: 600px)');

  const [first, setFirst] = useState(false);
  const handleScroll = (e) => {
    if (homeRef.current) {
      scrollToElement(homeRef.current);
      setFirst(true);
    }
  };
  const classes = useSyles({ sizeM });

  return (
    <div onWheel={first ? null : handleScroll} className={classes.root}>
      <div className={classes.content}>
        <div>
          <Typography classes={{ h1: classes.title }} variant="h1">
            KORA DOM
          </Typography>
          <Typography classes={{ h6: classes.subTitle }} variant="h6" component="h2">
            Производство и строительство деревянных домов
          </Typography>
          <div>
            <Chip
              onClick={() => {
                makeOrder({});
              }}
              label="Заказать проект"
              clickable
              color="primary"
            />
          </div>
        </div>
        {sizeL && (
          <div>
            <Trees />
          </div>
        )}
      </div>
    </div>
  );
};

export default FirstPage;
