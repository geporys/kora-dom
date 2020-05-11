import React, { useState, forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../components/Section';
import { homes } from '../assets/mock/home';
import Home from '../components/Home';
import HomeDrawer from '../components/HomeDrawer';

const useStyle = makeStyles({
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

const Homes = forwardRef(({ makeOrder }, ref) => {
  const classes = useStyle();
  const [selectedHome, setSelectedHome] = useState(false);
  const handleClick = (home) => () => {
    setSelectedHome(home);
  };
  const handleClose = () => {
    setSelectedHome(null);
  };
  return (
    <>
      <Section ref={ref} id="homes" title="Наши дома" color="gray">
        <div className={classes.content}>
          {homes.map(({ id, imgs, title, description, ...props }) => (
            <Home
              onClick={handleClick({ imgs, title, description, ...props })}
              key={id}
              image={imgs[0]}
              title={title}
              description={description}
            />
          ))}
        </div>
      </Section>
      <HomeDrawer
        open={Boolean(selectedHome)}
        makeOrder={makeOrder}
        onClose={handleClose}
        home={selectedHome}
      />
    </>
  );
});

export default Homes;
