import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Label } from 'components'

describe('Label Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Label />, { context: {} })

    expect(wrapper.exists()).to.be.true
  })
})
