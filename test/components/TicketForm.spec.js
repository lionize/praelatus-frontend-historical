import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { TicketForm } from 'components'

describe('TicketForm component', () => {
  it('renders', () => {
    const wrapper = shallow(<TicketForm />)

    expect(wrapper.exists()).to.be.true
  })

  it('takes a callback', () => {
    const callback = () => {}
    const wrapper = shallow(<TicketForm handleSubmit={callback} />)

    expect(wrapper.prop('handleSubmit')).to.eq(callback)
  })
})
