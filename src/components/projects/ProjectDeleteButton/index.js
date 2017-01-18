import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import { connect } from 'react-redux'
import { deleteProjectRequest } from 'actions/projects'
import { DeleteButton } from 'components'

class ProjectDeleteButton extends Component {
  @autobind
  handleClick(e) {
    e.preventDefault()
    this.props.deleteProject(this.props.id)
  }

  render() {
    return <DeleteButton handleClick={this.handleClick} />
  }
}

const mapDispatchToProps = dispatch => ({
  deleteProject(id) {
    dispatch(deleteProjectRequest(id))
  },
})

ProjectDeleteButton = connect(null,
  mapDispatchToProps,
)(ProjectDeleteButton)

export default ProjectDeleteButton
