import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { renderField } from 'utils'
import { Form, Button } from 'components'

const validate = (values) => {
  const errors = {}

  return errors
}

const Register = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field name="username" component={renderField} type="text" label="Username" />
    <Field name="password" component={renderField} type="password" label="Password" />
    <Field name="name" component={renderField} type="text" label="Name" />
    <Field name="email" component={renderField} type="email" label="Email" />
    <Button>Submit</Button>
  </Form>
)

export default reduxForm({
  form: 'register',
  validate,
})(Register)
