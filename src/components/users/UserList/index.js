import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  users,
  fetchRequest,
} from 'modules/userRedux'
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

const mapDispatchToProps = dispatch => ({
  loadUsers() {
    dispatch(fetchRequest())
  },
})

UserList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList)

export default UserList
