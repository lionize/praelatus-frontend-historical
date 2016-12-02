/** @module teams/reducers */

import { Map, List } from 'immutable'
import { combineReducers } from 'redux-immutablejs'
import types from 'types/teams'

/**
 * Reducer that manages a Map of all teams in the state. The key is the team's
 * stringified id, and the value is a Map that represents all fields of the
 * team.
 *
 * If byId is passed a team delete action, byId will delete that ticket and
 * return the result.
 *
 * If byId is passed an action that has a response attribute, byId will merge
 * that current state with the response's teams entities and return it.
 *
 * Returns the state param if passed no action or an action without a response
 * attribute.
 *
 * @param {Map} [state=Map] - The byId portion of the team state.
 * @param {object} action - The action that determines how byId will deal with
 * its return.
 * @return {Map}
 */
const byId = (state = Map(), action) => {
  if (action.type === types.DELETE_TEAM_SUCCESS) {
    return state.delete(action.id.toString())
  }

  if (action.response) {
    return state.merge(action.response.entities.teams)
  }

  return state
}

/**
 * Reducer that manages a List of all team ids in the state.
 *
 * When teams are fetched successfully from the server, the reducer will
 * replace its state with the new list of ids.
 *
 * When a team is created, the reducer will add that team to its list of ids
 * and return the new list.
 *
 * When a team is deleted, the reducer will remove that team's id from the list
 * and return the result.
 *
 * @param {List} [state=List] - The ids portion of the teams state.
 * @param {object} action - The action that determines how ids handles its
 * state return.
 * @return {List}
 */
const ids = (state = List(), action) => {
  switch (action.type) {
    case types.FETCH_TEAMS_SUCCESS:
      return List(action.response.result)
    case types.CREATE_TEAM_SUCCESS:
      return state.push(action.response.result)
    case types.DELETE_TEAM_SUCCESS:
      const index = state.indexOf(action.id)
      return state.delete(index)
    default:
      return state
  }
}

/**
 * Reducer that manages the error message for the teams portion of the state.
 *
 * If an action with a failure type is passed, the state is updated to the
 * action's message. If the type is success or request, we update the state to
 * null as we no longer need the previous error message. Otherwise, we return
 * the previous error message.
 *
 * @param {string|null} [state=null] - The error message portion of the teams
 * state.
 * @param {object} action - The action that determines how error handles its
 * state return.
 * @return {string|null}
 */
const error = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_TEAMS_FAILURE:
    case types.CREATE_TEAM_FAILURE:
    case types.UPDATE_TEAM_FAILURE:
    case types.DELETE_TEAM_FAILURE:
      return action.message
    case types.FETCH_TEAMS_SUCCESS:
    case types.FETCH_TEAMS_REQUEST:
    case types.CREATE_TEAM_SUCCESS:
    case types.CREATE_TEAM_REQUEST:
    case types.UPDATE_TEAM_SUCCESS:
    case types.UPDATE_TEAM_REQUEST:
    case types.DELETE_TEAM_SUCCESS:
    case types.DELETE_TEAM_REQUEST:
      return null
    default:
      return state
  }
}

/**
 * Reducer that manages the loading state for the teams portion of the state.
 *
 * If an action with a type of request is passed, the state is updated to true
 * as teams are being loaded. If an action with type success or failure is
 * passed, state is set to false as we are no longer loading any teams.
 * Otherwise we return the current state.
 *
 * @param {boolean} [state=false] - The loading state portion of the teams
 * state.
 * @params {object} action - The action that determines how loading handles its
 * state return.
 * @return {boolean}
 */
const loading = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_TEAMS_REQUEST:
    case types.CREATE_TEAM_REQUEST:
    case types.UPDATE_TEAM_REQUEST:
    case types.DELETE_TEAM_REQUEST:
      return true
    case types.FETCH_TEAMS_SUCCESS:
    case types.FETCH_TEAMS_FAILURE:
    case types.CREATE_TEAM_SUCCESS:
    case types.CREATE_TEAM_FAILURE:
    case types.UPDATE_TEAM_SUCCESS:
    case types.UPDATE_TEAM_FAILURE:
    case types.DELETE_TEAM_SUCCESS:
    case types.DELETE_TEAM_FAILURE:
      return false
    default:
      return state
  }
}

/**
 * Combines all of the reducers into a single reducer structure. The state is
 * handled as a Map, with each key representing that piece of the team state.
 *
 * The teams state structure ends up looking like the following:
 *
 * Map {
 *   byId:Map,
 *   ids:List,
 *   error:string?,
 *   loading:boolean
 * }
 *
 * When an action is passed to the teams reducer, each reducer is called with
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
