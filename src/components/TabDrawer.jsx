import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import 'react-image-gallery/styles/css/image-gallery.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyle = makeStyles({
  content: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  tabs: {
    width: '100%',
  },
  paper: {
    width: '100%',
  },
  indicator: {
    backgroundColor: 'black',
  },
});

const TabDrawer = ({ tabs, open, onClose }) => {
  const classes = useStyle();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTimeout(() => {
      onClose();
    }, 500);
  };
  return (
    <Drawer
      classes={{
        paper: classes.paper,
      }}
      open={open}
      onClose={onClose}
      anchor="right"
    >
      <div className={classes.content}>
        <Tabs
          classes={{ root: classes.tabs, indicator: classes.indicator }}
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {tabs.map(({ label, id, ref }) => (
            <Tab
              component="a"
              href={'#' + ref}
              classes={{
                textColorInherit: classes.textColorInherit,
              }}
              key={id}
              label={label}
            />
          ))}
        </Tabs>
      </div>
    </Drawer>
  );
};

export default TabDrawer;
