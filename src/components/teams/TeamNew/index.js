import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { Button } from 'reactstrap'
import { renderField } from 'utils'
import { Form } from 'components/forms'

const validate = values => {
  const errors = {}

  if (!values.get('name')) {
    errors.name = 'Required'
  }

  return errors
}

const warn = values => {
  const warnings = {}
  return warnings
}

const TeamNew = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field name="name" component={renderField} type="text" label="Name" />
    <Button>Submit</Button>
  </Form>
)

export default reduxForm({
  form: 'team',
  validate,
  warn,
})(TeamNew)
