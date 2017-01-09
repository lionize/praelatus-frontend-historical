import React from 'react'
import { Button as ButtonReactstrap} from 'reactstrap'

const Button = (props) => (
  <ButtonReactstrap {...props}>
    {props.children}
  </ButtonReactstrap>
)

export default Button
