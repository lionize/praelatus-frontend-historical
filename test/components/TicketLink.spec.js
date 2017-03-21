import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { TicketLink } from 'components'

describe('TicketLink Component', () => {
  it('renders', () => {
    const ticket = {}
    const wrapper = shallow(<TicketLink ticket={ticket} children={null} />)

    expect(wrapper.exists()).to.be.true
  })

  it('has props for href and children', () => {
    const ticket = {
      key: 'TICKET-1'
    }
    const wrapper = shallow(<TicketLink ticket={ticket} children={<div></div>} />)
    const { to, children } = wrapper.props()

    expect(to).to.eq('/tickets/TICKET-1')
    expect(children).to.deep.eq(<div></div>)
  })
})
