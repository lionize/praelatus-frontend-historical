import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import actions from 'modules/auth'
import { Button } from 'components/misc'

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
  { logout: actions.logout }
)(LogoutLink)

export default LogoutLink
