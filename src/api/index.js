const fakeDatabase = {
	tickets: [
		{
			id: 0,
      reporterId: 1,
      assigneeId: 2,
			summary: "This is just a summary",
			description: "This description is much longer than the summary provided above."
		}
	],

	users: [
		{
			"created_at": "Tue, 30 Aug 2016 21:07:53 GMT",
			"email": "test@example.com",
			"full_name": "Test Testerson II",
			"id": 1,
			"is_admin": null,
			"updated_at": "Tue, 30 Aug 2016 21:07:53 GMT",
			"username": "testadmin"
		},
		{
			"created_at": "Tue, 30 Aug 2016 21:07:53 GMT",
			"email": "test1@example.com",
			"full_name": "Test Testerson",
			"id": 2,
			"is_admin": null,
			"updated_at": "Tue, 30 Aug 2016 21:07:53 GMT",
			"username": "test"
		}
	]
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchTickets = () =>
  delay(50).then(() => {
    return fakeDatabase.tickets
  })
