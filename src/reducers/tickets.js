import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.tickets
    }
  }

  return state
}

const ids = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TICKETS_SUCCESS':
      return action.response.result
    default:
      return state
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_TICKETS_FAILURE':
      return action.message
    case 'FETCH_TICKETS_SUCCESS':
    case 'FETCH_TICKETS_REQUEST':
      return null
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_TICKETS_REQUEST':
      return true
    case 'FETCH_TICKETS_SUCCESS':
    case 'FETCH_TICKETS_FAILURE':
      return false
    default:
      return state
  }
}

const tickets = combineReducers({
  byId,
  ids,
  errorMessage,
  isFetching,
})

export default tickets
