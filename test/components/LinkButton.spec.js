import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { LinkButton, Button } from 'components'
import { Link } from 'react-router'

describe('LinkButton Component', () => {
  const setup = propOverrides => {
    const props = Object.assign({
      children: [],
      to: '',
    }, propOverrides)

    const wrapper = shallow(<LinkButton {...props} />)

    return {
      props,
      wrapper,
      button: wrapper.find(Button),
    }
  }

  it('renders', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).to.be.true
  })

  it('renders the link with props', () => {
    const { wrapper, button } = setup({ to: 'home', color: 'red', children: <div /> })

    expect(wrapper.prop('to')).to.eq('home')
    expect(button.prop('color')).to.eq('red')
    expect(button.find('div').exists()).to.be.true
  })
})
