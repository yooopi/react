import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AdbIcon from '@material-ui/icons/Adb';

function ChatsList({ chats, handleDrawerIsOpen }) {
  return (
    <List>
      {chats.map(text => (
        <ListItem button key={text} onClick={handleDrawerIsOpen}>
          <ListItemIcon>
            <AdbIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
}

ChatsList.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleDrawerIsOpen: PropTypes.func.isRequired,
};

export default ChatsList;
