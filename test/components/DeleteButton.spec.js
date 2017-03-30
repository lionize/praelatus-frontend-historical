import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { DeleteButton } from 'components'

describe('DeleteButton Component', () => {
  it('renders', () => {
    const wrapper = shallow(<DeleteButton />)

    expect(wrapper.exists()).to.be.true
  })

  it('handles click callback', () => {
    const callback = sinon.spy()
    const wrapper = shallow(<DeleteButton handleClick={callback} />)

    wrapper.simulate('click')

    expect(callback.called).to.be.true
  })
})
