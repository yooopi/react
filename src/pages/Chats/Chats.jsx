import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import MessageForm from '../../components/MessageForm';
import MessageList from '../../components/MessageList';
import { addMessageToChat } from '../../actions/chatActions';
import { addMessageToState } from '../../actions/messageAction';

function Chats() {
  const chats = useSelector(state => state.chats.byIds);
  const messages = useSelector(state => state.messages);
  const { id } = useParams();

  const dispatch = useDispatch();
  const setMessage = data => {
    dispatch(addMessageToState(data));
  };
  const setChats = data => {
    dispatch(addMessageToChat(data));
  };

  const addMessage = ({ author, text }) => {
    const messageId = uuidv4();
    setMessage({ messageId, author, text });
    setChats({ id, messageId });
  };

  const getMessages = () => {
    if (id in chats) {
      return chats[id].messageList.map(messId => messages[messId]);
    }
    return [];
  };
  const chatMessages = getMessages();

  useEffect(() => {
    if (chatMessages[chatMessages.length - 1]?.author === 'User') {
      addMessage({ author: 'Bot', text: 'Hahahahhahaha 🐷' });
    }
    document.getElementById('messagesList').lastChild?.scrollIntoView(true);
  });

  return (
    <>
      <MessageList messages={chatMessages} />
      <MessageForm addMessage={addMessage} />
    </>
  );
}

export default Chats;
