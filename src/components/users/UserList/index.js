import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import actions, { users } from 'modules/user'
import { Gravatar } from 'components/misc'
import { UserLink } from 'components/users'

export const UserTable = ({ users: userList }) => {
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
          {userList.map((user, i) =>
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

UserTable.propTypes = {
  users: React.PropTypes.array.isRequired,
}

export class UserList extends Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    loadUser: React.PropTypes.func.isRequired,
    users: React.PropTypes.array,
  }

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

export default connect(
  mapStateToProps,
  { loadUsers: actions.fetchRequest }
)(UserList)
