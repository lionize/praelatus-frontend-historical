import { combineReducers } from 'redux-immutablejs'
import { reducer as formReducer } from 'redux-form'
import dataReducers from 'reducers/data'

export default combineReducers({
  data: dataReducers,
  form: formReducer,
})
