import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Button } from 'components'

describe('Button Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Button />)

    expect(wrapper.exists()).to.be.true
  })

  it('renders with passed props', () => {
    const props = {
      children: <div />,
      color: 'red',
    }
    const wrapper = shallow(<Button {...props} />)

    expect(wrapper.prop('children')).to.deep.eq(<div />)
    expect(wrapper.prop('color')).to.eq('red')
  })
})
