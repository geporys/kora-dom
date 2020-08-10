import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const SnackbarConst = ({
  onClose,
  open,
  text,
  severity,
  vertical = 'top',
  horizontal = 'center',
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert onClose={onClose} severity={severity}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarConst;
