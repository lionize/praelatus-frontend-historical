import React, { Component } from 'react'
import { connect } from 'react-redux'
import { usersSelector } from 'selectors/users'
import { fetchUsersRequest } from 'actions/users'
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
  users: usersSelector(state),
})

const mapDispatchToProps = dispatch => ({
  loadUsers() {
    dispatch(fetchUsersRequest())
  },
})

UserList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList)

export default UserList
