import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { CssBaseline, Drawer, makeStyles, Toolbar } from '@material-ui/core';
import Header from '../Header';
import MessageForm from '../MessageForm';
import ChatsList from '../ChatsList/ChatsList';
import MessageList from '../MessageList';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: theme.zIndex.appBar - 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHidden: {
    visibility: 'hidden', // Скрытый drawer перекрывал инпут
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    marginLeft: -drawerWidth,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    marginLeft: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

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
      <Header handleDrawerIsOpen={handleDrawerIsOpen} />
      <Drawer
        className={cn(classes.drawer, !isOpen && classes.drawerHidden)}
        variant="persistent"
        open={isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <ChatsList chats={chats} />
      </Drawer>
      {isOpen && <div className={cn(classes.contentBlur)} />}
      <main className={cn(classes.content, isOpen && classes.contentShift)}>
        <Toolbar />
        <MessageList messages={messages} />
        <MessageForm addMessage={addMessage} />
      </main>
    </div>
  );
};

export default Layout;
