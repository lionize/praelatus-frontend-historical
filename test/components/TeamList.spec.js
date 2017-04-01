import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { wrapProvider } from '../utilities'
import Container, { TeamList, TeamTable } from 'components/teams/TeamList'

describe('TeamList Component', () => {
  const state = {
    data: {
      teams: {
        names: ['TEAM-TEST'],
        byName: {
          'TEAM-TEST': {
            id: 0,
            name: 'TEST-TEST',
          }
        }
      }
    }
  }

  const setup = propOverrides => {
    const props = Object.assign({
      teams: [],
      loadTeams: () => {},
    }, propOverrides)

    const wrapper = shallow(<TeamList {...props} />)

    return {
      props,
      wrapper,
    }
  }

  it('renders', () => {
    const Enhanced = wrapProvider({ state })(Container)
    const wrapper = mount(<Enhanced />)

    const container = wrapper.find(Container)
    const component = wrapper.find(TeamTable)

    expect(container.exists()).to.be.true
    expect(component.exists()).to.be.true
  })

  it('calls load teams action on mount', () => {
    const callback = sinon.spy()
    const { wrapper } = setup({ loadTeams: callback })

    expect(callback.calledOnce).to.be.true
  })

  it('passes teams to table component', () => {
    const teams = [
      { name: 'TEAM-1', id: 0 },
      { name: 'TEAM-2', id: 1 },
      { name: 'TEAM-3', id: 2 },
    ]
    const { wrapper } = setup({ teams })
    const table = wrapper.find(TeamTable)

    expect(table.prop('teams')).to.deep.eq(teams)
  })
})
