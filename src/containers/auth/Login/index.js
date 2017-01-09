import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { loginRequest } from 'actions/auth'
import { Login } from 'components'

class LoginContainer extends Component {
  @autobind
  handleSubmit(values) {
    this.props.login(values)
  }

  render() {
    return <Login onSubmit={this.handleSubmit} {...this.props} />
  }
}

const mapStateToProps = () => ({})

LoginContainer = connect(
  mapStateToProps,
  { login: loginRequest }
)(LoginContainer)

export default LoginContainer
