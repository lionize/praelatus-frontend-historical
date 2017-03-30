import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { ProjectForm } from 'components'

describe('ProjectForm component', () => {
  it('renders', () => {
    const wrapper = shallow(<ProjectForm />)

    expect(wrapper.exists()).to.be.true
  })

  it('takes a callback', () => {
    const callback = () => {}
    const wrapper = shallow(<ProjectForm handleSubmit={callback} />)

    expect(wrapper.prop('handleSubmit')).to.eq(callback)
  })
})
