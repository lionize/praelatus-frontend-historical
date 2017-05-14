import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { wrapProvider } from '../utilities';
import { LogoutLink, Button } from 'components';

describe('LogoutLink Component', () => {
  it('renders', () => {
    const Enhanced = wrapProvider()(LogoutLink);
    const wrapper = mount(<Enhanced />);
    const button = wrapper.find(Button);

    expect(button.exists()).toBe(true);
  });
});
