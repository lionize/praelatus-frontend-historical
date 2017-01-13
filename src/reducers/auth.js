import { combineReducers } from 'redux-immutablejs'
import types from 'types/auth'

const currentUser = (state = null, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      return action.response.getIn(['user', 'id'])
    case types.LOGIN_FAILURE:
    case types.LOGOUT_SUCCESS:
      return null
    default:
      return state
  }
}

const error = (state = null, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.LOGIN_SUCCESS:
    case types.LOGOUT_REQUEST:
    case types.LOGOUT_SUCCESS:
    case types.REGISTER_REQUEST:
    case types.REGISTER_SUCCESS:
      return null
    case types.LOGIN_FAILURE:
    case types.REGISTER_FAILURE:
      return action.message
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.LOGOUT_REQUEST:
    case types.REGISTER_REQUEST:
      return true
    case types.LOGIN_SUCCESS:
    case types.LOGIN_FAILURE:
    case types.LOGOUT_SUCCESS:
    case types.REGISTER_SUCCESS:
    case types.REGISTER_FAILURE:
      return false
    default:
      return state
  }
}

export default combineReducers({
  currentUser,
  loading,
  error,
})
