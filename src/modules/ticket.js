import { createReducer, createActions } from 'reduxsauce'
import { mergeWith } from 'ramda'
import Immutable from 'seamless-immutable'
import deepMerge from 'util-deep-merge'

/* TYPES AND ACTION CREATORS */

const { Types: types, Creators: creators } = createActions({
  fetchRequest: ['payload'],
  fetchSuccess: ['response'],
  fetchFailure: ['error'],
  createRequest: ['payload'],
  createSuccess: ['response'],
  createFailure: ['error'],
  updateRequest: ['payload'],
  updateSuccess: ['response'],
  updateFailure: ['error'],
  deleteRequest: ['key'],
  deleteSuccess: ['key'],
  deleteFailure: ['error'],
}, { prefix: 'TICKET_' });

export const ticketTypes = types
export default creators

/* INITIAL STATE */

export const INITIAL_STATE = Immutable({
  byKey: {},
  keys: [],
  error: null,
  fetching: false,
})

/* REDUCERS */

export const request = state =>
  state.merge({
    fetching: true,
    error: null,
  })

export const success = (state, { response }) =>
  Immutable(mergeWith(deepMerge, state, {
    fetching: false,
    error: null,
    keys: response.keys,
    byKey: response.entities,
  }))

export const failure = (state, { error }) => state.merge({ fetching: false, error })

export const remove = (state, { key }) => state.merge({
  fetching: false,
  error: null,
  keys: state.keys.filter(k => k !== key),
  byKey: state.byKey.without(key)
})

/* HOOKUP REDUCERS TO TYPES */

export const reducer = createReducer(INITIAL_STATE, {
  [types.FETCH_REQUEST]: request,
  [types.FETCH_SUCCESS]: success,
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

export const ticket = (state, key) => state.byKey[key]

export const tickets = (state, keys) => {
  let ticketKeys = state.keys

  if (keys) {
    ticketKeys = ticketKeys.filter(k => keys.includes(k))
  }

  return ticketKeys.map(k => ticket(state, k))
}

export const fetching = state => state.fetching

export const error = state => state.error
