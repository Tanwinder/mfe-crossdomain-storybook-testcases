import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom'

import App from './components/App'

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';


render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);