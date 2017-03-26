import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { RegisterForm } from 'components/auth/Register'

describe('RegisterForm component', () => {
  it('renders', () => {
    const wrapper = shallow(<RegisterForm />)

    expect(wrapper.exists()).to.be.true
  })

  it('takes a callback', () => {
    const callback = () => {}
    const wrapper = shallow(<RegisterForm handleSubmit={callback} />)

    expect(wrapper.prop('handleSubmit')).to.eq(callback)
  })
})
