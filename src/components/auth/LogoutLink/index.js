import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from 'modules/auth'
import { Button } from 'components'

const LogoutLink = ({ logout }) => (
  <Button onClick={logout}>Logout</Button>
)

LogoutLink.propTypes = {
  logout: PropTypes.func.isRequired,
}

export default connect(null,
  { logout: actions.logout }
)(LogoutLink)
