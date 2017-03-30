import React from 'react'
import { connect } from 'react-redux'
import actions from 'modules/auth'
import { Button } from 'components'

const LogoutLink = ({ logout }) => (
  <Button onClick={logout}>Logout</Button>
)

export default connect(null,
  { logout: actions.logout }
)(LogoutLink)
