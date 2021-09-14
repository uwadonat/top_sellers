import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import detailsReducer from './details/details';
import homeReducer from './home/home';

const rootReducer = combineReducers({ homeReducer, detailsReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
