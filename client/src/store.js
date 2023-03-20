import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { productListReducer } from './reducers/productReducers.js';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  productList: productListReducer,
});

const initialState = {};

const preloadedState = {};

const store = configureStore({
  reducer,
  initialState,
  preloadedState,
  middleware: [thunk],
});

export default store;
