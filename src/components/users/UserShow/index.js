import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { user, fetching } from 'modules/user'
import { UserCard } from 'components'

class UserShow extends Component {
  componentWillMount() {
    this.props.loadUser(this.props.params.username)
  }

  render() {
    return <UserCard {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => ({
  user: user(state.data.users, params.username),
  loading: fetching(state.data.users),
})

const mapDispatchToProps = dispatch => ({
  loadUser(username) {
    dispatch(actions.fetchRequest({ username }))
  },
})

UserShow = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserShow))

export default UserShow
