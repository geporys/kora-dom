import React, {forwardRef, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Section from '../components/Section';
import LumberDrawer from '../components/LumberDrawer';
import {lumbers} from "../assets/mock/lumber";
import Lumber from "../components/Lumber";

const useStyle = makeStyles({
  content: {
      overflowX: "scroll",
      whiteSpace: "nowrap",
  },
});

const Lumbers = forwardRef(({ makeOrder }, ref) => {
  const classes = useStyle();
  const [selectedLumber, setSelectedLumber] = useState(false);
  const handleClick = (lumber) => () => {
    setSelectedLumber(lumber);
  };
  const handleClose = () => {
    setSelectedLumber(null);
  };
  return (
    <>
      <Section ref={ref} id="lumbers" title="Наши пиломатериалы" color="gray">
        <div className={classes.content }>
                {lumbers.map(({ id, imgs, title, ...props }) => (
                    <Lumber
                        onClick={handleClick({ imgs, title, ...props })}
                        key={id}
                        image={imgs}
                        title={title}
                    />
                ))}
        </div>
      </Section>
      <LumberDrawer
        open={Boolean(selectedLumber)}
        makeOrder={makeOrder}
        onClose={handleClose}
        lumber={selectedLumber}
      />
    </>
  );
});

export default Lumbers;
