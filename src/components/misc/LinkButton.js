import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router'

const LinkButton = ({ to, children }) => (
  <Link to={to}>
    <Button>
      {children}
    </Button>
  </Link>
)

export default LinkButton
