import React from 'react'
import PropTypes from 'prop-types'
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
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default LinkButton
