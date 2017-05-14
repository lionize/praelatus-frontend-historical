import React from 'react';
import { shallow } from 'enzyme';
import md5 from 'crypto-js/md5';
import { CardTitle, CardText } from 'reactstrap';
import { Gravatar } from 'components';

describe('Gravatar Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Gravatar email={'test'} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('displays image with correct information', () => {
    const email = 'test@test.com';
    const wrapper = shallow(<Gravatar email={email} />);

    expect(wrapper.type()).toEqual('img');
    expect(wrapper.prop('alt')).toEqual('User Avatar');
    expect(wrapper.prop('src')).toEqual(
      `https://www.gravatar.com/avatar/${md5(email)}`,
    );
  });
});
