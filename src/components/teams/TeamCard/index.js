import React from 'react'
import { Card, CardBlock, CardTitle, CardText } from 'reactstrap'
import { LinkButton, TeamDeleteButton, UserLink, NotFoundCard, ErrorCard } from 'components'

const TeamCard = ({ team, loading, error }) => {
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (team) {
    return (
      <div>
        <Card>
          <CardBlock>
            <CardTitle>{team.name}</CardTitle>
            {team.lead &&
              <CardText>
                Lead: <UserLink id={team.lead.id}>{team.lead.username}</UserLink>
              </CardText>
            }
            {team.members && team.members.map((member, i) =>
              <CardText key={i}>
                Member: <UserLink id={member.id}>{member.username}</UserLink>
              </CardText>
            )}
            <LinkButton to={`/teams/${team.id}/edit`}>Edit</LinkButton>
            <TeamDeleteButton id={team.id} />
          </CardBlock>
        </Card>
      </div>
    )
  }

  return error
    ? <ErrorCard error={error} />
    : <NotFoundCard type="Team" />
}

export default TeamCard
