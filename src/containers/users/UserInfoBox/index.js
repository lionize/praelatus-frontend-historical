import React, { Component } from 'react'
import { connect } from 'react-redux'
import { currentUserSelector } from 'selectors/auth'
import { UserInfoBox } from 'components'

class UserInfoBoxContainer extends Component {
  render() {
    return <UserInfoBox user={this.props.user} />
  }
}

const mapStateToProps = state => ({
  user: currentUserSelector(state)
})

UserInfoBoxContainer = connect(
  mapStateToProps,
)(UserInfoBoxContainer)

export default UserInfoBoxContainer
