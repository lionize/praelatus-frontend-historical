import React from 'react'
import { Button, Card, CardBlock, CardTitle, CardText } from 'reactstrap'
import NotFoundCard from 'components/NotFoundCard'
import ErrorCard from 'components/ErrorCard'

const Project = ({ project, lead, error }) => {
  if (project) {
    return (
      <div>
        <Card>
          <CardBlock>
            <CardTitle>{project.name}</CardTitle>
            <CardText>key: {project.key}</CardText>
            <CardText>homepage: {project.homepage}</CardText>
          </CardBlock>
        </Card>
      </div>
    )
  } else {
    if (error) {
      return <ErrorCard error={error} />
    } else {
      return <NotFoundCard type="Project" />
    }
  }
}

export default Project
