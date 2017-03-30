import React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import { wrapProvider } from '../utilities'
import Container, { TicketNew } from 'components/tickets/TicketNew'
import { TicketForm } from 'components'

describe('TicketNew Component', () => {
  it('renders', () => {
    const Enhanced = wrapProvider()(Container)
    const wrapper = mount(<Enhanced />)

    const container = wrapper.find(Container)
    const component = wrapper.find(TicketNew)

    expect(container.exists()).to.be.true
    expect(component.exists()).to.be.true
  })

  it('passes create callback to TicketForm child', () => {
    const callback = () => {}
    const wrapper = shallow(<TicketNew createTicket={callback} />)
    const form = wrapper.find(TicketForm)
    expect(form.prop('handleSubmit')).to.eq(callback)
  })
})
