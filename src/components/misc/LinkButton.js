import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router'

const LinkButton = props => (
  <Link to={props.to}>
    <Button {...props} >
      {props.children}
    </Button>
  </Link>
)

export default LinkButton
