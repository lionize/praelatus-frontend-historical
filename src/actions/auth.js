import { normalize } from 'normalizr-immutable'
import types from 'types/auth'
import * as schema from 'schema'

export const loginRequest = payload => ({
  type: types.LOGIN_REQUEST,
  payload,
})

export const loginSuccess = response => ({
  type: types.LOGIN_SUCCESS,
  response: normalize(response, schema.user),
})

export const loginFailure = error => ({
  type: types.LOGIN_FAILURE,
  message: error.message,
})

export const logoutRequest = payload => ({
  type: types.LOGOUT_REQUEST,
})

export const logoutSuccess = response => ({
  type: types.LOGOUT_SUCCESS,
})

export const logoutFailure = error => ({
})

export const registerRequest = payload => ({
  type: types.REGISTER_REQUEST,
  payload,
})

export const registerSuccess = response => ({
  type: types.REGISTER_SUCCESS,
  response,
})

export const registerFailure = error => ({
  type: types.REGISTER_FAILURE,
  message: error.message,
})
