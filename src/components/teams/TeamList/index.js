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
        </tr>
      </thead>
      <tbody>
        {teams.map((team, i) =>
          <tr key={i}>
            <td>
              <Link to={`/teams/${team.id}`}>{team.name}</Link>
            </td>
            <td></td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
)

export default TeamList
