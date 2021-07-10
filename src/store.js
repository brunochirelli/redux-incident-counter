import { createStore } from 'redux';
import { reducer } from './reducer';

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/**
 * Podemos ocultar em production?
 * process.env === 'development' ? enhancer : null
 */

export const store = createStore(reducer, enhancer);
