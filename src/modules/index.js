import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import configureStore from 'modules/createStore'
import rootSaga from 'sagas'

export default () => {
  const rootReducer = combineReducers({
    data: combineReducers({
      tickets: require('./ticket').reducer,
      projects: require('./project').reducer,
      teams: require('./team').reducer,
      comments: require('./comment').reducer,
      users: require('./user').reducer,
    }),
    auth: require('./auth').reducer,
    form: formReducer,
    router: require('./router').reducer,
  })

  return configureStore(rootReducer, rootSaga)
}
