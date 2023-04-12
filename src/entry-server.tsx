import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.scss';

export const render = () => {
  if (typeof window !== 'undefined') {
    return ReactDOMServer.renderToString(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    );
  }
};
