import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import Immutable from 'immutable';
import reducer from './redux'
import App from './App';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    Immutable.Map(),
    composeEnhancer(applyMiddleware(thunk))
);
render(<App store={store} />, document.getElementById('app'));
