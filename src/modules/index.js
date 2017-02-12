import { combineReducers } from 'redux'
import configureStore from 'modules/createStore'

export default () => {
  const rootReducer = combineReducers({
    tickets: require('./ticketRedux').reducer,
  })

  return configureStore(rootReducer)
}
