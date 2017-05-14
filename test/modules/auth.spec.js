import actions, {
  reducer,
  INITIAL_STATE,
  isLoggedIn,
  currentUser,
  fetching,
  error,
} from 'modules/auth';

describe('Auth - ', () => {
  describe('reducers', () => {
    it('request', () => {
      const startingState = INITIAL_STATE.merge({
        error: 'Error',
      });
      const state = reducer(startingState, actions.loginRequest());

      expect(state.fetching).toBe(true);
      expect(state.error).toBeNull();
    });

    it('success', () => {
      const user = {
        id: 0,
        username: 'user0',
      };
      const state = reducer(INITIAL_STATE, actions.loginSuccess(user));

      expect(state.fetching).toBe(false);
      expect(state.error).toBeNull();
      expect(state.currentUser).toEqual(user);
    });

    it('failure', () => {
      const state = reducer(
        INITIAL_STATE,
        actions.loginFailure({ response: 'Error' }),
      );

      expect(state.fetching).toBe(false);
      expect(state.error).toEqual('Error');
    });

    it('logout', () => {
      const startingState = INITIAL_STATE.merge({
        fetching: true,
        error: 'Error',
        currentUser: 'user0',
      });
      const state = reducer(startingState, actions.logout());

      expect(state.fetching).toBe(false);
      expect(state.error).toBeNull();
      expect(state.currentUser).toBeNull();
    });
  });

  describe('selectors', () => {
    const state = {
      fetching: true,
      error: 'Error',
      currentUser: 'user0',
    };

    it('isLoggedIn', () => {
      expect(isLoggedIn(state)).toBe(true);
    });

    it('currentUser', () => {
      expect(currentUser(state)).toEqual('user0');
    });

    it('fetching', () => {
      expect(fetching(state)).toBe(true);
    });

    it('error', () => {
      expect(error(state)).toEqual('Error');
    });
  });
});
