import React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import { CardTitle, CardText } from 'reactstrap'
import { UserCard, Gravatar } from 'components'

describe('UserCard Component', () => {
  const setup = (propOverrides, mounted = false) => {
    const props = Object.assign({
      children: null,
    }, propOverrides)

    const wrapper = mounted ? mount(<UserCard {...props} />) : shallow(<UserCard {...props} />)

    return {
      props,
      wrapper,
      title: wrapper.find(CardTitle),
      gravatar: wrapper.find(Gravatar),
    }
  }

  it('renders', () => {
    const { wrapper } = setup()
    expect(wrapper.exists()).to.be.true
  })

  it('renders a loading message when loading', () => {
    const { wrapper } = setup({ loading: true })

    expect(wrapper.find('h1')).to.have.text('Loading...')
  })

  it('renders ErrorCard when error exists', () => {
    const { wrapper } = setup({ error: 'Error' })

    expect(wrapper).to.contain.text('<ErrorCard />')
  })

  it('renders NotFoundCard when no user found', () => {
    const { wrapper } = setup()

    expect(wrapper).to.contain.text('<NotFoundCard />')
  })

  it('renders a user\'s information', () => {
    const user = {
      id: 0,
      username: 'username',
      email: 'user@user.com',
      fullName: 'user name',
    }

    const { wrapper, title, gravatar } = setup({ user }, true)

    expect(title).to.contain.text('username')
    expect(wrapper).to.contain.text('user name')
    expect(wrapper).to.contain.text('user name')
    expect(gravatar).to.have.prop('email', 'user@user.com')
  })
})
