import React, { Component } from 'react'
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
        {teamList.map((team, i) =>
          <tr key={i}>
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
                  {team.members.map((member, j) =>
                    <li key={j}>
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

class TeamList extends Component {
  componentWillMount() {
    this.props.loadTeams()
  }

  render() {
    return <TeamTable {...this.props} />
  }
}

export { TeamList }

const mapStateToProps = state => ({
  teams: teams(state.data.teams),
})

export default connect(
  mapStateToProps,
  { loadTeams: actions.fetchRequest },
)(TeamList)
