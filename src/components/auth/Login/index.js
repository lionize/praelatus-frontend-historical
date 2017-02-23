import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { loginRequest } from 'modules/auth'
import { LoginForm } from 'components'

class Login extends Component {
  @autobind
  handleSubmit(values) {
    this.props.login(values)
  }

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />
  }
}

Login = connect(null,
  { login: loginRequest }
)(Login)

export default Login
