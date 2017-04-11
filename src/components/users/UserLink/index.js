import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const UserLink = ({ user, children }) => (
  <Link to={`/users/${user.username}`}>
    {children}
  </Link>
);

UserLink.propTypes = {
  user: PropTypes.object.isRequired,
  children: PropTypes.node,
};

UserLink.defaultProps = {
  children: [],
};

export default UserLink;
