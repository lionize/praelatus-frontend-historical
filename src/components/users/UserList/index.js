import React from 'react'
import { Table } from 'reactstrap'
import { Gravatar, UserLink } from 'components/misc'
import './userList.css'

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
          {users.map((user, i) =>
            <tr key={i}>
              <td>
                <Gravatar
                  email={user.email}
                  size={30}
                />
              </td>
              <td>
                <UserLink id={user.id}>{user.username}</UserLink>
              </td>
              <td>{user.fullName}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default UserList
