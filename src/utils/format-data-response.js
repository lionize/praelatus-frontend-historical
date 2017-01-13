import { Map, List, Record } from 'immutable'

const responseRecord = Record({ entities: null, result: null })

const formatDataResponse = (data) => {
  return new responseRecord({
    entities: data.get('entities'),
    result: data.get('entities')._keys.reduce((acc, key) => {
      return acc.set(key, List(data.getIn(['entities', key])._keys.map(entityKey => parseInt(entityKey))))
    }, Map({})),
  })
}

export default formatDataResponse
