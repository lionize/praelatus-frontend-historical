import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import actions from 'modules/auth'
import { RegisterForm } from 'components'

class Register extends Component {
  @autobind
  handleSubmit(values) {
    this.props.register(values)
  }

  render() {
    return <RegisterForm onSubmit={this.handleSubmit} />
  }
}

Register = connect(null,
  { register: actions.registerRequest }
)(Register)

export default Register
