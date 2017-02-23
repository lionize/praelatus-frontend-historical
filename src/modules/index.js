import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import configureStore from 'modules/createStore'
import rootSaga from 'sagas'
import { reducer as ticketReducer } from 'modules/ticket'
import { reducer as projectReducer } from 'modules/project'
import { reducer as teamReducer } from 'modules/team'
import { reducer as commentReducer } from 'modules/comment'
import { reducer as userReducer } from 'modules/user'
import { reducer as authReducer } from 'modules/auth'
import { reducer as routerReducer } from 'modules/routes'


export default () => {
  const rootReducer = combineReducers({
    data: combineReducers({
      tickets: ticketReducer,
      projects: projectReducer,
      teams: teamReducer,
      comments: commentReducer,
      users: userReducer,
    }),
    auth: authReducer,
    form: formReducer,
    router: routerReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
