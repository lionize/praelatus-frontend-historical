import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components'

const DeleteButton = ({ handleClick }) => (
  <Button onClick={handleClick}>Delete</Button>
)

DeleteButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default DeleteButton
