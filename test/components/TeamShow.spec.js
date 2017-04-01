import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { wrapRouter, wrapProvider } from '../utilities'
import Container, { TeamShow } from 'components/teams/TeamShow'

describe('TeamShow Component', () => {
  const state = {
    data: {
      teams: {
        names: ['TEAM-NAME'],
        byName: {
          'TEAM-NAME': {
            name: 'TEAM-NAME'
          }
        }
      }
    }
  }
  const params = {
    name: 'TEAM-NAME'
  }

  it('renders', () => {
    let Enhanced = wrapProvider({ state })(Container)
    Enhanced = wrapRouter({ params })(Enhanced)

    const wrapper = mount(<Enhanced />)

    const container = wrapper.find(Container)
    const component = wrapper.find(TeamShow)

    expect(container.exists()).to.be.true
    expect(component.exists()).to.be.true
  })

  it('calls load team action on mount', () => {
    const callback = sinon.spy()
    const wrapper = shallow(<TeamShow loadTeam={callback} team={{}} params={{ name: 'TEAM-1' }} />)
    expect(callback.calledOnce).to.be.true
  })

  it('calls load team action on update', () => {
    const callback = sinon.spy()
    const wrapper = shallow(<TeamShow loadTeam={callback} team={{}} params={{name: 'TEAM-2'}} />)
    callback.reset()
    wrapper.instance().componentDidUpdate({ params: { name: 'TEAM-1' } })
    expect(callback.calledOnce).to.be.true
  })
})
