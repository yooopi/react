export const ADD_MESSAGE = 'messages/ADD_MESSAGE';

export const addMessageToState = data => ({
  type: ADD_MESSAGE,
  payload: data,
});
