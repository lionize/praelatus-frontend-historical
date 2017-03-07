import React from 'react'
import { Table } from 'reactstrap'
import { ProjectLink, UserLink } from 'components'

const ProjectTable = ({ projects }) => (
  <div>
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Key</th>
          <th>Lead</th>
          <th>Created Date</th>
          <th>Homepage</th>
          <th>Repo</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, i) =>
          <tr key={i}>
            <td>
              <ProjectLink project={project}>{project.name}</ProjectLink>
            </td>
            <td>
              <ProjectLink project={project}>{project.key}</ProjectLink>
            </td>
            <td>
              {project.lead &&
                <UserLink user={project.lead}>{project.lead.username}</UserLink>
              }
            </td>
            <td>{project.createdDate}</td>
            <td>{project.homepage}</td>
            <td>{project.repo}</td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
)

export default ProjectTable
