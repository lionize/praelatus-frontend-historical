import React from 'react'
import PropTypes from 'prop-types';
import { LogoutLink } from 'components'

const ProfileBox = ({ user }) => (
  <div>
    Logged in as: {user.username}
    <LogoutLink />
  </div>
)

ProfileBox.propTypes = {
  user: PropTypes.object.isRequired,
}

export default ProfileBox
