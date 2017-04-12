import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { browserHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const DEV = process.env.NODE_ENV !== 'production';

export default (rootReducer, rootSaga) => {
  /* REDUX CONFIGURATION */

  const middleware = [];
  const enhancers = [];

  /* BROWSER HISTORY ROUTER MIDDLEWARE */
  const browserHistoryRouterMiddleware = routerMiddleware(browserHistory);
  middleware.push(browserHistoryRouterMiddleware);

  /* SAGA MIDDLEWARE */

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* LOGGER MIDDLEWARE */
  if (DEV) {
    const logger = createLogger();
    middleware.push(logger);
  }

  /* ASSEMBLE MIDDLEWARE */

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, composeWithDevTools(...enhancers));

  sagaMiddleware.run(rootSaga);

  /* CONFIGURE BROWSER HISTORY */
  const history = syncHistoryWithStore(browserHistory, store);

  return {
    store,
    history,
  };
};
