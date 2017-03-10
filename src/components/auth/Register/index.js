import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { Field, reduxForm } from 'redux-form'
import { renderField } from 'utils'
import actions from 'modules/auth'
import { Form, Button } from 'components'

let RegisterForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field name="username" component={renderField} type="text" label="Username" />
    <Field name="password" component={renderField} type="password" label="Password" />
    <Field name="name" component={renderField} type="text" label="Name" />
    <Field name="email" component={renderField} type="email" label="Email" />
    <Button>Submit</Button>
  </Form>
)

RegisterForm = reduxForm({
  form: 'register',
})(RegisterForm)

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
