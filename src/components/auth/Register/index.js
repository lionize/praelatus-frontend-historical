import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { renderField } from 'utils'
import actions, { error } from 'modules/auth'
import { Form, Button } from 'components'

const RegisterForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field name="username" component={renderField} type="text" label="Username" />
    <Field name="password" component={renderField} type="password" label="Password" />
    <Field name="name" component={renderField} type="text" label="Name" />
    <Field name="email" component={renderField} type="email" label="Email" />
    <Button>Submit</Button>
  </Form>
)

RegisterForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
}

export { RegisterForm }

const stateToProps = state => ({ error: error(state.auth) })

export default connect(stateToProps,
  { onSubmit: actions.registerRequest }
)(reduxForm({
  form: 'register'
})(RegisterForm))
