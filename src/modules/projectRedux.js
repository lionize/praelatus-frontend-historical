import { createReducer, createActions } from 'reduxsauce'
import { mergeWith } from 'ramda'
import Immutable from 'seamless-immutable'
import deepMerge from 'util-deep-merge'

/* TYPES AND ACTION CREATORS */

const { Types: types, Creators: creators } = createActions({
  fetchRequest: ['payload'],
  fetchFailure: ['error'],
  createRequest: ['payload'],
  createSuccess: ['project'],
  createFailure: ['error'],
  updateRequest: ['payload'],
  updateSuccess: ['project'],
  updateFailure: ['error'],
  deleteRequest: ['key'],
  deleteSuccess: ['key'],
  deleteFailure: ['error'],
});

export const projectTypes = types
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

export const success = (state, { project }) =>
  mergeWith(deepMerge, state, {
    fetching: false,
    error: null,
    keys: [project.key],
    byKey: { [project.key]: project }
  })

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

export const project = (state, key) => state.byKey[key]

export const projects = (state, keys) => {
  let projectKeys = state.keys

  if (keys) {
    projectKeys = projectKeys.filter(k => keys.includes(k))
  }

  return projectKeys.map(k => project(state, k))
}

export const fetching = state => state.fetching

export const error = state => state.error
