import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Form } from 'components'

describe('Form Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Form />, { context: {} })

    expect(wrapper.exists()).to.be.true
  })
})
