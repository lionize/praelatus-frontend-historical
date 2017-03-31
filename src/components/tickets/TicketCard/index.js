import React from 'react'
import { Card, CardBlock, CardTitle, CardText } from 'reactstrap'
import { LinkButton, UserLink, NotFoundCard, ErrorCard, TicketDeleteButton } from 'components'

const Ticket = ({ ticket, loading, error }) => {
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (ticket) {
    return (
      <div>
        <Card>
          <CardBlock>
            <CardTitle>{ticket.key}</CardTitle>
            <CardText>Summary: {ticket.summary}</CardText>
            <CardText>Description: {ticket.description}</CardText>
            {ticket.reporter &&
              <CardText>
                Reporter: <UserLink user={ticket.reporter}>{ticket.reporter.username}</UserLink>
              </CardText>
            }
            {ticket.assignee &&
              <CardText>
                Assignee: <UserLink user={ticket.assignee}>{ticket.assignee.username}</UserLink>
              </CardText>
            }
            <LinkButton to={`/tickets/${ticket.key}/edit`}>Edit</LinkButton>
            <TicketDeleteButton ticket={ticket} />
          </CardBlock>
        </Card>
      </div>
    )
  }

  return error
    ? <ErrorCard error={error} />
    : <NotFoundCard type="Ticket" />
}

Ticket.propTypes = {
  ticket: React.PropTypes.object,
  error: React.PropTypes.string,
  loading: React.PropTypes.bool,
}

export default Ticket
