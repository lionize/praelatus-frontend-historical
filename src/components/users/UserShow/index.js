import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { user, fetching } from 'modules/user'
import { UserCard } from 'components/users'

export class UserShow extends Component {
  static defaultProps = {
    loading: false,
  }

  static propTypes = {
    params: React.PropTypes.object.isRequired,
    loadUser: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    user: React.PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.loadUser(this.props.params.username)
  }

  render() {
    const { loading, user: userProp } = this.props
    return <UserCard loading={loading} user={userProp} />
  }
}

const mapStateToProps = (state, { params }) => ({
  user: user(state, params.username),
  loading: fetching(state),
})

export default withRouter(connect(
  mapStateToProps,
  { loadUser: actions.fetchRequest },
)(UserShow))
