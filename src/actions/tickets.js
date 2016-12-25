/** @module tickets/actions */

import { normalize } from 'normalizr-immutable'
import * as schema from 'schema'
import types from 'types/tickets'

/**
 * Action that represents a request for tickets to be fetched.
 *
 * This action currently takes no parameters, and is simply signaling to the
 * application that tickets should be fetched.
 *
 * @returns {object} - An object that contains the action's type.
 */
export const fetchTicketsRequest = payload => ({
  type: types.FETCH_TICKETS_REQUEST,
  payload,
})

/**
 * Action that represents a failed fetch of tickets.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only
 * piece used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
export const fetchTicketsFailure = error => ({
  type: types.FETCH_TICKETS_FAILURE,
  message: error.message,
})

/**
 * Action that represents a request for a ticket to be created.
 *
 * @param {object} payload - The payload object. Represents that ticket that
 * should be created.
 * @returns {object} - An object that contains the action's type.
 */
export const createTicketRequest = payload => ({
  type: types.CREATE_TICKET_REQUEST,
  payload,
})

/**
 * Action that represents a successful creation of the ticket.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record representing the ticket that was
 * created.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
export const createTicketSuccess = response => ({
  type: types.CREATE_TICKET_SUCCESS,
  response: normalize(response, schema.ticket, {}),
})

/**
 * Action that represents failed creation of a ticket.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only
 * piece used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
export const createTicketFailure = error => ({
  type: types.CREATE_TICKET_FAILURE,
  message: error.message,
})

/**
 * Action that represents a request for a ticket to be updated.
 *
 * @param {object} payload - The payload object. Represents that ticket that
 * should be created.
 * @returns {object} - An object that contains the action's type.
 */
export const updateTicketRequest = payload => ({
  type: types.UPDATE_TICKET_REQUEST,
  payload,
})

/**
 * Action that represents a successful update of a ticket.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Record} [response] - The Record representing the ticket that was
 * created a List with the id of the ticket.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
export const updateTicketSuccess = response => ({
  type: types.UPDATE_TICKET_SUCCESS,
  response: normalize(response, schema.ticket, {}),
})

/**
 * Action that represents a failed update of a ticket.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only
 * piece used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
export const updateTicketFailure = error => ({
  type: types.UPDATE_TICKET_FAILURE,
  message: error.message,
})

/**
 * Action that represents a request for a ticket to be deleted.
 *
 * @param {object} payload - The payload object. Represents that ticket that
 * should be created.
 * @returns {object} - An object that contains the action's type.
 */
export const deleteTicketRequest = payload => ({
  type: types.DELETE_TICKET_REQUEST,
  payload,
})

/**
 * Action that represents a successful deletion of a ticket.
 *
 * The action contains a normalized response from the server.
 *
 * @param {Integer} [id] - The id of the ticket that was deleted.
 * @returns {object} - An object that contains the action's type and the
 * normalized server response.
 */
export const deleteTicketSuccess = id => ({
  type: types.DELETE_TICKET_SUCCESS,
  id,
})

/**
 * Action that represents a failed delete of a ticket.
 *
 * The action contains the error message from the server.
 *
 * @param {object} error - The error object. The 'message' field is the only
 * piece used for this action.
 * @returns {object} - An object that contains the action's type and the error
 * message.
 */
export const deleteTicketFailure = error => ({
  type: types.DELETE_TICKET_FAILURE,
  message: error.message,
})

