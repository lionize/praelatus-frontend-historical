import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reducers from 'modules'

const configureStore = () => {
  const middlewares = []

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return createStore(
    reducers,
    applyMiddleware(...middlewares)
  )
}

export default configureStore
