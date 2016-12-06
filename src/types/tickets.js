/** @module tickets/types */

/**
 * Constants that represent the types of actions that are dispatched by ticket
 * actions.
 */
export default {
  FETCH_TICKETS_REQUEST: 'TICKETS/FETCH_REQUEST',
  FETCH_TICKETS_FAILURE: 'TICKETS/FETCH_FAILURE',

  CREATE_TICKET_REQUEST: 'TICKETS/CREATE_REQUEST',
  CREATE_TICKET_SUCCESS: 'TICKETS/CREATE_SUCCESS',
  CREATE_TICKET_FAILURE: 'TICKETS/CREATE_FAILURE',

  UPDATE_TICKET_REQUEST: 'TICKETS/UPDATE_REQUEST',
  UPDATE_TICKET_SUCCESS: 'TICKETS/UPDATE_SUCCESS',
  UPDATE_TICKET_FAILURE: 'TICKETS/UPDATE_FAILURE',

  DELETE_TICKET_REQUEST: 'TICKETS/DELETE_REQUEST',
  DELETE_TICKET_SUCCESS: 'TICKETS/DELETE_SUCCESS',
  DELETE_TICKET_FAILURE: 'TICKETS/DELETE_FAILURE',
}
