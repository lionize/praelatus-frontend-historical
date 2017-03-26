import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { FormFeedback } from 'components'

describe('FormFeedback Component', () => {
  it('renders', () => {
    const wrapper = shallow(<FormFeedback />, { context: {} })

    expect(wrapper.exists()).to.be.true
  })
})
