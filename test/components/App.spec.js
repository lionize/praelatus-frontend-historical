import React from 'react';
import { shallow } from 'enzyme';
import { App } from 'components';

describe('App Component', () => {
  const setup = propOverrides => {
    const props = Object.assign(
      {
        children: null,
      },
      propOverrides,
    );

    const wrapper = shallow(<App {...props} />);

    return {
      props,
      wrapper,
      header: wrapper.find('Header'),
      footer: wrapper.find('Footer'),
    };
  };

  it('renders', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('renders header', () => {
    const { header } = setup();
    expect(header.exists()).toBe(true);
  });

  it('renders footer', () => {
    const { footer } = setup();
    expect(footer.exists()).toBe(true);
  });

  it('renders children', () => {
    const child = <div />;
    const { wrapper } = setup({ children: child });
    expect(wrapper.contains(child)).toBe(true);
  });
});
