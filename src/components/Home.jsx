import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyle = makeStyles({
  root: {
    width: ({ sizeL, sizeM }) =>
      sizeL && sizeM ? 500 : !sizeL && sizeM ? '42vw' : !sizeL && !sizeM && '100%',
    marginBottom: 24,
    position: 'relative',
  },
  media: {
    height: ({ sizeM, sizeS }) => (sizeM ? 400 : sizeS ? 500 : '70vw'),
  },
  description: {
    position: 'absolute',
    bottom: 0,
    color: 'white',
    background: 'rgba(0, 0, 0, 0.6)',
    padding: ({ sizeS }) => (sizeS ? 16 : 8),
    width: '100%',
  },
});

const Home = ({ image, title, description, onClick }) => {
  const sizeL = useMediaQuery('(min-width: 1650px)');
  const sizeM = useMediaQuery('(min-width: 1000px)');
  const sizeS = useMediaQuery('(min-width: 600px)');

  const classes = useStyle({ sizeL, sizeM, sizeS });
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onClick}>
        <CardMedia className={classes.media} image={image} title={title} />
      </CardActionArea>
      <div className={classes.description}>
        <Typography variant={sizeS ? 'h6' : 'subtitle2'}>{title}</Typography>
        <Typography variant={sizeS ? 'subtitle1' : 'caption'}>{description}</Typography>
      </div>
    </Card>
  );
};

export default Home;
