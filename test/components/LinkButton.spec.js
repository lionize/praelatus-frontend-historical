import React from 'react';
import { shallow } from 'enzyme';
import { LinkButton, Button } from 'components';
import { Link } from 'react-router';

describe('LinkButton Component', () => {
  const setup = propOverrides => {
    const props = Object.assign(
      {
        children: [],
        to: '',
      },
      propOverrides,
    );

    const wrapper = shallow(<LinkButton {...props} />);

    return {
      props,
      wrapper,
      button: wrapper.find(Button),
    };
  };

  it('renders', () => {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });

  it('renders the link with props', () => {
    const { wrapper, button } = setup({
      to: 'home',
      color: 'red',
      children: <div />,
    });

    expect(wrapper.prop('to')).toEqual('home');
    expect(button.prop('color')).toEqual('red');
    expect(button.find('div').exists()).toBe(true);
  });
});
