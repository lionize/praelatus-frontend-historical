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

export { LoginForm }

let Login = reduxForm({
  form: 'login',
})(LoginForm)

Login = connect(null,
  { onSubmit: actions.loginRequest }
)(Login)

export default Login
