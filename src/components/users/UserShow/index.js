import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { userSelector, loadingSelector } from 'selectors/users'
import { fetchUsersRequest } from 'actions/users'
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
  user: userSelector(state, params.id),
  loading: loadingSelector(state),
})

const mapDispatchToProps = dispatch => ({
  loadUser(id) {
    dispatch(fetchUsersRequest({ id }))
  },
})

UserShow = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserShow))

export default UserShow
