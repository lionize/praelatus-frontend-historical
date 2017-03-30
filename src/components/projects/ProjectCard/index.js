import React from 'react'
import { Card, CardBlock, CardTitle, CardText } from 'reactstrap'
import { ProjectDeleteButton, LinkButton, UserLink, NotFoundCard, ErrorCard } from 'components'

const ProjectCard = ({ project, error, loading }) => {
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (project) {
    return (
      <div>
        <Card>
          <CardBlock>
            <CardTitle>{project.name}</CardTitle>
            <CardText>key: {project.key}</CardText>
            <CardText>homepage: {project.homepage}</CardText>
            {project.lead &&
              <CardText>
                Lead: <UserLink user={project.lead}>{project.lead.username}</UserLink>
              </CardText>
            }
            <LinkButton to={`/projects/${project.key}/edit`}>Edit</LinkButton>
            <ProjectDeleteButton project={project} />
          </CardBlock>
        </Card>
      </div>
    )
  }

  return error
    ? <ErrorCard error={error} />
    : <NotFoundCard type="Project" />
}

export default ProjectCard
