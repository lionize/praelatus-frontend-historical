import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { renderField } from 'utils'
import { Flash, Form, Button } from 'components'

const RegisterForm = ({ handleSubmit, error }) => (
  <Form onSubmit={handleSubmit}>
    <Flash message={error} />
    <Field name="username" component={renderField} type="text" label="Username" />
    <Field name="password" component={renderField} type="password" label="Password" />
    <Field name="name" component={renderField} type="text" label="Name" />
    <Field name="email" component={renderField} type="email" label="Email" />
    <Button>Submit</Button>
  </Form>
)

export default reduxForm({
  form: 'register',
})(RegisterForm)
