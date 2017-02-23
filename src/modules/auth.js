import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* TYPES AND ACTION CREATORS */

const { Types: types, Creators: creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['username'],
  loginFailure: ['error'],
  logout: null,
  registerRequest: ['payload'],
  registerSuccess: ['username'],
  registerFailure: ['error'],
});

export const authTypes = types
export default creators

/* INITIAL STATE */

export const INITIAL_STATE = Immutable({
  currentUser: null,
  error: null,
  fetching: false,
})

/* REDUCERS */

export const request = state =>
  state.merge({
    fetching: true,
    error: null,
  })

export const success = (state, { username }) =>
  state.merge({
    fetching: false,
    error: null,
    currentUser: username,
  })

export const failure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  })

export const logout = () => INITIAL_STATE


/* HOOKUP REDUCERS TO TYPES */

export const reducer = createReducer(INITIAL_STATE, {
  [types.LOGIN_REQUEST]: request,
  [types.LOGIN_SUCCESS]: success,
  [types.LOGIN_FAILURE]: failure,

  [types.LOGOUT]: logout,

  [types.REGISTER_REQUEST]: request,
  [types.REGISTER_SUCCESS]: success,
  [types.REGISTER_FAILURE]: failure,
})

/* SELECTORS */

export const isLoggedIn = state => state.currentUser !== null
export const currentUser = state => state.currentUser
export const fetching = state => state.fetching
export const error = state => state.error
