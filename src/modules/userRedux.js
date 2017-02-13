import { createReducer, createActions } from 'reduxsauce'
import { mergeWith } from 'ramda'
import Immutable from 'seamless-immutable'
import deepMerge from 'util-deep-merge'

/* TYPES AND ACTION CREATORS */

const { Types: types, Creators: creators } = createActions({
  fetchRequest: ['payload'],
  fetchFailure: ['error'],
  createRequest: ['payload'],
  createSuccess: ['user'],
  createFailure: ['error'],
  updateRequest: ['payload'],
  updateSuccess: ['user'],
  updateFailure: ['error'],
  deleteRequest: ['username'],
  deleteSuccess: ['username'],
  deleteFailure: ['error'],
});

export const userTypes = types
export default creators

/* INITIAL STATE */

export const INITIAL_STATE = Immutable({
  byUsername: {},
  usernames: [],
  error: null,
  fetching: false,
})

/* REDUCERS */

export const request = state =>
  state.merge({
    fetching: true,
    error: null,
  })

export const success = (state, { user }) =>
  mergeWith(deepMerge, state, {
    fetching: false,
    error: null,
    usernames: [user.username],
    byUsername: { [user.username]: user }
  })

export const failure = (state, { error }) => state.merge({ fetching: false, error })

export const remove = (state, { username }) => state.merge({
  fetching: false,
  error: null,
  usernames: state.usernames.filter(u => u !== username),
  byUsername: state.byUsername.without(username)
})


/* HOOKUP REDUCERS TO TYPES */

export const reducer = createReducer(INITIAL_STATE, {
  [types.FETCH_REQUEST]: request,
  [types.FETCH_FAILURE]: failure,

  [types.CREATE_REQUEST]: request,
  [types.CREATE_SUCCESS]: success,
  [types.CREATE_FAILURE]: failure,

  [types.UPDATE_REQUEST]: request,
  [types.UPDATE_SUCCESS]: success,
  [types.UPDATE_FAILURE]: failure,

  [types.DELETE_REQUEST]: request,
  [types.DELETE_SUCCESS]: remove,
  [types.DELETE_FAILURE]: failure,
})

/* SELECTORS */

export const user = (state, username) => state.byUsername[username]

export const users = (state, usernames) => {
  let stateUsernames = state.usernames

  if (usernames) {
    stateUsernames = stateUsernames.filter(u => usernames.includes(u))
  }

  return stateUsernames.map(u => user(state, u))
}

export const fetching = state => state.fetching

export const error = state => state.error
