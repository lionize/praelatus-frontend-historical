import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Card, CardTitle, CardText } from 'reactstrap'
import { LinkButton, NotFoundCard } from 'components'

describe('NotFoundCard Component', () => {
  const setup = propOverrides => {
    const props = Object.assign({
      children: null,
      type: 'None',
    }, propOverrides)

    const wrapper = shallow(<NotFoundCard {...props} />)

    return {
      props,
      wrapper,
      card: wrapper.find(Card),
      title: wrapper.find(CardTitle),
      text: wrapper.find(CardText),
      link: wrapper.find(LinkButton),
    }
  }

  it('renders', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).to.be.true
  })

  it('sets up the card props', () => {
    const { card } = setup()

    expect(card.prop('block')).to.be.true
    expect(card.prop('inverse')).to.be.true
    expect(card.prop('color')).to.eq('danger')
  })

  it('displays the correct title', () => {
    const { title } = setup({ type: 'Team' })

    expect(title.shallow()).to.contain.text('Team Not Found')
  })

  it('displays the correct text', () => {
    const { text } = setup({ type: 'TICKET' })

    expect(text.shallow()).to.contain.text('No ticket with that id was found.')
  })

  it('displays a link button with the correct text', () => {
    let { link } = setup({ type: 'Project' })
    link = link.shallow()

    const text = link.prop('children').props.children.join('')
    expect(link.prop('to')).to.eq('/projects')
    expect(text).to.eq('See list of all projects')
  })
})
