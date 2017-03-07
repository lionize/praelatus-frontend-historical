import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions, { users } from 'modules/user'
import { UserTable } from 'components'

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
