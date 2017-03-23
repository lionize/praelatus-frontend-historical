import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import md5 from 'crypto-js/md5'
import { CardTitle, CardText } from 'reactstrap'
import { Gravatar } from 'components'

describe('Gravatar Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Gravatar email={"test"} />)

    expect(wrapper.exists()).to.be.true
  })

  it('displays image with correct information', () => {
    const email = 'test@test.com'
    const wrapper = shallow(<Gravatar email={email} />)

    expect(wrapper.type()).to.eq('img')
    expect(wrapper.prop('alt')).to.eq('User Avatar')
    expect(wrapper.prop('src')).to.eq(`https://www.gravatar.com/avatar/${md5(email)}`)
  })
})
