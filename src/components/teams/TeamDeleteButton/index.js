import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import { connect } from 'react-redux'
import actions from 'modules/team'
import { DeleteButton } from 'components'

const TeamDeleteButton = ({ team, deleteTeam }) => (
  <DeleteButton handleClick={() => { deleteTeam(team.name) }} />
)

export { TeamDeleteButton }

export default connect(null,
  { deleteTeam: actions.deleteRequest },
)(TeamDeleteButton)
