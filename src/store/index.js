import productReducer from './reducers/products';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(productReducer, applyMiddleware(thunk));
