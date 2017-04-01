import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Flash } from 'components'

describe('Flash Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Flash message={''} />)

    expect(wrapper.exists()).to.be.true
  })

  it('can take an object', () => {
    const wrapper = shallow(<Flash message={{ data: { message: 'Message' } }} />)

    expect(wrapper).to.contain.text('Message')
  })

  it('can take a string', () => {
    const wrapper = shallow(<Flash message={'Message'} />)

    expect(wrapper).to.contain.text('Message')
  })
})
