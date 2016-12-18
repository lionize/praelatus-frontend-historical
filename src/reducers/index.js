import { combineReducers } from 'redux-immutablejs'
import dataReducers from 'reducers/data'

export default combineReducers({
  data: dataReducers,
})
