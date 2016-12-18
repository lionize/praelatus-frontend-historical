import React, { Component } from 'react'
import { connect } from 'react-redux'
import { usersSelector } from 'selectors/users'
import { fetchUsersRequest } from 'actions/users'
import UserList from 'components/UserList'

class UserListContainer extends Component {
  componentWillMount() {
    this.props.loadUsers()
  }

  render() {
    return <UserList {...this.props} />
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

UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserListContainer)

export default UserListContainer
