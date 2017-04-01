import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { wrapProvider } from '../utilities'
import Container, { TicketList, TicketTable } from 'components/tickets/TicketList'

describe('TicketList Component', () => {
  const state = {
    data: {
      tickets: {
        keys: ['TICKET-TEST'],
        byKey: {
          'TICKET-TEST': {
            id: 0,
            key: 'TICKET-TEST'
          }
        }
      }
    }
  }

  const setup = propOverrides => {
    const props = Object.assign({
      tickets: [],
      loadTickets: () => {},
    }, propOverrides)

    const wrapper = shallow(<TicketList {...props} />)

    return {
      props,
      wrapper,
    }
  }

  it('renders', () => {
    const Enhanced = wrapProvider({ state })(Container)
    const wrapper = mount(<Enhanced />)

    const container = wrapper.find(Container)
    const component = wrapper.find(TicketTable)

    expect(container.exists()).to.be.true
    expect(component.exists()).to.be.true
  })

  it('calls load tickets action on mount', () => {
    const callback = sinon.spy()
    const { wrapper } = setup({ loadTickets: callback })

    expect(callback.calledOnce).to.be.true
  })

  it('passes tickets to table component', () => {
    const tickets = [
      { key: 'TICKET-1' },
      { key: 'TICKET-2' },
    ]
    const { wrapper } = setup({ tickets })
    const table = wrapper.find(TicketTable)

    expect(table.prop('tickets')).to.deep.eq(tickets)
  })
})
