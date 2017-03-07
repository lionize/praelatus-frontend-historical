import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import { connect } from 'react-redux'
import actions from 'modules/project'
import { DeleteButton } from 'components'

class ProjectDeleteButton extends Component {
  @autobind
  handleClick(e) {
    e.preventDefault()
    this.props.deleteProject(this.props.project.key)
  }

  render() {
    return <DeleteButton handleClick={this.handleClick} />
  }
}

const mapDispatchToProps = dispatch => ({
  deleteProject(key) {
    dispatch(actions.deleteRequest(key))
  },
})

ProjectDeleteButton = connect(null,
  mapDispatchToProps,
)(ProjectDeleteButton)

export default ProjectDeleteButton
