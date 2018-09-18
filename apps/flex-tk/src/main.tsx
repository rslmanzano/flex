import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { configureStore, sagaMiddleware } from 'app/store';
import { App } from 'app';
import rootSaga from 'app/saga';
import { ThemeProvider, theme } from 'app/style/theme';
import 'react-table/react-table.css';

// prepare store
const history = createBrowserHistory();
const store = configureStore(history);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
