# Table of Contents
1. [Introduction](#introduction)
2. [State Management](#state)
  - [Reducers](#reducers)
  - [Action Creators](#actions)
  - [Types](#types)
  - [Sagas](#sagas)
  - [Normalizing Server Responses](#normalizr)


## <a name="introduction">Introduction</a>

This document exists to give a basic rundown on how the system is built and interacts with itself.


## <a name="state">State Management</a>

The Redux store is the central source of truth for the entire application. The store is an object that holds the state and handles action dispatching. 

Ineracting with the system works in a simple way: an action is dispatched to the store, which passes it to the central reducer. The central reducer is composed of many reducers, which may themselves be composed of many reducers. The central reducer receives the state and the action from the store, and then passes to each component reducer its piece of the state and the action. The component reducer decides how to update its piece of the state (if at all) based on the contents of the action it is passed, and then returns its new state. The central reducer combines all of the returned state pieces into a new state object, and that is the next step of the state.

### <a name="reducers">Reducers</a>

The reducers are functions that make up the shape of the state. They are found inside modules, e.g. `src/modules/teams/reducers.js`.

Here's a basic example:

```javascript
// src/modules/tickets/reducers.js

const tickets = (state = Map(), action) {
  switch(action.type) {
    case 'FETCH_TICKETS_SUCCESS':
      return state.merge(action.tickets)
    default:
      return state
  }
}

export default combineReducers({
  tickets,
})
```

The shape of the state based on this single reducer is a Map with a single key: tickets. When an action is dispatched to the reducer, if the action has a type of 'FETCH_TICKETS_SUCCESS', the reducer merges its current map with the action's tickets field (we assume for this example that the tickets field is a Map of tickets). If the action has any other type, it simply returns its current state.

If we were to look at the state object with this being the only reducer, it would look something like this:

```javascript
Map {
  'tickets': {
    '1': {
      id: 1,
      description: 'Ticket description',
      summary: 'Ticket summary',
    }
  }
}
```

As you can see, the reducer's name is used as the name for its piece of state.

Adding another reducer named *teams* to the combineReducers call would change the state to look something like this:

```javascript
Map {
  'tickets': {
    // tickets
  },
  'teams': {
    // teams
  }
}
```

If we wanted the *tickets* part of the state to include more fields, we would simply combine other reducers, and then change the tickets field in combineReducers to be itself a combineReducers call of its component reducers.

For a better look at how that might work, check out `src/modules/tickets/reducers.js`, which exports many combined reducers, which is then itself combined with other reducers in `src/modules/index.js`.

### <a name="actions">Action Creators</a>

Another important part of the system are the action creators. They are found inside modules, e.g. `src/modules/teams/actions.js`.

Action creators are functions which take arguments and return an object which is then dispatched to the store to be passed to reducers. These can contain any amount of information that the reducers might want to gain from the action.

Here's simple example:

```javascript
// src/modules/tickets/actions.js

const fetchTicketsRequest = () => ({
  type: types.FETCH_TICKETS_REQUEST,
})

// src/modules/tickets/reducers.js

const loading = (state = false, action) => {
  switch (action.type) {
    case FETCH_TICKETS_REQUEST:
      return true
    default:
      return state
  }
}
```

fetchTicketsRequest simply returns an object with a type field. This serves as a way to notify reducers of an action occurring without passing them any information that they might use to interact with.

For example, the loading reducer would take this action and sets its state to true. That way, when the system dispatches a fetchTicketsRequest action, the state now reflects that it is attempting to load tickets.

A more complex example: 

```javascript
// src/modules/tickets/actions.js

const fetchTicketsSuccess = response => ({
  type: types.FETCH_TICKETS_SUCCESS,
  response: normalize(response, arrayOf(schema.ticket), {}),
})

// src/modules/tickets/reducers.js

const ids = (state = List(), action) => {
  switch (action.type) {
    case types.FETCH_TICKETS_SUCCESS:
      return List(action.response.result)
    default:
      return state
  }
}
```

In this example, fetchTicketsSuccess is created using a response (probably from the server). The return action has a type field as well as a response field, which contains a normalized version of the server response (see [normalizr](#normalizr) for more information).

The ids reducer would then take this action and, seeing that the type of the action is FETCH_TICKET_SUCCESS, update its state to be a List of the ids returned from the server.

### <a name="types">Types</a>

### <a name="sagas">Sagas</a>

### <a name="normalizr">Normalizing Server Responses</a>
