import actions, {
  reducer,
  INITIAL_STATE,
  team,
  teams,
  fetching,
  error,
} from 'modules/team';

describe('Team - ', () => {
  describe('reducers', () => {
    it('request', () => {
      const startingState = INITIAL_STATE.merge({
        error: 'Error',
      });
      const state = reducer(startingState, actions.fetchRequest());

      expect(state.fetching).toBe(true);
      expect(state.error).toBeNull();
    });

    it('success', () => {
      const data = {
        keys: ['team0', 'team1'],
        entities: {
          team0: {
            id: 0,
            name: 'team0',
          },
          team1: {
            id: 1,
            name: 'team1',
          },
        },
      };
      const state = reducer(INITIAL_STATE, actions.fetchSuccess(data));

      expect(state.fetching).toBe(false);
      expect(state.error).toBeNull();
      expect(state.names).toContain('team0');
      expect(state.byName['team0']).toEqual(data.entities.team0);
    });

    it('failure', () => {
      const state = reducer(INITIAL_STATE, actions.updateFailure('Error'));

      expect(state.fetching).toBe(false);
      expect(state.error).toEqual('Error');
    });

    it('remove', () => {
      const startingState = INITIAL_STATE.merge({
        names: ['team0'],
        byName: { team0: { name: 'team0' } },
        fetching: true,
        error: 'Error',
      });
      const state = reducer(startingState, actions.deleteSuccess('team0'));

      expect(state.error).toBeNull();
      expect(state.fetching).toBe(false);
      expect(state.names).not.toContain('team0');
      expect(state.byName).not.toHaveProperty('team0');
    });
  });

  describe('selectors', () => {
    const state = {
      data: {
        teams: {
          names: ['team0', 'team1'],
          byName: {
            team0: {
              id: 0,
              name: 'team0',
            },
            team1: {
              id: 1,
              name: 'team1',
            },
          },
          fetching: true,
          error: 'Error',
        },
      },
    };

    it('team', () => {
      expect(team(state, 'team0')).toEqual(state.data.teams.byName['team0']);
    });

    it('teams', () => {
      const expected = [
        state.data.teams.byName['team0'],
        state.data.teams.byName['team1'],
      ];
      expect(teams(state, ['team0', 'team1'])).toEqual(expected);
    });

    it('fetching', () => {
      expect(fetching(state)).toBe(true);
    });

    it('error', () => {
      expect(error(state)).toEqual('Error');
    });
  });
});
