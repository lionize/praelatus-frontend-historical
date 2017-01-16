import React from 'react'
import { connect } from 'react-redux'
import { currentUserSelector } from 'selectors/auth'
import { UserInfoBox } from 'components'

const UserInfoBoxContainer = ({ user }) => (
  <UserInfoBox user={user} />
)

const mapStateToProps = state => ({
  user: currentUserSelector(state)
})

export default connect(
  mapStateToProps,
)(UserInfoBoxContainer)
