import { expect } from 'chai'
import { fromJS } from 'immutable'
import {
  projectsSelector,
  projectSelector,
  loadingSelector,
  errorSelector,
} from 'modules/projects'

describe('projects selectors', () => {
  it('projectsSelector returns all projects', () => {
    const state = fromJS({
      projects: {
        ids: [1],
        byId: {
          1: {
            id: 1,
            summary: "This is a summary!",
            description: "This is a description!"
          }
        }
      }
    })
    const expected = fromJS([
      {
        id: 1,
        summary: "This is a summary!",
        description: "This is a description!"
      }
    ])

    expect(projectsSelector(state)).to.eq(expected)
  })

  it('projectSelector returns a project', () => {
    const state = fromJS({
      projects: {
        ids: [1],
        byId: {
          1: {
            id: 1,
            summary: "This is a summary!",
            description: "This is a description!"
          }
        }
      }
    })
    const expected = fromJS({
      id: 1,
      summary: "This is a summary!",
      description: "This is a description!"
    })

    expect(projectSelector(state, 1)).to.deep.eq(expected)
  })

  it('loadingSelector returns the loading status', () => {
    const state = fromJS({
      projects: {
        loading: true
      }
    })
    const expected = true

    expect(loadingSelector(state)).to.eq(expected)
  })

  it('errorSelector returns the error status', () => {
    const state = fromJS({
      projects: {
        error: 'This is an error!'
      }
    })
    const expected = 'This is an error!'

    expect(errorSelector(state)).to.eq(expected)
  })
})
