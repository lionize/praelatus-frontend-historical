import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { renderField } from 'utils'
import { Form, Button } from 'components'

const LoginForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field name="username" component={renderField} type="text" label="Username" />
    <Field name="password" component={renderField} type="password" label="Password" />
    <Button>Submit</Button>
  </Form>
)

export default reduxForm({
  form: 'login',
})(LoginForm)
