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
      header: wrapper.find('.header'),
      footer: wrapper.find('footer'),
    }
  }

  it('render', () => {
    const { wrapper } = setup()
    expect(wrapper.exists()).to.be.true
  })
})
