import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import actions, { teams } from 'modules/team'
import { TeamLink, UserLink } from 'components'

const TeamTable = ({ teams }) => (
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
        {teams.map((team, i) =>
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
  componentDidMount() {
    this.props.loadTeams()
  }

  render() {
    return <TeamTable {...this.props} />
  }
}

const mapStateToProps = state => ({
  teams: teams(state.data.teams),
})

TeamList = connect(
  mapStateToProps,
  { loadTeams: actions.fetchRequest },
)(TeamList)

export default TeamList
