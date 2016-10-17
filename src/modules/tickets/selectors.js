/*
 * Selector that fetches all tickets from the ticket state.
 *
 * The selector collects all of the ids from tickets.ids and then maps them into
 * the corresponding tickets.
 *
 * @param {Map} state - The global state.
 * @returns {List} - A List of selected tickets.
 */
export const ticketsSelector = (state) => {
  const ticketIds = state.getIn(['tickets', 'ids'])
  return ticketIds.map(id => ticketSelector(state, id))
}

/*
 * Selector that fetches a single ticket from the ticket state.
 *
 * The selector gets all of the tickets by id from tickets.byId and then gets
 * the ticket by the passed id from that List.
 *
 * @param {Map} state - The global state.
 * @param {number|string} id - The id of the ticket being selected.
 * @returns {Map} - The selected ticket.
 */
export const ticketSelector = (state, id) => {
  return state.getIn(['tickets', 'byId']).get(String(id))
}

/*
 * Selector that fetches the loading state from the ticket state.
 *
 * @param {Map} state - The global state.
 * @returns {boolean} - The current loading state.
 */
export const loadingSelector = state => state.getIn(['tickets', 'loading'])

/*
 * Selector that fetches the error message from the ticket state.
 *
 * @param {Map} state - The global state.
 * @returns {string?} - The current error message.
 */
export const errorSelector = state => state.getIn(['tickets', 'error'])
