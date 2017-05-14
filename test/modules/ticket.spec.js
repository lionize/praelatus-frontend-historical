import actions, {
  reducer,
  INITIAL_STATE,
  ticket,
  tickets,
  fetching,
  error,
} from 'modules/ticket';

describe('Ticket - ', () => {
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
        keys: ['TICKET-0'],
        entities: {
          'TICKET-0': {
            id: 0,
            key: 'TICKET-0',
          },
        },
      };
      const state = reducer(INITIAL_STATE, actions.fetchSuccess(data));

      expect(state.fetching).toBe(false);
      expect(state.error).toBeNull();
      expect(state.keys).toContain('TICKET-0');
      expect(state.byKey['TICKET-0']).toEqual(data.entities['TICKET-0']);
    });

    it('failure', () => {
      const state = reducer(INITIAL_STATE, actions.updateFailure('Error'));

      expect(state.fetching).toBe(false);
      expect(state.error).toEqual('Error');
    });

    it('remove', () => {
      const startingState = INITIAL_STATE.merge({
        keys: ['KEY-0'],
        byKey: { 'KEY-0': { key: 'KEY-0' } },
        fetching: true,
        error: 'Error',
      });
      const state = reducer(startingState, actions.deleteSuccess('KEY-0'));

      expect(state.error).toBeNull();
      expect(state.fetching).toBe(false);
      expect(state.keys).not.toContain('KEY-0');
      expect(state.byKey).not.toHaveProperty('KEY-0');
    });
  });

  describe('selectors', () => {
    const state = {
      data: {
        tickets: {
          keys: ['TICKET-0', 'TICKET-1'],
          byKey: {
            'TICKET-0': {
              id: 0,
              key: 'TICKET-0',
            },
            'TICKET-1': {
              id: 1,
              key: 'TICKET-1',
            },
          },
          fetching: true,
          error: 'Error',
        },
      },
    };

    it('ticket', () => {
      expect(ticket(state, 'TICKET-0')).toEqual(
        state.data.tickets.byKey['TICKET-0'],
      );
    });

    it('tickets', () => {
      const expected = [
        state.data.tickets.byKey['TICKET-0'],
        state.data.tickets.byKey['TICKET-1'],
      ];
      expect(tickets(state, ['TICKET-0', 'TICKET-1'])).toEqual(expected);
    });

    it('fetching', () => {
      expect(fetching(state)).toBe(true);
    });

    it('error', () => {
      expect(error(state)).toEqual('Error');
    });
  });
});
