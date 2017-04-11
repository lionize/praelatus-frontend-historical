import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { isLoggedIn, currentUser } from 'modules/auth'
import { ProfileBox, LoginLink, RegisterLink } from 'components'

const UserInfoBox = ({ loggedIn, user }) => {
  if (loggedIn) {
    return <ProfileBox user={user} />
  }

  return (
    <div>
      <LoginLink />
      <RegisterLink />
    </div>
  )
}

UserInfoBox.propTypes = {
  loggedIn: PropTypes.bool,
  user: PropTypes.object,
}

UserInfoBox.defaultProps = {
  loggedIn: false,
  user: {},
}

export { UserInfoBox }

const stateToProps = state => ({
  user: currentUser(state.auth),
  loggedIn: isLoggedIn(state.auth),
})

export default connect(
  stateToProps,
)(UserInfoBox)
