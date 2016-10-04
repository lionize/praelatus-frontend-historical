import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import TicketListItem from 'components/TicketListItem'

describe('TicketListItem', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      id: 1,
      description: 'Description',
      summary: 'Summary'
    }
    wrapper = mount(<TicketListItem {...props} />)
  })

  it('should have the appropriate props available', () => {
    expect(wrapper.props().id).to.eq(1)
    expect(wrapper.props().summary).to.eq('Summary')
    expect(wrapper.props().description).to.eq('Description')
  })

  it('should render an li containing ticket information', () => {
    const item = wrapper.find('li')
    expect(item).to.contain.text('1: Summary')
  })

  it('should render a link to the ticket', () => {
    const link = wrapper.find('a')
    expect(link.length).to.eq(1)
  })
})
