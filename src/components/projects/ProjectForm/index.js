import React from 'react'
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'
import { renderField } from 'utils'
import { Button } from 'reactstrap'
import { Form } from 'components'

const ProjectNew = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field name="name" component={renderField} type="text" label="Name" />
    <Field name="homepage" component={renderField} type="text" label="Homepage" />
    <Field name="iconURL" component={renderField} type="text" label="Icon URL" />
    <Field name="repo" component={renderField} type="text" label="Repo" />
    <Button>Submit</Button>
  </Form>
)

ProjectNew.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'project',
})(ProjectNew)
