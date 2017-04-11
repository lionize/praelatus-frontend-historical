import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormText } from 'components/forms';

const renderField = (
  { input, label, type, meta: { touched, error, warning } },
) => {
  let state;

  if (warning) {
    state = 'warning';
  }
  if (error) {
    state = 'danger';
  }

  return (
    <FormGroup color={touched ? state : null}>
      <Label>{label}</Label>
      <Input {...input} type={type} state={touched ? state : null} />
      {touched && (error || warning) && <FormText>{error || warning}</FormText>}
    </FormGroup>
  );
};

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string,
  }).isRequired,
};

export default renderField;
