import { expect } from 'chai'
import {
  ticketsSelector,
  ticketSelector,
  loadingSelector,
  errorSelector,
} from 'modules/tickets'

describe('tickets selectors', () => {
  it('ticketsSelector returns all tickets', () => {
    const state = {
      tickets: {
        ids: [1],
        byId: {
          1: {
            id: 1,
            summary: "This is a summary!",
            description: "This is a description!"
          }
        }
      }
    }
    const expected = [
      {
        id: 1,
        summary: "This is a summary!",
        description: "This is a description!"
      }
    ]

    expect(ticketsSelector(state)).to.deep.eq(expected)
  })

  it('ticketsSelector returns a ticket', () => {
    const state = {
      tickets: {
        ids: [1],
        byId: {
          1: {
            id: 1,
            summary: "This is a summary!",
            description: "This is a description!"
          }
        }
      }
    }
    const expected = {
      id: 1,
      summary: "This is a summary!",
      description: "This is a description!"
    }

    expect(ticketSelector(state, 1)).to.deep.eq(expected)
  })

  it('loadingSelector returns the loading status', () => {
    const state = {
      tickets: {
        loading: true
      }
    }
    const expected = true

    expect(loadingSelector(state)).to.eq(expected)
  })

  it('errorSelector returns the error status', () => {
    const state = {
      tickets: {
        error: 'This is an error!'
      }
    }
    const expected = 'This is an error!'

    expect(errorSelector(state)).to.eq(expected)
  })
})
