import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MessageForm from '../../components/MessageForm';
import MessageList from '../../components/MessageList';

function Chats() {
  const [messages, setMessages] = useState([]);

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
      setTimeout(() => addMessage({ author: 'Bot', text: 'Hahahahhahaha 🐷' }), 500);
    }
    document.getElementById('messagesList').lastChild?.scrollIntoView(true);
  });

  return (
    <>
      <MessageList messages={messages} />
      <MessageForm addMessage={addMessage} />
    </>
  );
}

export default Chats;
