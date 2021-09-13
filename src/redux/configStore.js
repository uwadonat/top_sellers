import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './home/home';

const rootReducer = combineReducers({ homeReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
