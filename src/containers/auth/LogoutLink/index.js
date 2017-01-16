import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { logoutRequest } from 'actions/auth'
import { LogoutLink } from 'components'

class LogoutLinkContainer extends Component {
  @autobind
  handleClick(e) {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    return <LogoutLink handleClick={this.handleClick} />
  }
}

const mapStateToProps = () => ({})

LogoutLinkContainer = connect(
  mapStateToProps,
  { logout: logoutRequest }
)(LogoutLinkContainer)

export default LogoutLinkContainer
