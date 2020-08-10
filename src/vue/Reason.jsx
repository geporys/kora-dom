import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../components/Section';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { ReactComponent as Circle } from '../assets/icons/circle.svg';
import List from '@material-ui/core/List';

const items = [
  'Солидная репутация и опыт работы с 2000г',
  'Производство полного цикла от лесозаготовки до отгрузки домокомплекта',
  'Высокоспециализированные плотники',
  'Экологически чистый лес с севера Костромской области',
  'Гарантия до 5 лет',
];

const Reason = () => {
  return (
    <Section id="causes" title="ПРИЧИНЫ">
      <List>
        {items.map((item, index) => (
          <ListItem key={index} button>
            <ListItemIcon>
              <Circle />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export default Reason;
