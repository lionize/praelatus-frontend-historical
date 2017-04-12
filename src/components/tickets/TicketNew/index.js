import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from 'modules/ticket';
import { TicketForm } from 'components';

export const TicketNew = ({ createTicket }) => (
  <TicketForm handleSubmit={createTicket} />
);

TicketNew.propTypes = {
  createTicket: PropTypes.func.isRequired,
};

export default connect(null, { createTicket: actions.createRequest })(
  TicketNew,
);
