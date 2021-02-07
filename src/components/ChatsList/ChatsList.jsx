import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
  makeStyles,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import AdbIcon from '@material-ui/icons/Adb';

const drawerWidth = 240;
const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
});
function ChatsList({ chats, isOpen, handleDrawerIsOpen }) {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      open={isOpen}
      onClose={handleDrawerIsOpen}
      onOpen={handleDrawerIsOpen}
      className={cn(classes.drawer)}
      classes={{
        paper: classes.drawer,
      }}
    >
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
    </SwipeableDrawer>
  );
}

ChatsList.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleDrawerIsOpen: PropTypes.func.isRequired,
};

export default ChatsList;
