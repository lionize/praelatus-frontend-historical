import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { CardTitle, CardText } from 'reactstrap'
import {
  TicketCard, ErrorCard, NotFoundCard,
  LinkButton, TicketDeleteButton
} from 'components'

describe('TicketCard Component', () => {
  const setup = propOverrides => {
    const props = Object.assign({
      children: null,
    }, propOverrides)

    const wrapper = shallow(<TicketCard {...props} />)

    return {
      props,
      wrapper,
      title: wrapper.find(CardTitle),
      error: wrapper.find(ErrorCard),
      notFound: wrapper.find(NotFoundCard),
      text: wrapper.find(CardText),
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

  it('renders NotFoundCard when no ticket found', () => {
    const { notFound } = setup()

    expect(notFound.exists()).to.be.true
  })

  context('when provided a ticket', () => {
    const ticket = {
      key: 'TICKET-1',
      summary: 'Ticket Summary',
      description: 'Ticket Description',
    }

    it("render's ticket's information", () => {
      const { wrapper, title, text } = setup({ ticket })

      expect(title.shallow()).to.contain.text('TICKET-1')
      expect(text.first().shallow()).to.contain.text('Summary: Ticket Summary')
      expect(text.last().shallow()).to.contain.text('Description: Ticket Description')
    })

    it('renders ticket edit link', () => {
      const { wrapper } = setup({ ticket })
      const button = wrapper.find(LinkButton)

      expect(button.prop('to')).to.eq('/tickets/TICKET-1/edit')
    })

    it('renders ticket delete link', () => {
      const { wrapper } = setup({ ticket })
      const button = wrapper.find(TicketDeleteButton)

      expect(button.prop('ikey')).to.eq('TICKET-1')
    })
  })
})
