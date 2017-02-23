import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

/* INITIAL STATE */
export const INITIAL_STATE = Immutable({
  locationBeforeTransitions: null,
})

/* REDUCERS */

export const update = (state, { payload }) => state.merge({ locationBeforeTransitions: payload })

/* HOOKUP REDUCERS TO TYPES */

export const reducer = createReducer(INITIAL_STATE, {
  [LOCATION_CHANGE]: update,
})
