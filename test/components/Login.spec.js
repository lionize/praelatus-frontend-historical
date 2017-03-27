import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import sinon from 'sinon'
import configureStore from 'redux-mock-store'
import Login, { LoginForm } from 'components/auth/Login'
import { Form } from 'components'
const store = configureStore()({})

describe('Login Component', () => {
  it('renders', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>
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
