/** @module tickets/selectors */

/**
 * Selector that fetches all tickets from the ticket state.
 *
 * The selector collects all of the ids from tickets.ids and then maps them into
 * the corresponding tickets.
 *
 * @function
 * @param {Map} state - The global state.
 * @return {List} - A List of selected tickets.
 */
export const ticketsSelector = (state) => {
  const ticketIds = state.getIn(['tickets', 'ids'])
  return ticketIds.map(id => ticketSelector(state, id))
}

/**
 * Selector that fetches a single ticket from the ticket state.
 *
 * The selector gets all of the tickets by id from tickets.byId and then gets
 * the ticket by the passed id from that List.
 *
 * @function
 * @param {Map} state - The global state.
 * @param {number|string} id - The id of the ticket being selected.
 * @return {Map} - The selected ticket.
 */
export const ticketSelector = (state, id) => {
  return state.getIn(['tickets', 'byId']).get(String(id))
}

/**
 * Selector that fetches the loading state from the ticket state.
 *
 * @function
 * @param {Map} state - The global state.
 * @return {boolean} - The current loading state.
 */
export const loadingSelector = state => state.getIn(['tickets', 'loading'])

/**
 * Selector that fetches the error message from the ticket state.
 *
 * @function
 * @param {Map} state - The global state.
 * @return {string?} - The current error message.
 */
export const errorSelector = state => state.getIn(['tickets', 'error'])
