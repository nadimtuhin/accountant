import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import composeEnhancers from './composeEnhancers';
import initialState from './initialState';
import middlewares, { sagaMiddleware } from './middlewares';
import sagas from '../sagas';

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
