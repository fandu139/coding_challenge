import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/router';
import * as serviceWorker from './serviceWorker';
import { StoreProvider, createStore } from 'easy-peasy';
import 'bootstrap/dist/css/bootstrap.min.css'

import model from './easyPeasy/model'

const store = createStore(model)

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
