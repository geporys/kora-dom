import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const colors = {
  gray: '#f2f3f7',
  white: 'white',
};

const useStyle = makeStyles(() => ({
  root: {
    padding: ({ noPadding, sizeL }) =>
      noPadding ? '56px 0 0 0' : sizeL ? '56px 64px' : '56px 16px',
    backgroundColor: ({ color }) => colors[color],
  },
  title: {
    paddingLeft: ({ noPadding, sizeL }) => (noPadding ? (sizeL ? 64 : 16) : 0),
    paddingBottom: 32,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));

const Section = forwardRef(({ children, title, noPadding, id, color = 'white' }, ref) => {
  const sizeL = useMediaQuery('(min-width: 600px)');
  const classes = useStyle({ color, noPadding, sizeL });
  return (
    <div ref={ref} id={id} className={classes.root}>
      <Typography variant={sizeL ? 'h3' : 'h4'} component="h3" className={classes.title}>
        {title}
      </Typography>
      {children}
    </div>
  );
});

export default Section;
