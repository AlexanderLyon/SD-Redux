import { combineReducers } from 'redux';
import productsReducer from './products';
import userDataReducer from './userData';

export default combineReducers({
  productsReducer,
  userDataReducer
});
