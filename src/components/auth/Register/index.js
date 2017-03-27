import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { Field, reduxForm } from 'redux-form'
import { renderField } from 'utils'
import actions, { error } from 'modules/auth'
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

export { RegisterForm }

let Register = reduxForm({
  form: 'register',
})(RegisterForm)

const stateToProps = state => ({ error: error(state.auth) })

Register = connect(stateToProps,
  { onSubmit: actions.registerRequest }
)(Register)

export default Register
