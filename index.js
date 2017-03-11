import React from 'react';
import { render } from 'react-dom';
import App from './modules/App';
import { createHistory } from 'history';
import { Router, Route, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('app'));



