import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { wrapProvider } from '../utilities'
import { LogoutLink, Button } from 'components'

describe('LogoutLink Component', () => {
  it('renders', () => {
    const wrapper = mount(
      wrapProvider(LogoutLink)
    )
    const button = wrapper.find(Button)

    expect(button.exists()).to.be.true
  })
})
