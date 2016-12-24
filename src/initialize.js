import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { browserHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import reducers from 'reducers'
import sagasManager from 'sagasManager'
import sagas from 'sagas'

/* Configure middleware */
const sagaMiddleware = createSagaMiddleware()
const browserHistoryRouterMiddleware = routerMiddleware(browserHistory)

const middlewares = [sagaMiddleware, browserHistoryRouterMiddleware]

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    stateTransformer: state => state && state.toJS(),

    actionTransformer: action => {
      if (action && action.response) {
        return {
          ...action,
          response: action.response.toJS(),
        }
      } else {
        return action
      }
    }
  })
  middlewares.push(logger)
}

/* Create store */
const store = createStore(
  reducers,
  undefined,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  ),
)

/* Attach sagas */
sagas.forEach(saga =>
  sagasManager.addSagaToRoot(saga)
)
sagaMiddleware.run(sagasManager.getRootSaga())

/* Configure history */
const createSelectLocationState = () => {
  let prevRoutingState, prevRoutingStateJS

  return (state) => {
    const routingState = state.get('routing')
    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }
    return prevRoutingStateJS
  }
}

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: createSelectLocationState(),
})

console.log(history)

export { store, history }
