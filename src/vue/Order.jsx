import React, { useState, useEffect, forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../components/Section';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import uniqid from 'uniqid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import { Alert } from '@material-ui/lab';
import { ReactComponent as SideTrees } from '../assets/icons/sideTrees.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyle = makeStyles({
  box: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  form: {
    width: ({ sizeM }) => (sizeM ? 600 : '100%'),
  },
  buttons: {
    width: 'inherit',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  buttonFile: {
    display: 'none',
  },
  submitButton: {
    backgroundColor: 'white',
    boxShadow: 'none',
    border: 'none',
  },
  alert: {
    marginBottom: 16,
  },
});

const Order = forwardRef(({ form }, ref) => {
  const sizeL = useMediaQuery('(min-width:1200px)');
  const sizeM = useMediaQuery('(min-width:700px)');
  const classes = useStyle({ sizeM });

  const initialState = { phone: '', email: '', comment: '' };
  const [state, setState] = useState(initialState);
  const [files, setFiles] = useState([]);
  const [isOk, setIsOk] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setState(form);
  }, [form]);

  const handleChange = (field) => (e) => {
    const { value } = e.target;
    setState({ ...state, [field]: value });
  };

  const handleUploadFiles = (e) => {
    var uploadedfiles = e.target.files || e.dataTransfer.files;
    if (!uploadedfiles.length) return;

    const ArrayFiles = Array.from(uploadedfiles);
    setFiles([
      ...ArrayFiles.map((file, index) => ({
        id: uniqid(),
        name: file.name,
        file: uploadedfiles[index],
      })),
      ...files,
    ]);
  };

  const handleDeleteFile = (fileId) => () => {
    setFiles(files.filter(({ id }) => id !== fileId));
  };

  const remove = () => {
    setFiles([]);
    setState(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();

    for (const name in state) {
      formdata.append(name, state[name]);
    }

    files.forEach(({ file }) => {
      formdata.append('files', file);
    });

    axios
      .post('https://formfor.site/send/vl31zJskZJLNnIqn5rRe6Aoxl02MhL', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Credentials': true,
        },
      })
      .then((response) => {})
      .catch(({ response }) => {
        console.log(response);
        // eslint-disable-next-line no-console
        if (response && response.status === 400) {
          setIsOk(false);
          setIsError(true);
          return;
        }
        remove();
        setIsError(false);
        setIsOk(true);
      });
  };

  return (
    <Section ref={ref} id="order" title="СДЕЛАТЬ ЗАКАЗ">
      <div className={classes.box}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Alert className={classes.alert} severity="info">Информационное окно</Alert>
          {isOk && (
            <Alert className={classes.alert}>Данные были отправлены! С вами свяжутся.</Alert>
          )}
          {isError && (
            <Alert className={classes.alert} severity="error">
              Ошибка! Возможно стоит добавить меньше файлов или написать на почту
              ger266.u@yandex.ru.
            </Alert>
          )}
          <TextField
            fullWidth
            variant="outlined"
            label="Ваш номер телефона"
            margin="normal"
            onChange={handleChange('phone')}
            value={state.phone}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Ваш e-mail"
            margin="normal"
            onChange={handleChange('email')}
            value={state.email}
          />
          <TextField
            fullWidth
            multiline
            variant="outlined"
            label="Опишите заказ"
            margin="normal"
            onChange={handleChange('comment')}
            value={state.comment}
          />
          {Boolean(files.length) && (
            <List>
              {files.map((file, id) => (
                <ListItem key={file.id}>
                  <ListItemText primary={file.name} />
                  <ListItemSecondaryAction>
                    <IconButton onClick={handleDeleteFile(file.id)} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          )}
          <div className={classes.buttons}>
            <input
              onChange={handleUploadFiles}
              name="files"
              className={classes.buttonFile}
              type="file"
              id="file-elem"
              multiple
            />
            <label htmlFor="file-elem">
              <Chip onClick={() => {}} variant="outlined" label="Добавить файл" />
            </label>
            <button className={classes.submitButton} type="submit">
              <Chip type="submit" onClick={() => {}} color="primary" label="Отправить" />
            </button>
          </div>
        </form>
        {sizeL && <SideTrees />}
      </div>
    </Section>
  );
});

export default Order;
