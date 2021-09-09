import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import messagesReducer from './messagesReducer';

const rootReducer = combineReducers({
  chats: chatReducer,
  messages: messagesReducer,
});

export default rootReducer;
