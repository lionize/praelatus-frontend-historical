import React from 'react'
import { FormGroup, Label, Input, FormText } from 'components/forms'

export default ({ input, label, type, meta: { touched, error, warning } }) => {
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
