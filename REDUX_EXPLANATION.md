# Redux Explanation

## Table of Contents
- [Introduction](#introduction)
- [State Management](#state-management)
  - [Reducers](#reducers)
  - [Action Creators](#action-creators)
  - [Types](#types)
  - [Sagas](#sagas)
- [How-To](#how-to)
  - [Normalizing Server Responses](#normalizing-server-responses)
- [Create a Module Step by Step](#create-a-module-step-by-step)
	- [Normalize the Server Responses](#normalize-the-server-responses)
	- [Tell a Story With Sagas](#tell-a-story-with-sagas)

## Introduction

This document gives a basic rundown of the system and how it interacts with itself and outside sources.

## State Management

The Redux store is the central source of truth for the entire application. The store is an object that holds the state and handles action dispatching. 

Ineracting with the system works in a simple way: an action is dispatched to the store, which passes it to the central reducer. The central reducer is composed of many reducers, which may themselves be composed of many reducers. The central reducer receives the state and the action from the store, and then passes to each component reducer its piece of the state and the action. The component reducer decides how to update its piece of the state (if at all) based on the contents of the action it is passed, and then returns its new state. The central reducer combines all of the returned state pieces into a new state object, and that is the next step of the state.

### Reducers

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

The shape of the state based on this single reducer is a Map with a single key: tickets. When an action is dispatched to the reducer, if the action has a type of `FETCH_TICKETS_SUCCESS`, the reducer merges its current map with the action's tickets field (we assume for this example that the tickets field is a Map of tickets). If the action has any other type, it simply returns its current state.

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

If we wanted the *tickets* part of the state to include more fields, we would simply combine other reducers, and then change the tickets field in combineReducers to be itself a `combineReducers` call of its component reducers.

For a better look at how that might work, check out `src/modules/tickets/reducers.js`, which exports many combined reducers, which is then itself combined with other reducers in `src/modules/index.js`.

### Action Creators

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

`fetchTicketsRequest` simply returns an object with a type field. This serves as a way to notify reducers of an action occurring without passing them any information that they might use to interact with.

For example, the loading reducer would take this action and sets its state to true. That way, when the system dispatches a `fetchTicketsRequest` action, the state now reflects that it is attempting to load tickets.

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

In this example, `fetchTicketsSuccess` is created using a response (probably from the server). The return action has a type field as well as a response field, which contains a normalized version of the server response (see [normalizr](#normalizr) for more information).

The ids reducer would then take this action and, seeing that the type of the action is `FETCH_TICKET_SUCCESS`, update its state to be a List of the ids returned from the server.

### Types

### Sagas

## How-To

### Normalizing Server Responses

## Create a Module Step by Step

This section is a live walkthrough for creating the new *projects* module. This module will manage Praelatus projects, allowing us to fetch all of the projects from the server and add them to the central store.

The first step is to decide how we want the state for this part of the store to look. Continuing the same pattern that we're currently using for tickets and teams, we'll have the projects state look like this:

```javascript
Map {
  byId: Map {
    '1': Map {
      id: 1,
      name: 'The Best Project Ever',
      description: 'The best project with the most features. A project to die for.'
    }
  },
  ids: List [ 1 ],
  error: null,
  loading: false
}
```

The byId property is a Map that contains each of the projects fetched from the server, with each key representing the id of the project. The ids property is a List that contains all of the ids currently in the project state. The error property is currently null, but will contain the error message as a string if the server returns an error. The loading property is false, but will be true when we are currently in the process of fetching projects from the server.

It's also important to see the state when it's empty, so we know the default values for each property:

```javascript
Map {
  byId: Map {},
  ids: List[],
  error: null,
  loading: false
}
```

With this information, we can start modelling our projects reducer. We'll create each of the properties with their default state, and simply have them return their piece of the state:

```javascript
// src/modules/projects/reducers.js

import { combineReducers } from 'redux-immutablejs'
import { Map, List } from 'immutable'

const byId = (state = Map(), action) => {
  return state
}

const ids = (state = List(), action) => {
  return state
}

const error = (state = null, action) => {
  return state
}

const loading = (state = false, action) => {
  return state
}

export default combineReducers({
  byId,
  ids,
  error,
  loading,
})
```

To make this easily importable from other files, we'll create an index file for the projects module:

```javascript
// src/modules/projects.js

export { default as default } from 'modules/projects/reducers'
```

Finally, to add this reducer to the base reducer, we need to modify the base `combineReducers` call:

```javascript
// src/modules/index.js

import { combineReducers } from 'redux-immutablejs'
import tickets from 'modules/tickets'
import projects from 'modules/projects'

export default combineReducers({
  tickets,
  projects,
})
```

With that change, we now have a base store that is shaped like the following:

```javascript
Map {
  tickets: Map {...}, // tickets state
  projects: Map {
    byId: Map{},
    ids: List[],
    error: null,
    loading: false
  }
}
```

We're on our way to a working projects system!

Now that we have our basic state shape, how do we actually get information into the state? For that, we will add on to our reducers, while also creating action creators and types. Let's start with the types:

```javascript
// src/modules/projects/types.js

export default {
  FETCH_PROJECTS_REQUEST: 'PROJECTS/FETCH_REQUEST',
  FETCH_PROJECTS_SUCCESS: 'PROJECTS/FETCH_SUCCESS',
  FETCH_PROJECTS_FAILURE: 'PROJECTS/FETCH_FAILURE',
}
```

Each key of the object holds a string which acts as a constant representing the type. We use types in such a way for a couple of reasons. The first is that we can use these constants elsewhere in the project and, if we decide to rename the string for whatever reason, we don't have to change that string in each file. The other reason is that these make for a nice header file, which allows us to open up the types file for the module and quickly see all of the implemented types.

Now we'll import the types into the projects index so that they are easily importable from other files:

```javascript
// src/modules/projects.js

export { default as types } from 'modules/projects/types'
```

Now we need to put these types to use. We'll start by implementing the `fetchProjectsRequest` action. We call this action whenever we begin fetching projects from the server. When this action is dispatched to the store, it filters down to each reducer and the reducer can decide whether to react to the action, or simply returns its previous state.

For the time being, this will only matter to the `loading` and `error` reducers. When the `loading` reducer receives the `fetchProjectsRequest` action, it should know to update its state to true, as we are currently loading projects. And when the `error` reducer receives the action, it should set its state to `null`, because there is no error to report yet.

Let's implement the `fetchProjectsRequest` action creator:

```javascript
// src/modules/projects/actions.js

import { types } from 'modules/projects'

const fetchProjectsRequest = () => ({
  type: types.FETCH_TEAMS_REQUEST,
})

export default {
  fetchProjectsRequest,
}
```

And we'll import the action creator into the projects index:

```javascript
// src/modules/projects.js

export { default as actions } from 'modules/projects/actions'
```

Now that we have created the type and the action creator, we need to implement them inside our `loading` and `error` reducers. To do that, we'll import the types into the reducers file, and then modify our reducers to react to that type:

```javascript
// src/modules/projects/reducers.js

import { types } from 'modules/projects'

...

const error = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_PROJECTS_REQUEST:
      return null
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_PROJECTS_REQUEST:
      return true
    default:
      return state
  }
}
```

So now both of our reducers are smart enough to know that if we are requesting projects, they should set their state to a new value, and if anything else happens, they just set their state to the previous value.

Let's move on to the failure case. We've already created the `FETCH_PROJECTS_FAILURE` type, so we'll create the action creator for it:

```javascript
// src/modules/projects/actions.js

const fetchProjectsFailure = error => ({
  type: types.FETCH_PROJECTS_FAILURE,
  message: error.message,
})

...

export default {
  fetchProjectsRequest,
  fetchProjectsFailure,
}
```

The action creator takes an error and returns an object representing the a failure to fetch projects, with the `error` key containing the error's message.

Now we need to implement this in our reducers. Since the `byIds` and `ids` states don't change if we can't find new projects, we're only modifying the `error` and `loading` reducers again:

```javascript
// src/modules/projects/reducers.js

const error = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_PROJECTS_FAILURE:
      return action.message
    case types.FETCH_PROJECTS_REQUEST:
      return null
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_PROJECTS_REQUEST:
      return true
    case types.FETCH_PROJECTS_FAILURE:
      return false
    default:
      return state
  }
}
```

We updated the `error` reducer to set its state to the error message and the `loading` reducer to be false since a failure indicates that we are no longer attempting to fetch projects.

Let's take a step back and look at the results we have so far.

If we were to dispatch the `fetchTicketsRequest` action to the store, the projects state would look like the following:

```javascript
Map {
  byId: Map{},
  ids: List[],
  error: null,
  loading: true
}
```

And if we were to dispatch the `fetchTicketsFailure` action, passing an error object of `{ message: 'We failed!' }` the state would look like this:

```javascript
Map {
  byId: Map{},
  ids: List[],
  error: 'We failed!',
  loading: false
}
```

As you can see, the reducers are smart enough to know to update themselves based on the action that is dispatched. We don't need to manually update each piece of the state–it does that automatically using the information attached to the action. Data just flows through the system without us needing to do anything other than send actions to it. Cool, right?

### Normalize the Server Responses

We can finally move on to the `FETCH_PROJECTS_SUCCESS` action, which is the meat of our data flow. But first, we need to implement a `normalizr` schema so that the system can process the information coming back from the server.

To do that, let's implement the `Project` schema:

```javascript
// src/schema.js

import { Record, List, Map } from 'immutable'
import { Schema } from 'normalizr-immutable'

const Project = new Record({
  id: null,
  name: null,
  description: null,
})

export const project = new Schema('projects', Project)
```

This creates a project schema that knows to expect values for the `id`, `name`, and `description` fields, and to default them to `null` if missing.

Now we can use the schema to create our `fetchProjectsSuccess` action creator:

```javascript
// src/modules/projects/actions.js

import { normalize, arrayOf } from 'normalizr-immutable'
import * as schema from 'schema'

...

const fetchProjectsSuccess = response => ({
  type: types.FETCH_PROJECTS_SUCCESS,
  response: normalize(response, arrayOf(schema.project), {}),
})
```

Our `fetchProjectsSuccess` action creator now takes the server response and turns a new action. The type of the action is `FETCH_PROJECTS_SUCCESS`, and the response is a normalized version of the data from the server. That field will look something like the following:

```javascript
response: Map {
  entities: Map {
    projects: Map {
      '1': Map {
        id: 1,
        name: 'The Best Project',
        description: 'The best project with the most features. A project to die for.'
      }
    }
  },
  result: List [ 1 ]
}
```

The `result` field represents all of the ids of the projects we fetched, and the `entities.projects` field is a map of all of those project objects.

### Finish the Reducers

Now that we have the normalized response in the action, we can implement the `FETCH_PROJECTS_SUCCESS` action for all of our reducers:

```javascript
// src/modules/projects/reducers.js

...

const byId = (state = Map(), action) => {
  if (action.response) {
    return state.merge(action.response.entities.projects)
  }
  
  return state
}

const ids = (state = List(), action) => {
  switch (action.type) {
    case types.FETCH_PROJECTS_SUCCESS:
      return List(action.response.result)
    default:
      return state
  }
}

const error = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_PROJECTS_FAILURE:
      return action.message
    case types.FETCH_PROJECTS_SUCCESS:
    case types.FETCH_PROJECTS_REQUEST:
      return null
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_PROJECTS_REQUEST:
      return true
    case types.FETCH_PROJECTS_SUCCESS:
    case types.FETCH_PROJECTS_FAILURE:
      return false
    default:
      return state
  }
}
```

That was a lot of changes to make at once. Let's break it down for each reducer:

```javascript
const byId = (state = Map(), action) => {
  if (action.response) {
    return state.merge(action.response.entities.projects)
  }
  
  return state
}
```

We added a check to the `byId` reducer to see if the action has a `response` field. In the case that it does, we merge anything in the `response.entities.projects` object into the current state. If it doesn't, we return the previous state. We don't do a `switch` for this reducer like the others, because we only care to take action if the action has a `response`. 

Even if the action's response is for a different module, we'll still merge whatever is in the `result.entities.projects` field into the state. If it's `null`, it won't change the previous state. This reduces unnecessarily validating the contents of the response and keeps our code a little cleaner.

```javascript
const ids = (state = List(), action) => {
  switch (action.type) {
    case types.FETCH_PROJECTS_SUCCESS:
      return List(action.response.result)
    default:
      return state
  }
}
```

The `ids` reducer checks to see if the action is `FETCH_PROJECTS_SUCCESS`. If it is, we simply replace the previous state with a new `List` of all of the ids returned from the server.

```javascript
const error = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_PROJECTS_FAILURE:
      return action.message
    case types.FETCH_PROJECTS_SUCCESS:
    case types.FETCH_PROJECTS_REQUEST:
      return null
    default:
      return state
  }
}
```

We lumped `FETCH_PROJECTS_SUCCESS` in with `FETCH_PROJECTS_REQUEST` to return null. This is because if we are requesting new projects or have successfully retrieved the projects, we have no error.

```javascript
const loading = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_PROJECTS_REQUEST:
      return true
    case types.FETCH_PROJECTS_SUCCESS:
    case types.FETCH_PROJECTS_FAILURE:
      return false
    default:
      return state
  }
}
```

Much like the `error` reducer, we simply joined `FETCH_PROJECTS_SUCCESS` with `FETCH_PROJECTS_FAILURE`, because either way, we are no longer loading projects.

### Tell a Story With Sagas

### In Review

Here are the steps to creating a new module:

1. **Plan out your state shape.** What should the keys be named? What should be the default state for each key?
2. **Create your reducer outline.** Each function should represent a key of the state. Start by having it return its previous state.
3. **Create an index file for the module.** This is where all of the other parts of the module will be imported and re-exported.
4. **Implement action types.** This is the easiest step.