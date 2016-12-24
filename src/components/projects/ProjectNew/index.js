import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { Button } from 'reactstrap'
import { Form, FormGroup, Label, Input, FormText } from 'components/forms'

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

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => { 
  let state

  if (warning) {
    state = 'warning'
  }
  if (error) {
    state = 'danger'
  }

  return (
    <FormGroup color={touched ? state : null}>
      <Label>{label}</Label>
      <Input {...input} type={type} state={state} />
      {touched && (error || warning) && <FormText>{error || warning}</FormText>}
    </FormGroup>
  )
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
