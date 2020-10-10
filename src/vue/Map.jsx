import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../components/Section';

const useStyle = makeStyles({
  iframe: {
    width: '100%',
    height: 400,
  },
});

const Map = () => {
  const classes = useStyle();

  return (
    <Section id="map" noPadding title="Контакты" color="gray">
      <iframe
        title="yandex"
        className={classes.iframe}
        src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=63026981809"
        frameBorder="0"
      ></iframe>
    </Section>
  );
};

export default Map;
