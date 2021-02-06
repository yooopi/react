import { CssBaseline, Drawer, makeStyles, Toolbar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header';
import Message from '../Message';
import MessageForm from '../MessageForm';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
    visibility: 'hidden',
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'auto',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  messagesList: {
    padding: theme.spacing(2),
    flexGrow: 1,
    overflow: 'auto',
  },
}));

const Layout = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const addMessage = ({ author, text }) => {
    setMessages([
      ...messages,
      {
        id: uuidv4(),
        author,
        text,
      },
    ]);
  };

  useEffect(() => {
    if (messages[messages.length - 1]?.author === 'User') {
      setTimeout(() => addMessage({ author: 'Bot', text: 'Hahahahhahaha :D' }), 500);
    }
    document.getElementById('lol').lastChild?.scrollIntoView(true);
  });

  return (
    <div className={cn(classes.root)}>
      <CssBaseline />
      <Header handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        className={cn(classes.drawer, !open && classes.drawerHidden)}
        variant="persistent"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
      </Drawer>
      {open && <div className={cn(classes.contentBlur)} />}
      <main
        className={cn(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Toolbar />
        <div id="lol" className={cn(classes.messagesList)}>
          {messages.map(({ id, author, text }) => (
            <Message item key={id} author={author} text={text} />
          ))}
        </div>
        <MessageForm addMessage={addMessage} />
      </main>
    </div>
  );
};
export default Layout;
