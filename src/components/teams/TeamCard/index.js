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
                Lead: <UserLink user={team.lead}>{team.lead.username}</UserLink>
              </CardText>
            }
            {team.members && team.members.map(member =>
              <CardText key={member.id}>
                Member: <UserLink user={member}>{member.username}</UserLink>
              </CardText>
            )}
            <LinkButton to={`/teams/${team.name}/edit`}>Edit</LinkButton>
            <TeamDeleteButton team={team} />
          </CardBlock>
        </Card>
      </div>
    )
  }

  return error
    ? <ErrorCard error={error} />
    : <NotFoundCard type="Team" />
}

TeamCard.propTypes = {
  team: React.PropTypes.object,
  loading: React.PropTypes.bool,
  error: React.PropTypes.string,
}

TeamCard.defaultProps = {
  team: null,
  loading: false,
  error: null,
}

export default TeamCard
