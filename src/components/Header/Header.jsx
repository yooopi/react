import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

function Header({ handleDrawerOpen }) {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          // className={cn(classes.menuButton)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Chat</Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  handleDrawerOpen: PropTypes.func.isRequired,
};

export default Header;
