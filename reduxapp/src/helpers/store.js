import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from '../reducers';

/* eslint-disable */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(initialState) {
  const store = createStore(
    combineReducers,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );

  return store;
}
