import React, { useState, forwardRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../components/Section';
import Home from '../components/Home';
import HomeDrawer from '../components/HomeDrawer';
import axios from 'axios';

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

  const [homes, setHomes] = useState([]);

  const getHomes = async () => {
    const response = await axios.get('https://storage.yandexcloud.net/for-projects/kora-dom/home.json')

    setHomes(response.data)
  }

  useEffect(() => {
    getHomes();
  }, [])

  return (
    <>
      <Section ref={ref} id="homes" title="Наши дома" color="gray">
        <div className={classes.content}>
          {homes?.map(({ id, imgs, title, description, ...props }) => (
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
