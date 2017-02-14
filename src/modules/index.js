import { combineReducers } from 'redux'
import configureStore from 'modules/createStore'

export default () => {
  const rootReducer = combineReducers({
    data: combineReducers({
      tickets: require('./ticketRedux').reducer,
      projects: require('./projectRedux').reducer,
      teams: require('./teamRedux').reducer,
      comments: require('./commentRedux').reducer,
      users: require('./userRedux').reducer,
    }),
    auth: require('./authRedux').reducer,
  })

  return configureStore(rootReducer)
}
