import React from 'react'
import { Link } from 'react-router'
import { Button } from 'components/misc'

const LinkButton = props => (
  <Link to={props.to}>
    <Button {...props} >
      {props.children}
    </Button>
  </Link>
)

export default LinkButton
