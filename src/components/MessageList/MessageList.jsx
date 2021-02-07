import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Grid, makeStyles } from '@material-ui/core';
import Message from '../Message';

const useStyles = makeStyles(theme => ({
  messagesList: {
    padding: theme.spacing(1),
    flexGrow: 1,
    overflow: 'auto',
    margin: 0,
    width: '100%',
    flexWrap: 'nowrap',
  },
}));

function MessageList({ messages }) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      spacing={3}
      id="messagesList"
      className={cn(classes.messagesList)}
    >
      {messages.map(({ id, author, text, createdAt }) => (
        <Grid item key={id}>
          <Message item author={author} text={text} createdAt={createdAt} />
        </Grid>
      ))}
    </Grid>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default MessageList;
