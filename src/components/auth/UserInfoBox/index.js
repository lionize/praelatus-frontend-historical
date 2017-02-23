import React from 'react'
import { connect } from 'react-redux'
import { currentUser } from 'modules/auth'
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
  user: currentUser(state.auth),
})

export default connect(
  mapStateToProps,
)(UserInfoBox)
