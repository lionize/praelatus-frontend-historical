import React from 'react'
import { connect } from 'react-redux'
import actions from 'modules/team'
import { DeleteButton } from 'components'

const TeamDeleteButton = ({ team, deleteTeam }) => (
  <DeleteButton handleClick={() => { deleteTeam(team.name) }} />
)

TeamDeleteButton.propTypes = {
  team: React.PropTypes.object.isRequired,
  deleteTeam: React.PropTypes.func.isRequired,
}

export { TeamDeleteButton }

export default connect(null,
  { deleteTeam: actions.deleteRequest },
)(TeamDeleteButton)
