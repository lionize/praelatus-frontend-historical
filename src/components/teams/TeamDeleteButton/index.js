import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from 'modules/team';
import { DeleteButton } from 'components';

const TeamDeleteButton = ({ team, deleteTeam }) => (
  <DeleteButton
    handleClick={() => {
      deleteTeam(team.name);
    }}
  />
);

TeamDeleteButton.propTypes = {
  team: PropTypes.object.isRequired,
  deleteTeam: PropTypes.func.isRequired,
};

export { TeamDeleteButton };

export default connect(null, { deleteTeam: actions.deleteRequest })(
  TeamDeleteButton,
);
