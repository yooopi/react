import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CssBaseline, makeStyles, Toolbar } from '@material-ui/core';
import Header from '../Header';
import ChatsList from '../ChatsList/ChatsList';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn(classes.root)}>
      <CssBaseline />
      <Header isOpen={isOpen} handleDrawerIsOpen={handleDrawerIsOpen} />
      <ChatsList isOpen={isOpen} handleDrawerIsOpen={handleDrawerIsOpen} />
      <main className={cn(classes.content)}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
