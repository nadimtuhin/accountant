import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/rootReducer';
import initialState from './initialState';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  thunk,
  sagaMiddleware,
  logger
];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
);

sagas.forEach(saga => sagaMiddleware.run(saga));

export default store;
