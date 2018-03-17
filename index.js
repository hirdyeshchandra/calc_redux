import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

var initState = 0;
const middleware = applyMiddleware(logger)

const mainreducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            // console.log('in the ADD' + state);
            state = state + action.payload;
            return state;
        }
        case 'SUB': {
            // console.log('in the ADD' + state);
            state = state - action.payload;
            return state;
        }
    }
    return state
}
const store = createStore(mainreducer, initState, middleware)
// console.log(store.getState());

store.subscribe(() => {
    console.log('store changed', store.getState());
})

store.dispatch({ type: 'ADD', payload: 1 })
store.dispatch({ type: 'SUB', payload: 10 })
store.dispatch({ type: 'ADD', payload: 1 })
store.dispatch({ type: 'ADD', payload: 1 })
store.dispatch({ type: 'ADD', payload: 1 })
store.dispatch({ type: 'ADD', payload: 1 })
store.dispatch({ type: 'ADD', payload: 1 })
store.dispatch({ type: 'ADD', payload: 1 })


ReactDOM.render(<mainreducer />, document.getElementById('root'));
//registerServiceWorker();
