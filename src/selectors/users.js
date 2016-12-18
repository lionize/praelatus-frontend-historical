/** @module users/selectors */

/**
 * Selector that fetches all users from the user state.
 *
 * The selector collects all of the ids from users.ids and then maps them into
 * the corresponding users.
 *
 * @function
 * @param {Map} state - The global state.
 * @returns {List} - A List of selected users.
 */
export const usersSelector = (state) => {
  const userIds = state.getIn(['data', 'users', 'ids'])
  return userIds.map(id => userSelector(state, id))
}

/**
 * Selector that fetches a single user from the user state.
 *
 * The selector gets all of the users by id from users.byId and then gets
 * the user by the passed id from that List.
 *
 * @function
 * @param {Map} state - The global state.
 * @param {number|string} id - The id of the user being selected.
 * @returns {Map} - The selected user.
 */
export const userSelector = (state, id) => {
  return state.getIn(['data', 'users', 'byId']).get(String(id))
}

/**
 * Selector that fetches the loading state from the user state.
 *
 * @function
 * @param {Map} state - The global state.
 * @returns {boolean} - The current loading state.
 */
export const loadingSelector = state => state.getIn(['data', 'users', 'loading'])

/**
 * Selector that fetches the error message from the user state.
 *
 * @function
 * @param {Map} state - The global state.
 * @returns {string?} - The current error message.
 */
export const errorSelector = state => state.getIn(['data', 'users', 'error'])
