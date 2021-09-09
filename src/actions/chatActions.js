export const ADD_CHAT = 'chats/ADD_CHAT';
export const ADD_MESSAGE_TO_CHAT = 'chats/ADD_MESSAGE_TO_CHAT';

export const addChatToState = () => ({
  type: ADD_CHAT,
});

export const addMessageToChat = data => ({
  type: ADD_MESSAGE_TO_CHAT,
  payload: data,
});
