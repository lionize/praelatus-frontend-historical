import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { wrapWithProvider } from '../utilities'
import Container, { TeamList, TeamTable } from 'components/teams/TeamList'

describe('TeamList Component', () => {
  const state = {
    data: {
      teams: {
        names: ['TEAM-TEST'],
        byName: {
          'TEAM-TEST': {
            name: 'TEST-TEST',
          }
        }
      }
    }
  }

  it('renders', () => {
    const wrapper = mount(
      wrapWithProvider(Container, { state })
    )

    const container = wrapper.find(Container)
    const component = wrapper.find(TeamTable)

    expect(container.exists()).to.be.true
    expect(component.exists()).to.be.true
  })

  it('calls load teams action on mount', () => {
    const callback = sinon.spy()
    const wrapper = shallow(<TeamList loadTeams={callback} />)

    expect(callback.calledOnce).to.be.true
  })

  it('passes teams to table component', () => {
    const teams = [
      { name: 'TEAM-1' },
      { name: 'TEAM-2' },
      { name: 'TEAM-3' },
    ]
    const wrapper = shallow(<TeamList teams={teams} loadTeams={() => {}} />)
    const table = wrapper.find(TeamTable)

    expect(table.prop('teams')).to.deep.eq(teams)
  })
})
