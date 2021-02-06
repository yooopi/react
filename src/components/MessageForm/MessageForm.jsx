import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, InputBase, makeStyles } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import cn from 'classnames';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.grey[200],
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  send: {
    padding: 10,
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
