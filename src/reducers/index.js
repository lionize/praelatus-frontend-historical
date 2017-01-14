import { combineReducers } from 'redux-immutablejs'
import { reducer as formReducer } from 'redux-form/immutable'
import dataReducers from 'reducers/data'
import routerReducer from 'reducers/router'
import authReducer from 'reducers/auth'

export default combineReducers({
  data: dataReducers,
  form: formReducer,
  routing: routerReducer,
  auth: authReducer,
})
