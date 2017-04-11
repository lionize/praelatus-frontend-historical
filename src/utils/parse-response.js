import { pluck, zipObj } from 'ramda';

export default function parseResponse(response, key) {
  let input = response;

  if (!(response instanceof Array)) input = [input];

  const keys = pluck(key, input);
  const entities = zipObj(keys, input);

  return {
    keys,
    entities,
  };
}
