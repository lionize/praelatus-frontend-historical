import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { registerRequest } from 'actions/auth'
import { Register } from 'components'

class RegisterContainer extends Component {
  @autobind
  handleSubmit(values) {
    this.props.register(values)
  }

  render() {
    return <Register onSubmit={this.handleSubmit} {...this.props} />
  }
}

const mapStateToProps = () => ({})

RegisterContainer = connect(
  mapStateToProps,
  { register: registerRequest }
)(RegisterContainer)

export default RegisterContainer
