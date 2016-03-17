import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';
import PortfolioApp from './containers/portfolio_app';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <PortfolioApp />
  </Provider>,
  document.getElementById('content')
);
