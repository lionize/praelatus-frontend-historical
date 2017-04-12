import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import actions from 'modules/auth';
import { renderField } from 'utils';
import { Form, Button } from 'components';

const LoginForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      name="username"
      component={renderField}
      type="text"
      label="Username"
    />
    <Field
      name="password"
      component={renderField}
      type="password"
      label="Password"
    />
    <Button>Submit</Button>
  </Form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const ConnectedForm = reduxForm({ form: 'login' })(LoginForm);

export { LoginForm as Form, ConnectedForm };

export default connect(null, { onSubmit: actions.loginRequest })(ConnectedForm);
