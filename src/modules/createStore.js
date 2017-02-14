import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

const DEV = process.env.NODE_ENV !== 'production'

export default (rootReducer, rootSaga) => {
  /* REDUX CONFIGURATION */

  const middleware = []
  const enhancers = []

  /* SAGA MIDDLEWARE */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* LOGGER MIDDLEWARE */
  if (DEV) {
    const logger = createLogger()
    middleware.push(logger)
  }

  /* ASSEMBLE MIDDLEWARE */

  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, compose(...enhancers))

  sagaMiddleware.run(rootSaga)

  return store
}
