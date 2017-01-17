import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { loginRequest as login } from 'actions/auth'
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
  { login, }
)(Login)

export default Login
