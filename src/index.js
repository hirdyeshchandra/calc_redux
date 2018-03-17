import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './Components/AppContainer';
import state from './store/index';
import Mainreducer from './Reducer/Mainreducer';
import {Provider } from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';

const middleware = applyMiddleware(logger)
const store = createStore(Mainreducer,state,middleware)


ReactDOM.render(
  <Provider store = {store} >
   <AppContainer /> 
  </Provider>, document.getElementById('root'));

