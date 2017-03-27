import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import actions from 'modules/auth'
import { Button } from 'components'

let LogoutLink = ({ logout }) => (
  <Button onClick={logout}>Logout</Button>
)

LogoutLink = connect(null,
  { logout: actions.logout }
)(LogoutLink)

export default LogoutLink
