import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { UserLink } from 'components'

describe('UserLink Component', () => {
  const setup = propOverrides => {
    const props = Object.assign({
      children: null,
    }, propOverrides)

    const wrapper = shallow(<UserLink {...props} />)

    return {
      props,
      wrapper,
    }
  }

  it('renders', () => {
    const { wrapper } = setup({ user: {} })
    expect(wrapper.exists()).to.be.true
  })

  it('has props for href and children', () => {
    const user = {
      username: 'username'
    }
    const { wrapper } = setup({ user, children: <div></div> })
    const { to, children } = wrapper.props()

    expect(to).to.eq('/users/username')
    expect(children).to.deep.eq(<div></div>)
  })
})
