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
  deleteRequest: ['id'],
  deleteSuccess: ['id'],
  deleteFailure: ['error'],
});

export const commentTypes = types
export default creators

/* INITIAL STATE */

export const INITIAL_STATE = Immutable({
  byId: {},
  ids: [],
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
  mergeWith(deepMerge, state, {
    fetching: false,
    error: null,
    ids: response.result,
    byId: response.entities.comments,
  })

export const failure = (state, { error }) => state.merge({ fetching: false, error })

export const remove = (state, { id }) => state.merge({
  fetching: false,
  error: null,
  ids: state.ids.filter(i => i !== id),
  byId: state.byId.without(id)
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

export const comment = (state, id) => state.byId[String(id)]

export const comments = (state, ids) => {
  let commentIds = state.ids

  if (ids) {
    commentIds = commentIds.filter(i => ids.includes(i))
  }

  return commentIds.map(i => comment(state, i))
}

export const fetching = state => state.fetching

export const error = state => state.error
