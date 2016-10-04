import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import Ticket from 'components/Ticket'

describe('Ticket', () => {
  const props = {
    id: 1,
    description: "This is the ticket description",
    summary: 'Some Ticket'
  }
  const wrapper = mount(<Ticket {...props} />)

  it('displays the ticket header', () => {
    const header = wrapper.find('h1')
    expect(header).to.contain.text(props.id)
    expect(header).to.contain.text(props.summary)
  })

  it('displays the ticket description', () => {
    const description = wrapper.find('.description')
    expect(description).to.contain.text(props.description)
  })
})
