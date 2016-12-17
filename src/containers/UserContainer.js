import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { userSelector, loadingSelector } from 'selectors/users'
import { fetchUsersRequest } from 'actions/users'
import User from 'components/User'

class UserContainer extends Component {
  componentWillMount() {
    this.props.loadUser(this.props.params.id)
  }

  render() {
    return <User {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => ({
  user: userSelector(state, params.id),
  loading: loadingSelector(state),
})

const mapDispatchToProps = dispatch => ({
  loadUser(id) {
    dispatch(fetchUsersRequest({id: id}))
  }
})

UserContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContainer))

export default UserContainer
