import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import {InitialState} from './reducers/IntitialState';

import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux';

import {
    Provider
} from 'react-redux';

import {Watchlist} from './reducers/Watchlist.reducer';
import {TopGainers} from './reducers/TopGainer.reducer';
import {TopLosers} from './reducers/TopLoser.reducer';

let middleware = [thunk];
let rootReducer = combineReducers({ 
   Watchlist, 
   TopGainers,
   TopLosers
})
let store = createStore(rootReducer, InitialState, applyMiddleware(...middleware))
ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
