import { combineReducers } from 'redux'
import tickets from 'reducers/tickets'

const reducer = combineReducers({
  tickets
})

export default reducer

export const getVisibleTickets = (state) => {
  return state.tickets
}
