import { put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'modules/team';
import {
  fetchTeam,
  fetchTeams,
  createTeam,
  updateTeam,
  deleteTeam,
} from 'sagas/teams';

const teams = [
  {
    id: 0,
    name: 'BEST TEAM',
  },
];

const api = {
  fetchTeam() {},
  fetchTeams() {},
  createTeam() {},
  updateTeam() {},
  deleteTeam() {},
};

describe('Team - Sagas', () => {
  describe('fetchTeam', () => {
    it('success', () => {
      const generator = fetchTeam(api, { name: 'BEST TEAM' });

      expect(generator.next().value).toEqual(call(api.fetchTeam, 'BEST TEAM'));

      const response = {
        result: ['BEST TEAM'],
        entities: {
          teams: {
            'BEST TEAM': teams[0],
          },
        },
      };

      const next = generator.next(response).value;
      const expected = put(actions.fetchSuccess(response));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });

    it('failure', () => {
      const generator = fetchTeam(api, { name: 'BEST TEAM' });
      generator.next();

      const error = {
        message: 'Error!',
      };

      const next = generator.throw(error).value;
      const expected = put(actions.fetchFailure(error));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });
  });

  describe('fetchTeams', () => {
    it('success', () => {
      const generator = fetchTeams(api);

      expect(generator.next().value).toEqual(call(api.fetchTeams));

      const response = {
        result: ['BEST TEAM'],
        entities: {
          teams: {
            'BEST TEAM': teams[0],
          },
        },
      };

      const next = generator.next(response).value;
      const expected = put(actions.fetchSuccess(response));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });

    it('failure', () => {
      const generator = fetchTeams(api);
      generator.next();

      const error = {
        message: 'Error!',
      };

      const next = generator.throw(error).value;
      const expected = put(actions.fetchFailure(error));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });
  });

  describe('createTeam', () => {
    it('success', () => {
      const generator = createTeam(api, { payload: teams[0] });

      expect(generator.next().value).toEqual(call(api.createTeam, teams[0]));

      const response = {
        keys: ['BEST TEAM'],
        entities: {
          'BEST TEAM': teams[0],
        },
      };

      let next = generator.next(response).value;
      let expected = put(actions.createSuccess(response));

      expect(next).toEqual(expected);

      next = generator.next().value;
      expected = put(push(`/teams/${teams[0].name}`));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });

    it('failure', () => {
      const generator = createTeam(api, { payload: teams[0] });
      generator.next();

      const error = {
        message: 'Error!',
      };

      const next = generator.throw(error).value;
      const expected = put(actions.createFailure(error));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });
  });

  describe('updateTeam', () => {
    it('success', () => {
      const generator = updateTeam(api, { payload: teams[0] });

      expect(generator.next().value).toEqual(call(api.updateTeam, teams[0]));

      const response = {
        result: ['BEST TEAM'],
        entities: {
          teams: {
            'BEST TEAM': teams[0],
          },
        },
      };

      let next = generator.next(response).value;
      let expected = put(actions.updateSuccess(response));

      expect(next).toEqual(expected);

      next = generator.next().value;
      expected = put(push(`/teams/${teams[0].name}`));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });

    it('failure', () => {
      const generator = updateTeam(api, { payload: teams[0] });
      generator.next();

      const error = {
        message: 'Error!',
      };

      const next = generator.throw(error).value;
      const expected = put(actions.updateFailure(error));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });
  });

  describe('deleteTeam', () => {
    it('success', () => {
      const generator = deleteTeam(api, { name: 'BEST TEAM' });

      expect(generator.next().value).toEqual(call(api.deleteTeam, 'BEST TEAM'));

      const response = { name: 'BEST TEAM' };

      let next = generator.next(response).value;
      let expected = put(actions.deleteSuccess(response));

      expect(next).toEqual(expected);

      next = generator.next().value;
      expected = put(push('/teams'));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });

    it('failure', () => {
      const generator = deleteTeam(api, { key: 'TICKET-0' });
      generator.next();

      const error = {
        message: 'Error!',
      };

      const next = generator.throw(error).value;
      const expected = put(actions.deleteFailure(error));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });
  });
});
