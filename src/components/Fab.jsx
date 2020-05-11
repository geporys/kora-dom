import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { ReactComponent as SmallTrees } from '../assets/icons/smallTrees.svg';

const useStyle = makeStyles({
  root: {
    position: 'fixed',
    right: 24,
    bottom: 24,
    zIndex: 800,
    backgroundColor: 'rgb(242, 243, 247)',
  },
});

const KDFab = ({ onClick }) => {
  const classes = useStyle();
  return (
    <Fab onClick={onClick} classes={{ root: classes.root }} size="large">
      <SmallTrees />
    </Fab>
  );
};

export default KDFab;
