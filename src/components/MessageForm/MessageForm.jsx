import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { IconButton, InputBase, makeStyles } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    background: theme.palette.primary.main,
  },
  input: {
    flex: 1,
    padding: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
  send: {
    padding: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
}));

function MessageForm({ addMessage }) {
  const classes = useStyles();
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addMessage({
      author: 'User',
      text,
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className={cn(classes.root)}>
      <InputBase
        value={text}
        onChange={handleChange}
        required
        placeholder="Write your message"
        className={cn(classes.input)}
      />
      <IconButton type="submit" className={cn(classes.send)}>
        <SendIcon />
      </IconButton>
    </form>
  );
}

MessageForm.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default MessageForm;
