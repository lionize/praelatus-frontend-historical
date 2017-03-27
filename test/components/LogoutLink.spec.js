import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { wrapWithProvider } from '../utilities'
import { LogoutLink, Button } from 'components'

describe('LogoutLink Component', () => {
  it('renders', () => {
    const wrapper = mount(
      wrapWithProvider(LogoutLink)
    )
  })
})
