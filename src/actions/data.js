import { normalize, arrayOf } from 'normalizr-immutable'
import * as schema from 'schema'
import types from 'types/data'

export const fetchDataSuccess = (response, type) => ({
  type: types.FETCH_DATA_SUCCESS,
  response: normalize(response, arrayOf(schema[type])),
  responseType: type,
})
