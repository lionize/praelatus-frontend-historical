import { expect } from 'chai'
import {
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  FETCH_TICKETS_REQUEST,
} from 'constants/actionTypes'
import reducer from 'reducers/tickets'

describe('tickets reducer', () => {
  describe('FETCH_TICKETS_SUCCESS', () => {
    const initialState = {}
    const response = {
      entities: {
        tickets: {}
      },
      result: [1]
    }
    const action = {type: FETCH_TICKETS_SUCCESS, response}
    const nextState = reducer(initialState, action)

    it('adds the tickets', () => {
      expect(nextState.byId['1']).to.eq(response.entities.tickets['1'])
    })
    it('adds the ids', () => {
      expect(nextState.ids).to.include(1)
    })
    it('does not have an error message', () => {
      expect(nextState.errorMessage).to.eq(null)
    })
  })

  describe('FETCH_TICKETS_FAILURE', () => {
    const initialState = {}
    const message = 'Error!'
    const action = {type: FETCH_TICKETS_FAILURE, message}
    const nextState = reducer(initialState, action)
    it('sets errorMessage', () => {
      expect(nextState.errorMessage).to.eq('Error!')
    })
  })

  describe('FETCH_TICKETS_REQUEST', () => {
    const initialState = {
      errorMessage: 'Error!'
    }
    const action = {type: FETCH_TICKETS_REQUEST}
    const nextState = reducer(initialState, action)

    it('clears the error message', () => {
      expect(nextState.errorMessage).to.eq(null)
    })

    it('sets isFetching to true', () => {
      expect(nextState.isFetching).to.be.true
    })
  })
})
