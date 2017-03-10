import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import actions, { error } from 'modules/auth'
import { RegisterForm } from 'components'

class Register extends Component {
  @autobind
  handleSubmit(values) {
    this.props.register(values)
  }

  render() {
    return <RegisterForm onSubmit={this.handleSubmit} error={this.props.error} />
  }
}

const stateToProps = state => ({ error: error(state.auth) })

Register = connect(stateToProps,
  { register: actions.registerRequest }
)(Register)

export default Register
