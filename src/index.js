
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import store from './app/store';
import 'antd/dist/antd.css';

 { /* conectar aplicacion con rootdiv */ }
  ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Envolvemos la aplicacion en la variable store y provider */}
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

