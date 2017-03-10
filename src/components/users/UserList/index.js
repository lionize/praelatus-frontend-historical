import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import actions, { users } from 'modules/user'
import { Gravatar, UserLink } from 'components'
import './userList.css'

const UserTable = ({ users }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th />
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
                <UserLink user={user}>{user.username}</UserLink>
              </td>
              <td>{user.fullName}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

class UserList extends Component {
  componentWillMount() {
    this.props.loadUsers()
  }

  render() {
    return <UserTable {...this.props} />
  }
}

const mapStateToProps = state => ({
  users: users(state.data.users),
})

UserList = connect(
  mapStateToProps,
  { loadUsers: actions.fetchRequest }
)(UserList)

export default UserList
