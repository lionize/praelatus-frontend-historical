const fakeDB = {
  tickets: [
    {
      id: 1425,
      description: "When testing the component XXX123, I am unable to get it to render when it is missing a non-required parameter. If I don't pass the 'foo' param, it errors out.",
      summary: "Component XXX123 not rendering without 'foo' param",
    },
    {
      id: 2421,
      description: 'I am loading the app on my old Nokia brickphone and the application is very slow to move between pages. Just getting to this page so I could write this took me 5 minutes!',
      summary: 'Tessera slow on mobile',
    },
  ],
}

const respondWith = info => Promise.resolve({
  body: info
})

const fetchTickets = () => respondWith(fakeDB.tickets)

export default {
  fetchTickets,
}
