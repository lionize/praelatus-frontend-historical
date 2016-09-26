const fakeDatabase = {
  tickets: [
    {
      id: 0,
      summary: "This is just a summary",
      description: "This description is much longer than the summary provided above."
    }
  ]
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchTickets = () =>
  delay(50).then(() => {
    return fakeDatabase.tickets
  })
