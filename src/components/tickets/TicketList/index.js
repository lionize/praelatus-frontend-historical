import React from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router'

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
              <Link to={`/tickets/${ticket.id}`}>{ticket.key}</Link>
            </td>
            <td>{ticket.summary}</td>
            <td>{ticket.description}</td>
            <td>{ticket.reporter}</td>
            <td>{ticket.assignee}</td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
)

export default TicketList
