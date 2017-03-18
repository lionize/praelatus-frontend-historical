import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { App } from 'components'

describe('App Component', () => {
  const setup = propOverrides => {
    const props = Object.assign({
      children: null,
    }, propOverrides)

    const wrapper = shallow(<App {...props} />)

    return {
      props,
      wrapper,
      header: wrapper.find('Header'),
      footer: wrapper.find('Footer'),
    }
  }

  it('renders', () => {
    const { wrapper } = setup()
    expect(wrapper.exists()).to.be.true
  })

  it('renders header', () => {
    const { header } = setup()
    expect(header.exists()).to.be.true
  })

  it('renders footer', () => {
    const { footer } = setup()
    expect(footer.exists()).to.be.true
  })

  it('renders children', () => {
    const child = <div></div>
    const { wrapper } = setup({ children: child })
    expect(wrapper).to.contain(child)
  })
})
