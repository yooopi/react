import { ADD_MESSAGE } from '../actions/messageAction';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const { messageId, author, text } = action.payload;
      const newMessage = {
        id: messageId,
        author,
        text,
        createdAt: new Date(),
      };
      return { ...state, [action.payload.messageId]: newMessage };
    }
    default:
      return state;
  }
};

export default reducer;
