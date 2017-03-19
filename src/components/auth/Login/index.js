import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { Field, reduxForm } from 'redux-form'
import actions from 'modules/auth'
import { renderField } from 'utils'
import { Form, Button } from 'components'

let LoginForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field name="username" component={renderField} type="text" label="Username" />
    <Field name="password" component={renderField} type="password" label="Password" />
    <Button>Submit</Button>
  </Form>
)

LoginForm = reduxForm({
  form: 'login',
})(LoginForm)

export { LoginForm }

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
  { login: actions.loginRequest }
)(Login)

export default Login
