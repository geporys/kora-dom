import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  panel: {
    marginBottom: 24,
    border: '2px solid #e2e5eb',
    boxShadow: 'none',
    borderRadius: 10,
  },
  expandedRoot: {
    '&:before': {
      display: 'none',
    },
  },
});

const Expands = ({ items }) => {
  const classes = useStyle();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {items.map((item, index) => (
        <ExpansionPanel
          square
          className={classes.panel}
          classes={{
            root: classes.expandedRoot,
          }}
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={'content-' + index}
            id={'header-' + index}
          >
            <Typography>{item.question}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{item.answer}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default Expands;
