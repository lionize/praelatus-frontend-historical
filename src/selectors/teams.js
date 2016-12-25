import { userSelector, usersSelector } from 'selectors/users'

/** @module teams/selectors */

/**
 * Selector that fetches a single team from the team state.
 *
 * The selector gets all of the teams by id from teams.byId and then gets
 * the team by the passed id from that List.
 *
 * @function
 * @param {Map} state - The global state.
 * @param {number|string} id - The id of the team being selected.
 * @returns {Map} - The selected team.
 */
export const teamSelector = (state, id) => {
  let team = state.getIn(['data', 'teams', 'byId']).get(String(id))

  if (team && team.lead != null) {
    team = team.set('lead', userSelector(state, team.lead))
  }

  if (team && team.members != null) {
    team = team.set('members', usersSelector(state, team.members))
  }

  return team
}

/**
 * Selector that fetches all teams from the team state.
 *
 * The selector collects all of the ids from teams.ids and then maps them into
 * the corresponding teams.
 *
 * @function
 * @param {Map} state - The global state.
 * @param {List} ids - A list of ids to filter by.
 * @returns {List} - A List of selected teams.
 */
export const teamsSelector = (state, ids) => {
  let teamIds = state.getIn(['data', 'teams', 'ids'])

  if (ids) {
    teamIds = teamIds.filter(id => ids.includes(id))
  }

  return teamIds.map(id => teamSelector(state, id))
}

/**
 * Selector that fetches the loading state from the team state.
 *
 * @function
 * @param {Map} state - The global state.
 * @returns {boolean} - The current loading state.
 */
export const loadingSelector = state => state.getIn(['data', 'teams', 'loading'])

/**
 * Selector that fetches the error message from the team state.
 *
 * @function
 * @param {Map} state - The global state.
 * @returns {string?} - The current error message.
 */
export const errorSelector = state => state.getIn(['data', 'teams', 'error'])
