/** @module tickets/actions */

import { normalize, arrayOf } from 'normalizr-immutable'
import * as schema from 'schema'
import { types } from 'modules/tickets'

/**
 * Action that represents a request for tickets to be fetched. 
 *
 * This action currently takes no parameters, and is simply signaling to the
 * application that tickets should be fetched.
 *
 * @returns {object} - An object that contains the action's type.
 */
const fetchTicketsRequest = () => ({ 
  type: types.FETCH_TICKETS_REQUEST,
})

/**
 * Action that represents a successful fetch of tickets.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record
 * representing the tickets that were fetched and a List of the ids of the
 * tickets.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
const fetchTicketsSuccess = response => ({
  type: types.FETCH_TICKETS_SUCCESS,
  response: normalize(response, arrayOf(schema.ticket), {}),
})

/**
 * Action that represents a failed fetch of tickets.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only piece
 * used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
const fetchTicketsFailure = error => ({
  type: types.FETCH_TICKETS_FAILURE,
  message: error.message,
})

/**
 * The actions combined into an object and exported as the default value.
 */
export default {
  fetchTicketsRequest,
  fetchTicketsSuccess,
  fetchTicketsFailure,
}
