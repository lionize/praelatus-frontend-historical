import { expect } from 'chai'
import { fromJS } from 'immutable'
import {
  projectsSelector,
  projectSelector,
  loadingSelector,
  errorSelector,
} from 'selectors/projects'

describe('projects selectors', () => {
  const baseState = fromJS({
    data: {
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
    }
  })
  it('projectsSelector returns all projects', () => {
    const expected = fromJS([
      {
        id: 1,
        summary: "This is a summary!",
        description: "This is a description!"
      }
    ])

    expect(projectsSelector(baseState)).to.eq(expected)
  })

  it('projectSelector returns a project', () => {
    const expected = fromJS({
      id: 1,
      summary: "This is a summary!",
      description: "This is a description!"
    })

    expect(projectSelector(baseState, 1)).to.deep.eq(expected)
  })

  it('loadingSelector returns the loading status', () => {
    const state = fromJS(
      baseState.setIn(['data', 'projects', 'loading'], true)
    )
    const expected = true

    expect(loadingSelector(state)).to.eq(expected)
  })

  it('errorSelector returns the error status', () => {
    const state = fromJS(
      baseState.setIn(['data', 'projects', 'error'], 'This is an error!')
    )
    const expected = 'This is an error!'

    expect(errorSelector(state)).to.eq(expected)
  })
})
