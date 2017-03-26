import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Header } from 'components'

describe('Header Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper.exists()).to.be.true
  })
})
