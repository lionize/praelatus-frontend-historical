import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { wrapRouter, wrapProvider } from '../utilities'
import Container, { TicketShow } from 'components/tickets/TicketShow'

describe('TicketShow Component', () => {
  it('renders', () => {
    const state = {
      data: {
        tickets: {
          keys: ['TICKET-1'],
          byKey: {
            'TICKET-1': {
              key: 'TICKET-1'
            }
          }
        }
      }
    }
    const params = {
      key: 'TICKET-1'
    }

    let Enhanced = wrapProvider({ state })(Container)
    Enhanced = wrapRouter({ params })(Enhanced)

    const wrapper = mount(<Enhanced />)

    const container = wrapper.find(Container)
    const component = wrapper.find(TicketShow)

    expect(container.exists()).to.be.true
    expect(component.exists()).to.be.true
  })

  it('calls load ticket action on mount', () => {
    const callback = sinon.spy()
    const wrapper = shallow(<TicketShow loadTicket={callback} ticket={{}} params={{ key: 'TICKET-1' }} />)
    expect(callback.calledOnce)
  })

  it('calls load ticket action on update', () => {
    const callback = sinon.spy()
    const wrapper = shallow(<TicketShow loadTicket={callback} ticket={{}} params={{ key: 'TICKET-1' }} />)
    callback.reset()
    wrapper.instance().componentDidUpdate({ params: { key: 'TICKET-2' } })
    expect(callback.calledOnce).to.be.true
  })
})
