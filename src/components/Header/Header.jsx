import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Header({ handleDrawerIsOpen }) {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerIsOpen}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Chat</Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  handleDrawerIsOpen: PropTypes.func.isRequired,
};

export default Header;
