import React from 'react'
import { Table } from 'reactstrap'

const UserList = ({ users }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Username</th>
            <th>Full Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>Gravatar</td>
              <td>{user.username}</td>
              <td>{user.fullName}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default UserList
