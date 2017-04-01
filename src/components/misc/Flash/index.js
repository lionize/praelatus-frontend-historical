import React from 'react'

const Flash = ({ message }) => {
  if (typeof message === 'object') {
    return (
      <div className="flash-message">
        {message.data.message}
      </div>
    )
  }

  return (
    <div className="flash-message">
      {message}
    </div>
  )
}

Flash.propTypes = {
  message: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]).isRequired,
}

export default Flash
