export default function parseResponse(response, key) {
  if (!Array.isArray(response)) {
    return {
      keys: [ response[key] ],
      entities: {
        [response[key]]: response
      }
    }
  }

  const keys = response.map(item => item[key])
  const entities = response.reduce((acc, item) => {
    acc[item[key]] = item
    return acc
  }, {})

  return {
    keys,
    entities,
  }
}
