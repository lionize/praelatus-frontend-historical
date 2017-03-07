import React from 'react'
import { Table } from 'reactstrap'
import { TicketLink, UserLink } from 'components'

const TicketTable = ({ tickets }) => (
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

export default TicketTable
