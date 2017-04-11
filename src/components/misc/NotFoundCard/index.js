import React from 'react'
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'reactstrap'
import { LinkButton } from 'components'

const NotFoundCard = ({ type }) => (
  <div>
    <Card block inverse color="danger">
      <CardTitle>{type} Not Found</CardTitle>
      <CardText>No {type.toLowerCase()} with that id was found.</CardText>
      <LinkButton to={`/${type.toLowerCase()}s`}>
        See list of all {type.toLowerCase()}s
      </LinkButton>
    </Card>
  </div>
)

NotFoundCard.propTypes = {
  type: PropTypes.string.isRequired,
}

export default NotFoundCard
