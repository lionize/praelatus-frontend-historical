import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { CardTitle, CardText } from 'reactstrap'
import {
  ProjectCard, ErrorCard, NotFoundCard,
  LinkButton, ProjectDeleteButton
} from 'components'

describe('ProjectCard Component', () => {
  const setup = propOverrides => {
    const props = Object.assign({
      children: null,
    }, propOverrides)

    const wrapper = shallow(<ProjectCard {...props} />)

    return {
      props,
      wrapper,
      title: wrapper.find(CardTitle),
      error: wrapper.find(ErrorCard),
      notFound: wrapper.find(NotFoundCard),
      text: wrapper.find(CardText)
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
    const { error } = setup({ error: 'Error' })

    expect(error.exists()).to.be.true
  })

  it('renders NotFoundCard when no project found', () => {
    const { notFound } = setup()

    expect(notFound.exists()).to.be.true
  })

  context('when provided a project', () => {
    const project = {
      key: 'PROJECT-1',
      name: 'PROJECT 1',
      homepage: 'http://www.google.com/',
    }

    it("renders project's information", () => {
      const { wrapper, title, text } = setup({ project })

      expect(title.shallow()).to.contain.text(project.name)
      expect(text.first().shallow()).to.contain.text('key: PROJECT-1')
      expect(text.last().shallow()).to.contain.text('homepage: http://www.google.com/')
    })

    it('renders project edit link', () => {
      const { wrapper } = setup({ project })
      const button = wrapper.find(LinkButton)

      expect(button.prop('to')).to.eq('/projects/PROJECT-1/edit')
    })

    it('renders project delete link', () => {
      const { wrapper } = setup({ project })
      const button = wrapper.find(ProjectDeleteButton)

      expect(button.prop('project')).to.eq(project)
    })
  })
})
