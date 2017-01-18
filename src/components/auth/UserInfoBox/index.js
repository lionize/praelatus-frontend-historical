import React from 'react'
import { connect } from 'react-redux'
import { currentUserSelector } from 'selectors/auth'
import { ProfileBox, LoginLink, RegisterLink } from 'components'

const UserInfoBox = ({ user }) => {
  if (user) {
    return <ProfileBox user={user} />
  }

  return (
    <div>
      <LoginLink />
      <RegisterLink />
    </div>
  )
}

const mapStateToProps = state => ({
  user: currentUserSelector(state),
})

export default connect(
  mapStateToProps,
)(UserInfoBox)
