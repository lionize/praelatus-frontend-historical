import { normalize, arrayOf } from 'normalizr-immutable'
import { Map, List } from 'immutable'
import * as schema from 'schema'
import types from 'types/data'

export const fetchDataSuccess = (response, type) => ({
  type: types.FETCH_DATA_SUCCESS,
  response: formatResponse(normalize(response, arrayOf(schema[type]))),
})

export const formatResponse = data => {
  return Map({
    entities: data.get('entities'),
    result: data.get('entities')._keys.reduce((acc, key) => {
      return acc.set(key, List(data.getIn(['entities', key])._keys.map(key => parseInt(key))))
    }, Map({}))
  })
}
