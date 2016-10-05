import fetch from 'isomorphic-fetch'

const URL = 'http://localhost:8080/api/v1'

const fakeDB = {
  tickets: [ 
    {
      id: 1,
      description: "This is a description for ticket 1",
      summary: "Ticket 1",
    },
    {
      id: 2,
      description: "This is a description for ticket 2",
      summary: "Ticket 2"
    }
  ]
}

const respondWith = (info) => Promise.resolve({
    json() {
      return Promise.resolve({body: info})
    }
})

export const fetchTickets = () => respondWith(fakeDB.tickets)
