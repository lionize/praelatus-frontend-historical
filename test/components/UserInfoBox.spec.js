import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { wrapProvider } from '../utilities';
import BoxContainer, {
  UserInfoBox as BoxComponent,
} from 'components/auth/UserInfoBox';
import { ProfileBox, LoginLink, RegisterLink } from 'components';

describe('UserInfoBox Component', () => {
  it('renders', () => {
    const state = {
      auth: {
        currentUser: {},
      },
    };

    const Enhanced = wrapProvider({ state })(BoxContainer);
    const wrapper = mount(<Enhanced />);

    const container = wrapper.find(BoxContainer);
    const component = wrapper.find(BoxComponent);

    expect(container.exists()).to.be.true;
    expect(component.exists()).to.be.true;
  });

  context('when logged in', () => {
    it('displays a ProfileBox', () => {
      const wrapper = shallow(
        <BoxComponent loggedIn={true} user={{ username: 'user0' }} />,
      );
      const profileBox = wrapper.find(ProfileBox);

      expect(profileBox.exists()).to.be.true;
      expect(profileBox.prop('user')).to.deep.eq({ username: 'user0' });
    });
  });

  context('when logged out', () => {
    it('displays a LoginLink and RegisterLink', () => {
      const wrapper = shallow(<BoxComponent />);

      expect(wrapper.find(LoginLink).exists()).to.be.true;
      expect(wrapper.find(RegisterLink).exists()).to.be.true;
    });
  });
});
