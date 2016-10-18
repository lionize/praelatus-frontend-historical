/** @module teams/selectors */

/**
 * Selector that fetches all teams from the team state.
 *
 * The selector collects all of the ids from teams.ids and then maps them into
 * the corresponding teams.
 *
 * @function
 * @param {Map} state - The global state.
 * @returns {List} - A List of selected teams.
 */
export const teamsSelector = (state) => {
  const teamIds = state.getIn(['teams', 'ids'])
  return teamIds.map(id => teamSelector(state, id))
}

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
  return state.getIn(['teams', 'byId']).get(String(id))
}

/**
 * Selector that fetches the loading state from the team state.
 *
 * @function
 * @param {Map} state - The global state.
 * @returns {boolean} - The current loading state.
 */
export const loadingSelector = state => state.getIn(['teams', 'loading'])

/**
 * Selector that fetches the error message from the team state.
 *
 * @function
 * @param {Map} state - The global state.
 * @returns {string?} - The current error message.
 */
export const errorSelector = state => state.getIn(['teams', 'error'])
