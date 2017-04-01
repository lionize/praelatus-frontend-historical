import React from 'react'
import { Button as ButtonReactstrap } from 'reactstrap'

const Button = ({ children, ...rest }) => (
  <ButtonReactstrap {...rest}>
    {children}
  </ButtonReactstrap>
)

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Button
