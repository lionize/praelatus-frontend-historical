import React from 'react';

import PropTypes from 'prop-types';

const Flash = ({ message }) => {
  if (typeof message === 'object') {
    return (
      <div className="flash-message">
        {message.data.message}
      </div>
    );
  }

  return (
    <div className="flash-message">
      {message}
    </div>
  );
};

Flash.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Flash;
