import React, { Component } from 'react'
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
        {ticketList.map((ticket, i) =>
          <tr key={i}>
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

class TicketList extends Component {
  componentDidMount() {
    this.props.loadTickets()
  }

  render() {
    return <TicketTable {...this.props} />
  }
}

const mapStateToProps = state => ({
  tickets: tickets(state.data.tickets),
})

const mapDispatchToProps = dispatch => ({
  loadTickets() {
    dispatch(actions.fetchRequest())
  },
})

TicketList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketList)

export default TicketList
