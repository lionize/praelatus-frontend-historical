import { expect } from 'chai'
import { fromJS } from 'immutable'
import * as selectors from 'selectors/tickets'
const {
  ticketsSelector,
  ticketSelector,
  errorSelector,
  loadingSelector,
} = selectors

describe('tickets module selectors', () => {
  const baseState = fromJS({
    data: {
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
  })
  it('ticketsSelector returns all tickets', () => {
    const expected = fromJS([
      {
        id: 1,
        summary: "This is a summary!",
        description: "This is a description!"
      }
    ])

    expect(ticketsSelector(baseState)).to.eq(expected)
  })

  it('ticketSelector returns a ticket', () => {
    const expected = fromJS({
      id: 1,
      summary: "This is a summary!",
      description: "This is a description!"
    })

    expect(ticketSelector(baseState, 1)).to.deep.eq(expected)
  })

  it('loadingSelector returns the loading status', () => {
    const state = fromJS(
      baseState.setIn(['data', 'tickets', 'loading'], true)
    )
    const expected = true

    expect(loadingSelector(state)).to.eq(expected)
  })

  it('errorSelector returns the error status', () => {
    const state = fromJS(
      baseState.setIn(['data', 'tickets', 'error'], 'This is an error!')
    )
    const expected = 'This is an error!'

    expect(errorSelector(state)).to.eq(expected)
  })
})
