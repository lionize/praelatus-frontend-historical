import { expect } from 'chai';
import actions, {
  reducer,
  INITIAL_STATE,
  project,
  projects,
  fetching,
  error,
} from 'modules/project';

describe('Project - ', () => {
  describe('reducers', () => {
    it('request', () => {
      const startingState = INITIAL_STATE.merge({
        error: 'Error',
      });
      const state = reducer(startingState, actions.fetchRequest());

      expect(state.fetching).to.be.true;
      expect(state.error).to.be.null;
    });

    it('success', () => {
      const data = {
        keys: ['PROJECT-0'],
        entities: {
          'PROJECT-0': {
            id: 0,
            key: 'PROJECT-0',
          },
        },
      };
      const state = reducer(INITIAL_STATE, actions.fetchSuccess(data));

      expect(state.fetching).to.be.false;
      expect(state.error).to.be.null;
      expect(state.keys).to.include('PROJECT-0');
      expect(state.byKey['PROJECT-0']).to.deep.eq(data.entities['PROJECT-0']);
    });

    it('failure', () => {
      const state = reducer(INITIAL_STATE, actions.updateFailure('Error'));

      expect(state.fetching).to.be.false;
      expect(state.error).to.eq('Error');
    });

    it('remove', () => {
      const startingState = INITIAL_STATE.merge({
        keys: ['KEY-0'],
        byKey: { 'KEY-0': { key: 'KEY-0' } },
        fetching: true,
        error: 'Error',
      });
      const state = reducer(startingState, actions.deleteSuccess('KEY-0'));

      expect(state.error).to.be.null;
      expect(state.fetching).to.be.false;
      expect(state.keys).to.not.include('KEY-0');
      expect(state.byKey).to.not.have.key('KEY-0');
    });
  });

  describe('selectors', () => {
    const state = {
      data: {
        projects: {
          keys: ['PROJECT-0', 'PROJECT-1'],
          byKey: {
            'PROJECT-0': {
              id: 0,
              key: 'PROJECT-0',
            },
            'PROJECT-1': {
              id: 1,
              key: 'PROJECT-1',
            },
          },
          fetching: true,
          error: 'Error',
        },
      },
    };

    it('project', () => {
      expect(project(state, 'PROJECT-0')).to.eq(
        state.data.projects.byKey['PROJECT-0'],
      );
    });

    it('projects', () => {
      const expected = [
        state.data.projects.byKey['PROJECT-0'],
        state.data.projects.byKey['PROJECT-1'],
      ];
      expect(projects(state, ['PROJECT-0', 'PROJECT-1'])).to.deep.eq(expected);
    });

    it('fetching', () => {
      expect(fetching(state)).to.be.true;
    });

    it('error', () => {
      expect(error(state)).to.eq('Error');
    });
  });
});
