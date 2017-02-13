import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducers from './reducers';
import promisesMiddleware from './middleware/promises';
import createLogger from 'redux-logger';

const reducer = combineReducers(reducers);
const logger = createLogger();

let createStoreWithMiddleware = applyMiddleware(
	promisesMiddleware,
	logger,
)(createStore);

var store = createStoreWithMiddleware(reducer,{
	issues: [],
	repository: '',
	counter: 0,
});

export default store;
