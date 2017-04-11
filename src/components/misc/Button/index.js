import React from 'react'
import PropTypes from 'prop-types'
import { Button as ButtonReactstrap } from 'reactstrap'

const Button = ({ children, ...rest }) => (
  <ButtonReactstrap {...rest}>
    {children}
  </ButtonReactstrap>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
