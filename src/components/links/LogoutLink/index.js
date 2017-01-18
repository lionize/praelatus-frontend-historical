import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { logoutRequest as logout } from 'actions/auth'
import { Button } from 'components'

class LogoutLink extends Component {
  @autobind
  handleClick() {
    this.props.logout()
  }

  render() {
    return <Button onClick={this.handleClick}>Logout</Button>
  }
}

LogoutLink = connect(null,
  { logout }
)(LogoutLink)

export default LogoutLink
