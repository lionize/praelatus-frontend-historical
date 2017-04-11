import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'reactstrap'
import { renderField } from 'utils'
import { Form } from 'components'

const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }

  return errors
}

const TeamForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field name="name" component={renderField} type="text" label="Name" />
    <Button>Submit</Button>
  </Form>
)

TeamForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'team',
  validate,
})(TeamForm)
