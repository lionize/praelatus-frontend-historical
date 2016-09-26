import * as api from 'api'
import * as types from 'constants'

export const fetchTickets = () => (dispatch) => {
  return api.fetchTickets().then(
    response => {
      dispatch({
        type: types.FETCH_TODOS_SUCCESS,
        response
      })
    },
    error => {
      dispatch({
        type: types.FETCH_TODOS_FAILURE,
        message: error.message || 'Something went wrong.'
      })
    }
  )
}
