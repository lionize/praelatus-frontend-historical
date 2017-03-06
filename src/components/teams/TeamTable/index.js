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
              <TeamLink name={team.name}>{team.name}</TeamLink>
            </td>
            <td>
              {team.lead &&
                <UserLink id={team.lead.id}>{team.lead.username}</UserLink>
              }
            </td>
            <td>
              {team.members &&
                <ul>
                  {team.members.map((member, j) =>
                    <li key={j}>
                      <UserLink id={member.id}>{member.username}</UserLink>
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
