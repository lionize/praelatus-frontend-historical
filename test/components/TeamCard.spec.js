import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { CardTitle, CardText } from 'reactstrap'
import {
  TeamCard, ErrorCard, NotFoundCard,
  LinkButton, TeamDeleteButton
} from 'components'

describe('TeamCard Component', () => {
  const setup = propOverrides => {
    const props = Object.assign({
      children: null,
    }, propOverrides)

    const wrapper = shallow(<TeamCard {...props} />)

    return {
      props,
      wrapper,
      title: wrapper.find(CardTitle),
      error: wrapper.find(ErrorCard),
      notFound: wrapper.find(NotFoundCard),
      button: wrapper.find(LinkButton),
      deleteButton: wrapper.find(TeamDeleteButton),
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

  it('renders NotFoundCard when no team found', () => {
    const { notFound } = setup()

    expect(notFound.exists()).to.be.true
  })

  context('when provided a team', () => {
    const team = {
      name: 'Team Name',
    }

    it("renders team's information", () => {
      const { wrapper, title } = setup({ team })

      expect(title.shallow()).to.contain.text('Team Name')
    })

    it('renders team edit link', () => {
      const { button, wrapper } = setup({ team })

      expect(button.prop('to')).to.eq('/teams/Team Name/edit')
    })

    it('renders team delete link', () => {
      const { deleteButton } = setup({ team })

      expect(deleteButton.prop('team')).to.deep.eq(team)
    })
  })
})
