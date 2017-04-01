import React from 'react'
import { Link } from 'react-router'
import { Button } from 'components'

const LinkButton = ({ to, children, ...rest }) => (
  <Link to={to}>
    <Button {...rest} >
      {children}
    </Button>
  </Link>
)

LinkButton.propTypes = {
  to: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
}

export default LinkButton
