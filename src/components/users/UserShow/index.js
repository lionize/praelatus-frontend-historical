import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {
  user,
  fetching,
  fetchRequest,
} from 'modules/user'
import { UserCard } from 'components'

class UserShow extends Component {
  componentWillMount() {
    this.props.loadUser(this.props.params.id)
  }

  render() {
    return <UserCard {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => ({
  user: user(state.data.users, params.id),
  loading: fetching(state.data.users),
})

const mapDispatchToProps = dispatch => ({
  loadUser(id) {
    dispatch(fetchRequest({ id }))
  },
})

UserShow = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserShow))

export default UserShow
