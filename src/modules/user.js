import { createReducer, createActions } from 'reduxsauce';
import { mergeWith } from 'ramda';
import Immutable from 'seamless-immutable';
import deepMerge from 'util-deep-merge';

/* TYPES AND ACTION CREATORS */

const { Types: types, Creators: creators } = createActions(
  {
    fetchRequest: ['payload'],
    fetchSuccess: ['response'],
    fetchFailure: ['error'],
    createRequest: ['payload'],
    createSuccess: ['response'],
    createFailure: ['error'],
    updateRequest: ['payload'],
    updateSuccess: ['response'],
    updateFailure: ['error'],
    deleteRequest: ['username'],
    deleteSuccess: ['username'],
    deleteFailure: ['error'],
  },
  { prefix: 'USER_' },
);

export const userTypes = types;
export default creators;

/* INITIAL STATE */

export const INITIAL_STATE = Immutable({
  byUsername: {},
  usernames: [],
  error: null,
  fetching: false,
});

/* REDUCERS */

export const request = state =>
  state.merge({
    fetching: true,
    error: null,
  });

export const success = (state, { response }) =>
  Immutable(
    mergeWith(deepMerge, state, {
      fetching: false,
      error: null,
      usernames: response.keys,
      byUsername: response.entities,
    }),
  );

export const failure = (state, { error }) =>
  state.merge({ fetching: false, error });

export const remove = (state, { username }) =>
  state.merge({
    fetching: false,
    error: null,
    usernames: state.usernames.filter(u => u !== username),
    byUsername: state.byUsername.without(username),
  });

/* HOOKUP REDUCERS TO TYPES */

export const reducer = createReducer(INITIAL_STATE, {
  [types.FETCH_REQUEST]: request,
  [types.FETCH_SUCCESS]: success,
  [types.FETCH_FAILURE]: failure,

  [types.CREATE_REQUEST]: request,
  [types.CREATE_SUCCESS]: success,
  [types.CREATE_FAILURE]: failure,

  [types.UPDATE_REQUEST]: request,
  [types.UPDATE_SUCCESS]: success,
  [types.UPDATE_FAILURE]: failure,

  [types.DELETE_REQUEST]: request,
  [types.DELETE_SUCCESS]: remove,
  [types.DELETE_FAILURE]: failure,
});

/* SELECTORS */

export const user = (state, username) => state.data.users.byUsername[username];

export const users = (state, usernames) => {
  let stateUsernames = state.data.users.usernames;

  if (usernames) {
    stateUsernames = stateUsernames.filter(u => usernames.includes(u));
  }

  return stateUsernames.map(u => user(state, u)) || [];
};

export const fetching = state => state.data.users.fetching;

export const error = state => state.data.users.error;
