import { combineReducers } from 'redux'

const baseReducer = (state = {}, action) => {
  return state
}

const reducer = combineReducers({
  baseReducer
})

export default reducer
