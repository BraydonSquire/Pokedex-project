import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducer';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

export default createStore(reducer, composeWithDevTools( applyMiddleware( promiseMiddleware() ) ) ); //this is basically the entire syntax for a store.js file. 