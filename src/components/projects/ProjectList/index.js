import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { ProjectLink, UserLink } from 'components';
import actions, { projects } from 'modules/project';

export const ProjectTable = ({ projects: projectList }) => (
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
        {projectList.map(project => (
          <tr key={project.id}>
            <td>
              <ProjectLink project={project}>{project.name}</ProjectLink>
            </td>
            <td>
              <ProjectLink project={project}>{project.key}</ProjectLink>
            </td>
            <td>
              {project.lead &&
                <UserLink user={project.lead}>
                  {project.lead.username}
                </UserLink>}
            </td>
            <td>{project.createdDate}</td>
            <td>{project.homepage}</td>
            <td>{project.repo}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

ProjectTable.propTypes = {
  projects: PropTypes.array.isRequired,
};

class ProjectList extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    loadProjects: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.loadProjects();
  }

  render() {
    const { projects: projectsProp } = this.props;
    return <ProjectTable projects={projectsProp} />;
  }
}

export { ProjectList };

const mapStateToProps = state => ({
  projects: projects(state),
});

export default connect(mapStateToProps, { loadProjects: actions.fetchRequest })(
  ProjectList,
);
