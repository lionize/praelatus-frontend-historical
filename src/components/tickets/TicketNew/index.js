import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { Button } from 'reactstrap'
import { renderField } from 'utils'
import { Form } from 'components/forms'

const validate = values => {}
const warn = values => {}

const TicketNew = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field name="summary" component={renderField} type="text" label="Summary" />
    <Field name="description" component={renderField} type="textarea" label="Description" />
    <Button>Submit</Button>
  </Form>
)

export default reduxForm({
  form: 'ticket',
  validate,
  warn,
})(TicketNew)
