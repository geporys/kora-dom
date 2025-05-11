import React from 'react';
import Section from '../components/Section';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Define inline SVG icons
const icons = [
  // Reputation icon
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 18 L6 21 L7 14 L2 9 L9 8 Z" />
  </svg>,
  // Production cycle icon
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>,
  // Carpenter icon
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 20 L12 4 L22 20 Z" />
    <circle cx="12" cy="17" r="1" />
  </svg>,
  // Eco wood icon
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2 L15 8 L18 2" />
    <path d="M6 12 L12 22 L18 12" />
  </svg>,
  // Warranty icon
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2 L20 7 V17 L12 22 L4 17 V7 Z" />
    <path d="M12 11v5" />
    <circle cx="12" cy="9" r="1" />
  </svg>,
];

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
          <ListItem key={index}>
            <ListItemIcon>{icons[index]}</ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export default Reason;
