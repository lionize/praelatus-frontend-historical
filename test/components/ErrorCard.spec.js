import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { CardTitle, CardText } from 'reactstrap'
import { ErrorCard } from 'components'

describe('ErrorCard Component', () => {
  it('renders', () => {
    const wrapper = shallow(<ErrorCard error={""} />)
    const title = wrapper.find(CardTitle)

    expect(wrapper.exists()).to.be.true
    expect(title.shallow()).to.contain.text('API Error')
  })

  it('displays the error', () => {
    const wrapper = shallow(<ErrorCard error={"Error!"} />)
    const text = wrapper.find(CardText)

    expect(text.shallow()).to.contain.text('Error: Error!')
  })
})
