import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { registerRequest } from 'modules/authRedux'
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
  { register: registerRequest }
)(Register)

export default Register
