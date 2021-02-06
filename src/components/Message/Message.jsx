import React from 'react';
import PropTypes from 'prop-types';

function Message({ author, text }) {
  return (
    <p>
      <span>{author}</span>
      <span>: </span>
      <span>{text}</span>
    </p>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
