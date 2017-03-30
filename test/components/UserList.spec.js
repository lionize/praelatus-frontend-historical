import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { wrapProvider } from '../utilities'
import Container, { UserList, UserTable } from 'components/users/UserList'

describe('UserList Component', () => {
  const state = {
    data: {
      users: {
        usernames: ['USER1'],
        byUsername: {
          'USER1': {
            username: 'USER1'
          }
        }
      }
    }
  }

  it('renders', () => {
    const Enhanced = wrapProvider({ state })(Container)
    const wrapper = mount(<Enhanced />)

    const container = wrapper.find(Container)
    const component = wrapper.find(UserTable)

    expect(container.exists()).to.be.true
    expect(component.exists()).to.be.true
  })

  it('calls load users action on mount', () => {
    const callback = sinon.spy()
    const wrapper = shallow(<UserList loadUsers={callback} />)
    expect(callback.calledOnce).to.be.true
  })

  it('passes users to table component', () => {
    const users = [
      { username: 'USER1' },
      { username: 'USER2' },
    ]
    const wrapper = shallow(<UserList users={users} loadUsers={() => {}} />)
    const table = wrapper.find(UserTable)

    expect(table.prop('users')).to.deep.eq(users)
  })
})
