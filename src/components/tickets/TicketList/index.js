import React from 'react'
import { Table } from 'reactstrap'
import { TicketLink, UserLink } from 'components'

const TicketList = ({ tickets }) => (
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
        {tickets.map((ticket, i) =>
          <tr key={i}>
            <td>{ticket.id}</td>
            <td>
              <TicketLink id={ticket.id}>{ticket.key}</TicketLink>
            </td>
            <td>{ticket.summary}</td>
            <td>{ticket.description}</td>
            <td>
              {ticket.reporter &&
                <UserLink id={ticket.reporter.id}>{ticket.reporter.username}</UserLink>
              }
            </td>
            <td>
              {ticket.assignee &&
                <UserLink id={ticket.assignee.id}>{ticket.assignee.username}</UserLink>
              }
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
)

export default TicketList
