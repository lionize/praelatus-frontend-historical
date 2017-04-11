import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import actions, {
  tickets,
} from 'modules/ticket'
import { Table } from 'reactstrap'
import { TicketLink, UserLink } from 'components'

export const TicketTable = ({ tickets: ticketList }) => (
  <div>
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>Key</th>
          <th>Summary</th>
          <th>Description</th>
          <th>Reporter</th>
          <th>Assignee</th>
        </tr>
      </thead>
      <tbody>
        {ticketList.map(ticket =>
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <td>
              <TicketLink ticket={ticket}>{ticket.key}</TicketLink>
            </td>
            <td>{ticket.summary}</td>
            <td>{ticket.description}</td>
            <td>
              {ticket.reporter &&
                <UserLink user={ticket.reporter}>{ticket.reporter.username}</UserLink>
              }
            </td>
            <td>
              {ticket.assignee &&
                <UserLink user={ticket.assignee}>{ticket.assignee.username}</UserLink>
              }
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
)

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
}

export class TicketList extends Component {
  static propTypes = {
    loadTickets: PropTypes.func.isRequired,
    tickets: PropTypes.array.isRequired,
  }

  componentWillMount() {
    this.props.loadTickets()
  }

  render() {
    const { tickets: ticketsProp } = this.props
    return <TicketTable tickets={ticketsProp} />
  }
}

const mapStateToProps = state => ({
  tickets: tickets(state),
})

export default connect(
  mapStateToProps,
  { loadTickets: actions.fetchRequest },
)(TicketList)
