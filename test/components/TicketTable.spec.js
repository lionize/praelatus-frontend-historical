import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { TicketTable } from 'components/tickets/TicketList'
import { TicketLink, UserLink } from 'components'

describe('TicketTable Component', () => {
  const setup = propOverrides => {
    const props = Object.assign({
      children: null,
    }, propOverrides)

    const wrapper = shallow(<TicketTable {...props} />)

    return {
      props,
      wrapper,
      rows: wrapper.find('tr'),
      ticketLink: wrapper.find(TicketLink),
      userLink: wrapper.find(UserLink)
    }
  }

  const fixtures = [
    {
      id: 0,
      key: 'TICKET-KEY',
      summary: 'Ticket Summary',
      description: 'Ticket Description',
      reporter: {
        username: 'user0',
      },
      assignee: {
        username: 'user1',
      },
    }
  ]

  it("renders a row with ticket's information", () => {
    const { ticketLink, rows } = setup({ tickets: fixtures })

    const row = rows.at(1)

    expect(row.text()).to.contain(fixtures[0].id)
    expect(row.text()).to.contain(fixtures[0].summary)
    expect(row.text()).to.contain(fixtures[0].description)
    expect(ticketLink.prop('ticket')).to.eq(fixtures[0])
    expect(ticketLink.prop('children')).to.eq(fixtures[0].key)
  })

  it("renders links to the ticket's reporter and assignee", () => {
    const { userLink } = setup({ tickets: fixtures })

    expect(userLink.at(0).prop('user')).to.eq(fixtures[0].reporter)
    expect(userLink.at(0).prop('children')).to.eq(fixtures[0].reporter.username)
    expect(userLink.at(1).prop('user')).to.eq(fixtures[0].assignee)
    expect(userLink.at(1).prop('children')).to.eq(fixtures[0].assignee.username)
  })

  it('does not render reporter and assignee links if not provided', () => {
    const { userLink } = setup({ tickets: [{}] })

    expect(userLink.exists()).to.be.false
  })
})

