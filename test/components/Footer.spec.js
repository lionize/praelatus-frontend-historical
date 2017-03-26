import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Footer } from 'components'

describe('Footer Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Footer />)

    expect(wrapper.exists()).to.be.true
  })
})
