import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import reducers from 'reducers'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const middlewares = [sagaMiddleware]

  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({
      stateTransformer: state => state && state.toJS(),
      actionTransformer: action => {
        if (action && action.response) {
          return {
            ...action,
            response: action.response.toJS()
          }
        } else {
          return action
        }
      }
    })
    middlewares.push(logger)
  }

  return {
    ...createStore(
      reducers,
      composeWithDevTools(
        applyMiddleware(...middlewares),
      ),
    ),
    runSaga: sagaMiddleware.run,
  }
}

export default configureStore
