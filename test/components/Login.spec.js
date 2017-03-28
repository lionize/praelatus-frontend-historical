import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import sinon from 'sinon'
import { wrapProvider } from '../utilities'
import Login, { LoginForm } from 'components/auth/Login'
import { Form } from 'components'

describe('Login Component', () => {
  it('renders', () => {
    const wrapper = mount(
      wrapProvider(Login)
    )

    const container = wrapper.find(Login)
    const component = wrapper.find(LoginForm)

    expect(container.exists()).to.be.true
    expect(component.exists()).to.be.true
  })

  it('performs login', () => {
    const callback = sinon.spy()

    const wrapper = shallow(<LoginForm
      handleSubmit={callback}
    />)
    wrapper.find(Form).simulate('submit')
    expect(callback.called).to.be.true
  })
})
