import React from 'react';
import { shallow } from 'enzyme';
import { Card, CardTitle, CardText } from 'reactstrap';
import { LinkButton, NotFoundCard } from 'components';

describe('NotFoundCard Component', () => {
  const setup = propOverrides => {
    const props = Object.assign(
      {
        children: null,
        type: 'None',
      },
      propOverrides,
    );

    const wrapper = shallow(<NotFoundCard {...props} />);

    return {
      props,
      wrapper,
      card: wrapper.find(Card),
      title: wrapper.find(CardTitle),
      text: wrapper.find(CardText),
      link: wrapper.find(LinkButton),
    };
  };

  it('renders', () => {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });

  it('sets up the card props', () => {
    const { card } = setup();

    expect(card.prop('block')).toBe(true);
    expect(card.prop('inverse')).toBe(true);
    expect(card.prop('color')).toEqual('danger');
  });

  it('displays the correct title', () => {
    const { title } = setup({ type: 'Team' });

    expect(title.shallow().text()).toContain('Team Not Found');
  });

  it('displays the correct text', () => {
    const { text } = setup({ type: 'TICKET' });

    expect(text.shallow().text()).toContain(
      'No ticket with that id was found.',
    );
  });

  it('displays a link button with the correct text', () => {
    let { link } = setup({ type: 'Project' });
    link = link.shallow();

    const text = link.prop('children').props.children.join('');
    expect(link.prop('to')).toEqual('/projects');
    expect(text).toEqual('See list of all projects');
  });
});
