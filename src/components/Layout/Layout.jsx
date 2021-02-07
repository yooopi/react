import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { CssBaseline, makeStyles, Toolbar } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Header from '../Header';
import MessageForm from '../MessageForm';
import ChatsList from '../ChatsList/ChatsList';
import MessageList from '../MessageList';

const drawerWidth = 240;
const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
});

const Layout = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const chats = ['Bot 1', 'Bot 2', 'Bot 3'];

  const handleDrawerIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const addMessage = ({ author, text }) => {
    setMessages([
      ...messages,
      {
        id: uuidv4(),
        author,
        text,
        createdAt: new Date(),
      },
    ]);
  };

  useEffect(() => {
    if (messages[messages.length - 1]?.author === 'User') {
      setTimeout(() => addMessage({ author: 'Bot', text: 'Hahahahhahaha :D' }), 500);
    }
    document.getElementById('messagesList').lastChild?.scrollIntoView(true);
  });

  return (
    <div className={cn(classes.root)}>
      <CssBaseline />
      <Header handleDrawerIsOpen={handleDrawerIsOpen} isOpen={isOpen} />
      <SwipeableDrawer
        open={isOpen}
        onClose={handleDrawerIsOpen}
        onOpen={handleDrawerIsOpen}
        className={cn(classes.drawer)}
        classes={{
          paper: classes.drawer,
        }}
      >
        <ChatsList chats={chats} handleDrawerIsOpen={handleDrawerIsOpen} />
      </SwipeableDrawer>
      <main className={cn(classes.content)}>
        <Toolbar />
        <MessageList messages={messages} />
        <MessageForm addMessage={addMessage} />
      </main>
    </div>
  );
};

export default Layout;
