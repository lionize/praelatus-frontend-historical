import { normalize, arrayOf } from 'normalizr-immutable'
import formatDataResponse from 'utils/format-data-response'
import * as schema from 'schema'
import types from 'types/data'

export const fetchDataSuccess = (response, type) => ({
  type: types.FETCH_DATA_SUCCESS,
  response: formatDataResponse(normalize(response, arrayOf(schema[type]))),
})
