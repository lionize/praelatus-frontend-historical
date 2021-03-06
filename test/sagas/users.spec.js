import { put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'modules/user';
import {
  fetchUser,
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
} from 'sagas/users';

const users = [
  {
    id: 0,
    username: 'user0',
  },
];

const api = {
  fetchUser() {},
  fetchUsers() {},
  createUser() {},
  updateUser() {},
  deleteUser() {},
};

describe('User - Sagas', () => {
  describe('fetchUser', () => {
    it('success', () => {
      const generator = fetchUser(api, { username: 'user0' });

      expect(generator.next().value).toEqual(call(api.fetchUser, 'user0'));

      const response = {
        result: ['user0'],
        entities: {
          users: {
            user0: users[0],
          },
        },
      };

      const next = generator.next(response).value;
      const expected = put(actions.fetchSuccess(response));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });

    it('failure', () => {
      const generator = fetchUser(api, { username: 'user0' });
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

  describe('fetchUsers', () => {
    it('success', () => {
      const generator = fetchUsers(api);

      expect(generator.next().value).toEqual(call(api.fetchUsers));

      const response = {
        result: ['user0'],
        entities: {
          users: {
            user0: users[0],
          },
        },
      };

      const next = generator.next(response).value;
      const expected = put(actions.fetchSuccess(response));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });

    it('failure', () => {
      const generator = fetchUsers(api);
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

  describe('createUser', () => {
    it('success', () => {
      const generator = createUser(api, { payload: users[0] });

      expect(generator.next().value).toEqual(call(api.createUser, users[0]));

      const response = {
        result: ['user0'],
        entities: {
          users: {
            user0: users[0],
          },
        },
      };

      let next = generator.next(response).value;
      let expected = put(actions.createSuccess(response));

      expect(next).toEqual(expected);

      next = generator.next().value;
      expected = put(push(`/users/${users[0].username}`));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });

    it('failure', () => {
      const generator = createUser(api, { payload: users[0] });
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

  describe('updateUser', () => {
    it('success', () => {
      const generator = updateUser(api, { payload: users[0] });

      expect(generator.next().value).toEqual(call(api.updateUser, users[0]));

      const response = {
        keys: ['user0'],
        entities: {
          user0: users[0],
        },
      };

      let next = generator.next(response).value;
      let expected = put(actions.updateSuccess(response));

      expect(next).toEqual(expected);

      next = generator.next().value;
      expected = put(push(`/users/${users[0].username}`));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });

    it('failure', () => {
      const generator = updateUser(api, { payload: users[0] });
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

  describe('deleteUser', () => {
    it('success', () => {
      const generator = deleteUser(api, { username: 'user0' });

      expect(generator.next().value).toEqual(call(api.deleteUser, 'user0'));

      const response = { username: 'user0' };

      let next = generator.next(response).value;
      let expected = put(actions.deleteSuccess(response));

      expect(next).toEqual(expected);

      next = generator.next().value;
      expected = put(push('/users'));

      expect(next).toEqual(expected);
      expect(generator.next().done).toBe(true);
    });

    it('failure', () => {
      const generator = deleteUser(api, { key: 'TICKET-0' });
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
