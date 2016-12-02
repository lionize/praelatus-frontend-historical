import { normalize, arrayOf } from 'normalizr-immutable'
import * as schema from 'schema'
import types from 'types/data'

export const fetchDataSuccess = (response, type, singular = false) => {
  let data

  if (singular) {
    data = normalize(response, schema[type], {})
  } else {
    data = normalize(response, arrayOf(schema[type]), {})
  }

  return {
    type: types.FETCH_DATA_SUCCESS,
    response: data,
    responseType: type,
    singular,
  }
}
