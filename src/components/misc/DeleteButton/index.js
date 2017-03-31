import React from 'react'
import { Button } from 'components'

const DeleteButton = ({ handleClick }) => (
  <Button onClick={handleClick}>Delete</Button>
)

DeleteButton.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
}

export default DeleteButton
