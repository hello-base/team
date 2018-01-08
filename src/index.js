import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';

import { App } from './containers/App';
import foundation from 'helpers/foundation';

import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const target = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={foundation}>
        <main>
          <Switch>
            <Route component={App} />
          </Switch>
        </main>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
