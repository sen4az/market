import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import "semantic-ui-css/semantic.min.css";

import App from './containers/App';

import createStore from './store';

ReactDOM.render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
