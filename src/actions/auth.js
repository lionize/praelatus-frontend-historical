import formatAuthResponse from 'utils/format-auth-response'
import types from 'types/auth'

export const loginRequest = payload => ({
  type: types.LOGIN_REQUEST,
  payload,
})

export const loginSuccess = response => ({
  type: types.LOGIN_SUCCESS,
  response: formatAuthResponse(response),
})

export const loginFailure = error => ({
  type: types.LOGIN_FAILURE,
  message: error.message,
})

export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST,
})

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
})

export const logoutFailure = () => ({
})

export const registerRequest = payload => ({
  type: types.REGISTER_REQUEST,
  payload,
})

export const registerSuccess = response => ({
  type: types.REGISTER_SUCCESS,
  response: formatAuthResponse(response),
})

export const registerFailure = error => ({
  type: types.REGISTER_FAILURE,
  message: error.message,
})
