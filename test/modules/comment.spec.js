import actions, {
  reducer,
  INITIAL_STATE,
  comment,
  comments,
  fetching,
  error,
} from 'modules/comment';

describe('Comment - ', () => {
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
        result: [0],
        entities: {
          comments: {
            '0': {
              id: 0,
              body: 'A Comment!',
            },
          },
        },
      };
      const state = reducer(INITIAL_STATE, actions.fetchSuccess(data));

      expect(state.fetching).toBe(false);
      expect(state.error).toBeNull();
      expect(state.ids).toContain(0);
      expect(state.byId['0']).toEqual(data.entities.comments['0']);
    });

    it('failure', () => {
      const state = reducer(INITIAL_STATE, actions.updateFailure('Error'));

      expect(state.fetching).toBe(false);
      expect(state.error).toEqual('Error');
    });

    it('remove', () => {
      const startingState = INITIAL_STATE.merge({
        ids: [0],
        byKey: { '0': { body: 'Comment' } },
        fetching: true,
        error: 'Error',
      });
      const state = reducer(startingState, actions.deleteSuccess(0));

      expect(state.error).toBeNull();
      expect(state.fetching).toBe(false);
      expect(state.ids).not.toContain(0);
      expect(state.byId).not.toHaveProperty('0');
    });
  });

  describe('selectors', () => {
    const state = {
      data: {
        comments: {
          ids: [0, 1],
          byId: {
            '0': {
              id: 0,
              body: 'comment-0',
            },
            '1': {
              id: 1,
              body: 'comment-1',
            },
          },
          fetching: true,
          error: 'Error',
        },
      },
    };

    it('comment', () => {
      expect(comment(state, 0)).toEqual(state.data.comments.byId['0']);
    });

    it('comments', () => {
      const expected = [
        state.data.comments.byId['0'],
        state.data.comments.byId['1'],
      ];
      expect(comments(state, [0, 1])).toEqual(expected);
    });

    it('fetching', () => {
      expect(fetching(state)).toBe(true);
    });

    it('error', () => {
      expect(error(state)).toEqual('Error');
    });
  });
});
