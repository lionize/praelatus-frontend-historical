import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { user, fetching } from 'modules/user'
import { UserCard } from 'components/users'

export class UserShow extends Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    loadUser: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    user: React.PropTypes.object,
  }

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

export default withRouter(connect(
  mapStateToProps,
  { loadUser: actions.fetchRequest },
)(UserShow))
