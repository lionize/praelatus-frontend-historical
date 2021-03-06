import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

const Gravatar = ({ email }) => {
  const hash = md5(email);
  const src = `https://www.gravatar.com/avatar/${hash}`;

  return <img alt="User Avatar" src={src} className="gravatar" />;
};

Gravatar.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Gravatar;
