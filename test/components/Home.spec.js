import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Home } from 'components'

describe('Home Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Home />)

    expect(wrapper.exists()).to.be.true
  })
})
