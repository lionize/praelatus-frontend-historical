/** @module comments/reducers */

import { Map, List } from 'immutable'
import { combineReducers } from 'redux-immutablejs'
import types from 'types/comments'
import dataTypes from 'types/data'

/**
 * Reducer that manages a Map of all comments in the state. The key is the project's
 * stringified id, and the value is a Map that represents all fields of the
 * comment.
 *
 * If byId is passed a comment delete action, byId will delete that ticket and
 * return the result.
 *
 * If byId is passed an action that has a response attribute, byId will merge
 * that current state with the response's comments entities and return it.
 *
 * Returns the state param if passed no action or an action without a response
 * attribute.
 *
 * @param {Map} [state=Map] - The byId portion of the comment state.
 * @param {object} action - The action that determines how byId will deal with
 * its return.
 * @return {Map}
 */
const byId = (state = Map(), action) => {
  if (action.type === types.DELETE_COMMENT_SUCCESS) {
    return state.delete(action.id.toString())
  }

  if (action.response) {
    return state.merge(action.response.entities.comments)
  }

  return state
}

/**
 * Reducer that manages a List of all comment ids in the state.
 *
 * When comments are fetched successfully from the server, the reducer will
 * replace its state with the new list of ids.
 *
 * When a comment is created, the reducer will add that project to its list of ids
 * and return the new list.
 *
 * When a comment is deleted, the reducer will remove that project's id from the list
 * and return the result.
 *
 * @param {List} [state=List] - The ids portion of the comments state.
 * @param {object} action - The action that determines how ids handles its
 * state return.
 * @return {List}
 */
const ids = (state = List(), action) => {
  console.log('action', action)
  switch (action.type) {
    case dataTypes.FETCH_DATA_SUCCESS:
      if (action.responseType === 'comment')
        return List(action.response.result)
      else
        return state
    case types.CREATE_COMMENT_SUCCESS:
      return state.push(action.response.result)
    case types.DELETE_COMMENT_SUCCESS:
      const index = state.indexOf(action.id)
      return state.delete(index)
    default:
      return state
  }
}

/**
 * Reducer that manages the error message for the comments portion of the state.
 *
 * If an action with a failure type is passed, the state is updated to the
 * action's message. If the type is success or request, we update the state to
 * null as we no longer need the previous error message. Otherwise, we return
 * the previous error message.
 *
 * @param {string|null} [state=null] - The error message portion of the comments
 * state.
 * @param {object} action - The action that determines how error handles its
 * state return.
 * @return {string|null}
 */
const error = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS_FAILURE:
    case types.CREATE_COMMENT_FAILURE:
    case types.UPDATE_COMMENT_FAILURE:
    case types.DELETE_COMMENT_FAILURE:
      return action.message
    case dataTypes.FETCH_DATA_SUCCESS:
    case types.FETCH_COMMENTS_REQUEST:
    case types.CREATE_COMMENT_SUCCESS:
    case types.CREATE_COMMENT_REQUEST:
    case types.UPDATE_COMMENT_SUCCESS:
    case types.UPDATE_COMMENT_REQUEST:
    case types.DELETE_COMMENT_SUCCESS:
    case types.DELETE_COMMENT_REQUEST:
      return null
    default:
      return state
  }
}

/**
 * Reducer that manages the loading state for the comments portion of the state.
 *
 * If an action with a type of request is passed, the state is updated to true
 * as comments are being loaded. If an action with type success or failure is
 * passed, state is set to false as we are no longer loading any comments.
 * Otherwise we return the current state.
 *
 * @param {boolean} [state=false] - The loading state portion of the comments
 * state.
 * @params {object} action - The action that determines how loading handles its
 * state return.
 * @return {boolean}
 */
const loading = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS_REQUEST:
    case types.CREATE_COMMENT_REQUEST:
    case types.UPDATE_COMMENT_REQUEST:
    case types.DELETE_COMMENT_REQUEST:
      return true
    case dataTypes.FETCH_DATA_SUCCESS:
    case types.FETCH_COMMENTS_FAILURE:
    case types.CREATE_COMMENT_SUCCESS:
    case types.CREATE_COMMENT_FAILURE:
    case types.UPDATE_COMMENT_SUCCESS:
    case types.UPDATE_COMMENT_FAILURE:
    case types.DELETE_COMMENT_SUCCESS:
    case types.DELETE_COMMENT_FAILURE:
      return false
    default:
      return state
  }
}

/**
 * Combines all of the reducers into a single reducer structure. The state is
 * handled as a Map, with each key representing that piece of the comment state.
 *
 * The comments state structure ends up looking like the following:
 *
 * Map {
 *   byId:Map,
 *   ids:List,
 *   error:string?,
 *   loading:boolean
 * }
 *
 * When an action is passed to the comments reducer, each reducer is called with
 * its piece of the combined state as well as the action. The returned value
 * from each reducer represents the new state value for that portion of the
 * state.
 *
 * @returns {function} - The combined reducers.
 */
const reducer = combineReducers({
  byId,
  ids,
  error,
  loading,
})
export default reducer
