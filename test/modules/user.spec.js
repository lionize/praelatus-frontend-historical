import actions, {
  reducer,
  INITIAL_STATE,
  user,
  users,
  fetching,
  error,
} from 'modules/user';

describe('User - ', () => {
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
        keys: ['user0'],
        entities: {
          user0: {
            id: 0,
            username: 'user0',
          },
        },
      };
      const state = reducer(INITIAL_STATE, actions.fetchSuccess(data));
      expect(state.fetching).toBe(false);
      expect(state.error).toBeNull();
      expect(state.usernames).toContain('user0');
      expect(state.byUsername['user0']).toEqual(data.entities.user0);
    });

    it('failure', () => {
      const state = reducer(INITIAL_STATE, actions.updateFailure('Error'));

      expect(state.fetching).toBe(false);
      expect(state.error).toEqual('Error');
    });

    it('remove', () => {
      const startingState = INITIAL_STATE.merge({
        usernames: ['user0'],
        byKey: { user0: { username: 'user0' } },
        fetching: true,
        error: 'Error',
      });
      const state = reducer(startingState, actions.deleteSuccess('user0'));

      expect(state.error).toBeNull();
      expect(state.fetching).toBe(false);
      expect(state.usernames).not.toContain('user0');
      expect(state.byUsername).not.toHaveProperty('user0');
    });
  });

  describe('selectors', () => {
    const state = {
      data: {
        users: {
          usernames: ['user0', 'user1'],
          byUsername: {
            user0: {
              id: 0,
              username: 'user0',
            },
            user1: {
              id: 1,
              username: 'user1',
            },
          },
          fetching: true,
          error: 'Error',
        },
      },
    };

    it('user', () => {
      expect(user(state, 'user0')).toEqual(
        state.data.users.byUsername['user0'],
      );
    });

    it('users', () => {
      const expected = [
        state.data.users.byUsername['user0'],
        state.data.users.byUsername['user1'],
      ];
      expect(users(state, ['user0', 'user1'])).toEqual(expected);
    });

    it('fetching', () => {
      expect(fetching(state)).toBe(true);
    });

    it('error', () => {
      expect(error(state)).toEqual('Error');
    });
  });
});
