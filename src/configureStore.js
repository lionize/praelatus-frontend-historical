import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import reducers from 'modules'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const middlewares = [sagaMiddleware]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return {
    ...createStore(
      reducers,
      applyMiddleware(...middlewares),
    ),
    runSaga: sagaMiddleware.run,
  }
}

export default configureStore
