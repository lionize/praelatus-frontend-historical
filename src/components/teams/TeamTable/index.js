import React from 'react'
import { Table } from 'reactstrap'
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

export default TeamTable
