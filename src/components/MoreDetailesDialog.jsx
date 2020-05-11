import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  img: {
    width: '100%',
  },
});

const MoreDeatailesDialog = ({ title, text, open, img, onClose }) => {
  const classes = useStyle();
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
        {img && <img className={classes.img} alt={title} src={img} />}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Назад
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MoreDeatailesDialog;
