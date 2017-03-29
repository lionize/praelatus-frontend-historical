import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { wrapProvider } from '../utilities'
import Container, { ProjectList, ProjectTable } from 'components/projects/ProjectList'

describe('ProjectList Component', () => {
  const state = {
    data: {
      projects: {
        keys: ['PROJECT-TEST'],
        byKey: {
          'PROJECT-TEST': {
            key: 'PROJECT-TEST'
          }
        }
      }
    }
  }

  it('renders', () => {
    const Enhanced = wrapProvider({ state })(Container)
    const wrapper = mount(<Enhanced />)

    const container = wrapper.find(Container)
    const component = wrapper.find(ProjectTable)

    expect(container.exists()).to.be.true
    expect(component.exists()).to.be.true
  })

  it('calls load projects action on mount', () => {
    const callback = sinon.spy()
    const wrapper = shallow(<ProjectList loadProjects={callback} />)
    expect(callback.calledOnce).to.be.true
  })

  it('passes projects to table component', () => {
    const projects = [
      { key: 'PROJECT-1' },
      { key: 'PROJECT-2' },
      { key: 'PROJECT-3' },
    ]
    const wrapper = shallow(<ProjectList projects={projects} loadProjects={() => {}} />)
    const table = wrapper.find(ProjectTable)

    expect(table.prop('projects')).to.deep.eq(projects)
  })
})
