import page from './pageReducer';
import cart from './cartReducer';
import {combineReducers}from 'redux';

export default combineReducers({page,cart});