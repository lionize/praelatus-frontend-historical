import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import TicketList from 'components/TicketList'

describe('TicketList', () => {
  it('should render a list of tickets', () => {
    const props = [
      {
        id: 1,
        description: "Desc",
        summary: "Summ"
      },
      {
        id: 2,
        description: "Desc2",
        summary: "Summ2"
      }
    ]
    const wrapper = mount(<TicketList tickets={props} />)
    const list = wrapper.find('li')
    expect(list.length).to.eq(2)
  })
})
