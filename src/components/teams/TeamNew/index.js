import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from 'modules/team';
import { TeamForm } from 'components';

export const TeamNew = ({ createTeam }) => (
  <TeamForm handleSubmit={createTeam} />
);

TeamNew.propTypes = {
  createTeam: PropTypes.func.isRequired,
};

export default connect(null, { createTeam: actions.createRequest })(TeamNew);
