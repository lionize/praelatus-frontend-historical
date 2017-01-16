import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { renderField } from 'utils'
import { Form, Button } from 'components'

const validate = () => {
  const errors = {}

  return errors
}

const Login = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field name="username" component={renderField} type="text" label="Username" />
    <Field name="password" component={renderField} type="password" label="Password" />
    <Button>Submit</Button>
  </Form>
)

export default reduxForm({
  form: 'login',
  validate,
})(Login)
