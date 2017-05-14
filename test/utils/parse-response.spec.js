import parseResponse from 'utils/parse-response';

describe('parseResponse', () => {
  describe('with array', () => {
    const response = [
      {
        id: 0,
        key: 'TICKET-0',
        summary: 'Summary',
        description: 'Description',
        reporter: {
          id: 0,
          username: 'User-0',
        },
      },
      {
        id: 1,
        key: 'TICKET-1',
        summary: 'Summary',
        description: 'Description',
        reporter: {
          id: 0,
          username: 'User-0',
        },
        assignee: {
          id: 1,
          username: 'User-1',
        },
      },
    ];

    it('returns the keys as a list', () => {
      const keys = parseResponse(response, 'key').keys;

      expect(keys).toEqual(expect.arrayContaining(['TICKET-0', 'TICKET-1']));
    });

    it('returns the entities as an object with entity keys as keys', () => {
      const entities = parseResponse(response, 'key').entities;

      expect(entities['TICKET-0']).toEqual(response[0]);
      expect(entities['TICKET-1']).toEqual(response[1]);
    });
  });

  describe('with object', () => {
    const response = {
      id: 0,
      key: 'TICKET-0',
      reporter: {
        id: 0,
        username: 'user0',
      },
    };

    it('returns the key in an array', () => {
      const key = parseResponse(response, 'key').keys;

      expect(key).toEqual(expect.arrayContaining(['TICKET-0']));
    });

    it('returns the entitity in entities', () => {
      const entities = parseResponse(response, 'key').entities;

      expect(entities['TICKET-0']).toEqual(response);
    });
  });
});
