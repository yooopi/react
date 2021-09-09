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
  Button,
} from '@material-ui/core';
import AdbIcon from '@material-ui/icons/Adb';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChatToState } from '../../actions/chatActions';

const drawerWidth = 240;
const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
});
function ChatsList({ isOpen, handleDrawerIsOpen }) {
  const classes = useStyles();

  const chats = useSelector(state => state.chats.byIds);
  const dispatch = useDispatch();

  const addChat = () => {
    dispatch(addChatToState());
  };

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
        {Object.values(chats).map(({ id, title }) => (
          <Link to={`/chats/${id}`} key={id}>
            <ListItem button onClick={handleDrawerIsOpen}>
              <ListItemIcon>
                <AdbIcon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Button onClick={addChat}>ADD CHAT</Button>
    </SwipeableDrawer>
  );
}

ChatsList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleDrawerIsOpen: PropTypes.func.isRequired,
};

export default ChatsList;
