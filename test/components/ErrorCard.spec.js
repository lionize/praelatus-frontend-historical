import React from 'react';
import { shallow } from 'enzyme';
import { CardTitle, CardText } from 'reactstrap';
import { ErrorCard } from 'components';

describe('ErrorCard Component', () => {
  it('renders', () => {
    const wrapper = shallow(<ErrorCard error={''} />);
    const title = wrapper.find(CardTitle);

    expect(wrapper.exists()).toBe(true);
    expect(title.shallow().text()).toContain('API Error');
  });

  it('displays the error', () => {
    const wrapper = shallow(<ErrorCard error={'Error!'} />);
    const text = wrapper.find(CardText);

    expect(text.shallow().text()).toContain('Error: Error!');
  });
});
