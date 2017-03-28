import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { wrapProvider } from '../utilities'
import Container, { TeamDeleteButton } from 'components/teams/TeamDeleteButton'
import { DeleteButton } from 'components'

describe('TeamDeleteButton Component', () => {
  it('renders', () => {
    const wrapper = mount(
      wrapProvider(Container)
    )

    const container = wrapper.find(Container)
    const component = wrapper.find(TeamDeleteButton)

    expect(container.exists()).to.be.true
    expect(component.exists()).to.be.true
  })

  it('calls the delete team action', () => {
    const team = { name: 'TEAM' }
    const callback = sinon.spy()
    const wrapper = mount(<TeamDeleteButton team={team} deleteTeam={callback} />)

    wrapper.find(DeleteButton).simulate('click')
    expect(callback.called).to.be.true
    expect(callback.calledWith(team.name)).to.be.true
  })
})
