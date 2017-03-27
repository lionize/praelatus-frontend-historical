import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { LoginForm } from 'components/auth/Login'

describe('LoginForm component', () => {
  it('renders', () => {
    const wrapper = shallow(<LoginForm />)

    expect(wrapper.exists()).to.be.true
  })

  it('takes a callback', () => {
    const callback = () => {}
    const wrapper = shallow(<LoginForm handleSubmit={callback} />)

    expect(wrapper.prop('handleSubmit')).to.eq(callback)
  })
})
