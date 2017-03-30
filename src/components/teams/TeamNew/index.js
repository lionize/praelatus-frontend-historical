import React from 'react'
import { connect } from 'react-redux'
import actions from 'modules/team'
import { TeamForm } from 'components'

export const TeamNew = ({ createTeam }) => (
  <TeamForm handleSubmit={createTeam} />
)

export default connect(null,
  { createTeam: actions.createRequest }
)(TeamNew)
