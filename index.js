import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import CubeNet from './modules/CubeNet';
import { createHistory } from 'history';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store/configureStore'

const store = configureStore();

render((
  <Provider store={store}>
      <CubeNet />
  </Provider>
), document.getElementById('app'));



