import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Paper, Typography, makeStyles, Box, Tooltip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(1),
    wordBreak: 'break-all',
    width: 'fit-content',
    maxWidth: '80%',
  },
  title: {
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'space-between',
  },
  author: {
    marginRight: theme.spacing(2),
  },
  tooltipPosition: {
    marginBottom: '4px',
  },
  send: {
    marginLeft: 'auto',
    background: theme.palette.grey[300],
  },
  answer: {
    marginRight: 'auto',
  },
}));
function Message({ author, text, createdAt }) {
  const classes = useStyles();
  const messageShortDate = `${createdAt.getHours()}:${createdAt.getMinutes()}`;
  const messageFullDate = createdAt.toLocaleString();

  return (
    <Paper
      className={cn(classes.container, author === 'User' ? classes.send : classes.answer)}
    >
      <Box className={cn(classes.title)}>
        <Typography variant="caption" className={cn(classes.author)}>
          {author}
        </Typography>
        <Tooltip
          title={messageFullDate}
          arrow
          placement="top"
          classes={{ tooltip: classes.tooltipPosition }}
        >
          <Typography variant="caption">{messageShortDate}</Typography>
        </Tooltip>
      </Box>
      <Typography variant="body1">{text}</Typography>
    </Paper>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
};

export default Message;
