import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Application from './Application';

import './index.scss';
import { store } from './store';

/**
 * Aqui entra o react-redux.
 *
 */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
