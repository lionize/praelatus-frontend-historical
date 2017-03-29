import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { wrapProvider } from '../utilities'
import Container, { ProjectDeleteButton } from 'components/projects/ProjectDeleteButton'
import { DeleteButton } from 'components'

describe('ProjectDeleteButton Component', () => {
  it('renders', () => {
    const Enhanced = wrapProvider()(Container)
    const wrapper = mount(<Enhanced />)

    const container = wrapper.find(Container)
    const component = wrapper.find(ProjectDeleteButton)

    expect(container.exists()).to.be.true
    expect(component.exists()).to.be.true
  })

  it('calls the delete project action', () => {
    const project = { key: 'PROJECT-TEST' }
    const callback = sinon.spy()
    const wrapper = mount(<ProjectDeleteButton project={project} deleteProject={callback} />)

    wrapper.find(DeleteButton).simulate('click')
    expect(callback.called).to.be.true
    expect(callback.calledWith(project.key)).to.be.true
  })
})
