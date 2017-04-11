import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import actions, { teams } from 'modules/team'
import { TeamLink } from 'components/teams'
import { UserLink } from 'components/users'

export const TeamTable = ({ teams: teamList }) => (
  <div>
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Lead</th>
          <th>Members</th>
        </tr>
      </thead>
      <tbody>
        {teamList.map(team =>
          <tr key={team.id}>
            <td>
              <TeamLink team={team}>{team.name}</TeamLink>
            </td>
            <td>
              {team.lead &&
                <UserLink user={team.lead}>{team.lead.username}</UserLink>
              }
            </td>
            <td>
              {team.members &&
                <ul>
                  {team.members.map(member =>
                    <li key={member.id}>
                      <UserLink user={member}>{member.username}</UserLink>
                    </li>
                  )}
                </ul>
              }
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
)

TeamTable.propTypes = {
  teams: PropTypes.array.isRequired,
}

class TeamList extends Component {
  static propTypes = {
    loadTeams: PropTypes.func.isRequired,
    teams: PropTypes.array.isRequired,
  }

  componentWillMount() {
    this.props.loadTeams()
  }

  render() {
    const { teams: teamsProp } = this.props
    return <TeamTable teams={teamsProp} />
  }
}

export { TeamList }

const mapStateToProps = state => ({
  teams: teams(state),
})

export default connect(
  mapStateToProps,
  { loadTeams: actions.fetchRequest },
)(TeamList)
