import React from 'react'
import { FormGroup, Label, Input, FormText } from 'components/forms'

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
      <Input {...input} type={type} state={touched ? state : null} />
      {touched && (error || warning) && <FormText>{error || warning}</FormText>}
    </FormGroup>
  )
}

renderField.propTypes = {
  input: React.PropTypes.object.isRequired,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  meta: React.PropTypes.shape({
    touched: React.PropTypes.bool,
    error: React.PropTypes.string,
    warning: React.PropTypes.string,
  }).isRequired
}

export default renderField
