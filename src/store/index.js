import { createStore, applyMiddleware, compose } from 'redux';
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

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
);

const store = createStore(
  rootReducer,
  initialState,
  enhancer,
);

sagas.forEach(saga => sagaMiddleware.run(saga));

export default store;
