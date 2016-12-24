import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { renderField } from 'utils'
import { Button } from 'reactstrap'
import { Form } from 'components/forms'

const validate = values => {
  const errors = {}

  if (!values.get('name')) {
    errors.name = 'Required'
  }

  if (!values.get('homepage')) {
    errors.homepage = 'Required'
  }

  return errors
}

const warn = values => {
  const warnings = {}
  return warnings
}

const ProjectNew = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field name="name" component={renderField} type="text" label="Name" />
    <Field name="homepage" component={renderField} type="text" label="Homepage" />
    <Field name="iconURL" component={renderField} type="text" label="Icon URL" />
    <Field name="repo" component={renderField} type="text" label="Repo" />
    <Button>Submit</Button>
  </Form>
)

export default reduxForm({
  form: 'project',
  validate,
  warn,
})(ProjectNew)
