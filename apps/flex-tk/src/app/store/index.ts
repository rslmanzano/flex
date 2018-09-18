import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';

import { RootState, rootReducer } from 'app/reducers';
import { logger } from 'app/store/middleware';

import createSagaMiddleware from "redux-saga"


export const sagaMiddleware = createSagaMiddleware();

export function configureStore(history: History, initialState?: RootState): Store<RootState> {


  let middleware = applyMiddleware(logger, routerMiddleware(history), sagaMiddleware);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer as any, initialState as any, middleware) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      const nextReducer = require('app/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
