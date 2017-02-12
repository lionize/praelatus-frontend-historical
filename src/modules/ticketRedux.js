import { createReducer, createActions } from 'reduxsauce'
import { mergeWith } from 'ramda'
import Immutable from 'seamless-immutable'
import deepMerge from 'util-deep-merge'

/* TYPES AND ACTION CREATORS */

const { types, creators } = createActions({
  fetchRequest: ['payload'],
  fetchFailure: ['error'],
  createRequest: ['payload'],
  createSuccess: ['ticket'],
  createFailure: ['error'],
  updateRequest: ['payload'],
  updateSuccess: ['ticket'],
  updateFailure: ['error'],
  deleteRequest: ['key'],
  deleteSuccess: ['key'],
  deleteFailure: ['error'],
})

export const ticketTypes = types
export const creators

/* INITIAL STATE */

export const INITIAL_STATE = Immutable({
  byKey: {},
  keys: [],
  error: null,
  fetching: false,
})

/* REDUCERS */

export const request = state => state.merge({ fetching: true })

export const success = (state, { ticket }) =>
  mergeWith(deepMerge, state, {
    fetching: false,
    error: null,
    keys: [ticket.key],
    byKey: { [ticket.key]: ticket }
  })

export const failure = (state, { error }) => state.merge({ fetching: false, error })

export const remove = (state, { key }) => state.merge({
  keys: state.keys.filter(k => k !== key),
  byKey: state.byKey.without(key)
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

export const ticketSelector = (state, key) => state.byKey[key]

export const ticketsSelector = (state, keys) => {
  let ticketKeys = state.keys

  if (keys) {
    ticketKeys = ticketKeys.filter(k => keys.includes(key))
  }

  return ticketKeys.map(k => ticketSelector(state, k))
}

export const fetching = state => state.fetching

export const error = state => state.error
