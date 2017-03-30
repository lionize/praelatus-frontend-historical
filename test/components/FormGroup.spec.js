import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { FormGroup } from 'components'

describe('FormGroup Component', () => {
  it('renders', () => {
    const wrapper = shallow(<FormGroup />)

    expect(wrapper.exists()).to.be.true
  })
})
