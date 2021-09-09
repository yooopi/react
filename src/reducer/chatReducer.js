import { v4 as uuidv4 } from 'uuid';
import { ADD_CHAT, ADD_MESSAGE_TO_CHAT } from '../actions/chatActions';

const initialState = {
  byIds: {
    1: { id: 1, title: 'Chat 1', messageList: [] },
    2: { id: 2, title: 'Chat 2', messageList: [] },
    3: { id: 3, title: 'Chat 3', messageList: [] },
  },
  ids: [1, 2, 3],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      const newId = uuidv4();
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [newId]: { id: newId, title: `Chat ${newId.slice(-4)}`, messageList: [] },
        },
        ids: [...state.ids, newId],
      };
    }
    case ADD_MESSAGE_TO_CHAT: {
      const { id, messageId } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            messageList: [...state.byIds[id].messageList, messageId],
          },
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
