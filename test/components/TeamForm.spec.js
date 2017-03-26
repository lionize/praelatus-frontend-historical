import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { TeamForm } from 'components'

describe('TeamForm component', () => {
  it('renders', () => {
    const wrapper = shallow(<TeamForm />)

    expect(wrapper.exists()).to.be.true
  })

  it('takes a callback', () => {
    const callback = () => {}
    const wrapper = shallow(<TeamForm handleSubmit={callback} />)

    expect(wrapper.prop('handleSubmit')).to.eq(callback)
  })
})
