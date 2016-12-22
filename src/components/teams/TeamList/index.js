import React from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router'
import { TeamLink, UserLink } from 'components/links'

const TeamList = ({ teams }) => (
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
              <TeamLink id={team.id}>{team.name}</TeamLink>
            </td>
            <td>
              {team.lead &&
                <UserLink id={team.lead.id}>{team.lead.username}</UserLink>
              }
            </td>
            <td>
              {team.members &&
                <ul>
                  {team.members.map((member, i) =>
                    <li key={i}>
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

export default TeamList
