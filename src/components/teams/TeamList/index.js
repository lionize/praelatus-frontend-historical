import React from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router'

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
              <Link to={`/teams/${team.id}`}>{team.name}</Link>
            </td>
            <td>
              {team.lead &&
                team.lead.username
              }
            </td>
            <td>
              {team.members &&
                <ul>
                  {team.members.map((member, i) =>
                    <li key={i}>{member.username}</li>
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
