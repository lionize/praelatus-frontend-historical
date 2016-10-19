# Purpose

Having been working on this project for a little over a month, I have already seen the number of dependencies balloon significantly. For each new major piece or module added to the project, we gain another dependency or two. Things can get out of hand, and it's hard to remember what dependencies are in place and if they're useful.

This document attempts to alleviate that problem somewhat. While it's unavoidable that we use many dependencies to keep things moving, we can at least have a living document that provides a list of them and provides a short rationale for their inclusion.

# Dependencies

## [autoprefixer](https://github.com/postcss/autoprefixer)

PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.

## [css-loader](https://github.com/webpack/css-loader)

Resolves css imports in webpack. Also enables [css-modules](http://github.com/css-modules/css-modules).

## [immutable](https://github.com/facebook/immutable-js)

The central state of the application is created using immutable data structures. Manipulation of these structures always returned a NEW structure rather than mutating the old one. This is important for redux, which relies on the central state being immutable to work a lot of its magic.

```javascript
const map = Map({
  tickets: List(
    Map({id: 1, description: "Cool ticket, bro"})
  )
})
// Map { "tickets": List [ id,1, description,Cool ticket, bro ] }

console.log(map.get('tickets'))
// List [ id,1, description,Cool ticket, bro ]

const newMap = map.update('tickets', v => null)
// Map { "tickets": null }
```

## [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)

Enables the use of the `fetch` function, which calls an endpoint and returns a Promise representing the response.

```javascript
fetch('//praelatus.com/api/v1/teams')
  .then(response => {
    if (response.status >= 400) {
      throw new Error("Bad response from server")
    }
    return response.json()
  })
  .then(teams => {
    console.log(teams)
  })
```

## [lost](https://github.com/peterramsing/lost)

A PostCSS grid system. Currently only in place for future use. See [lost](https://github.com/peterramsing/lost) for more information.

## [normalizr-immutable](https://github.com/mschipperheyn/normalizr-immutable)

Allows us to normalize responses from the server. 

Before normalization:

```json
"team": {
  "id": 1,
  "name": "The A Team"
}
```

After normalization:

```javascript
const normalized = {
  entities: { // Immutable Record with keys: teams
    teams: { // Record with keys: 1
      1: { // Record with keys: id, name
        id: 1,
        name: "The A Team"
      }
    }
  },
  result: [1] // List of ids
}
```

## [postcss-loader](https://github.com/postcss/postcss-loader)

Webpack loader for PostCSS.

## [precss](https://github.com/jonathantneal/precss)

PostCSS plugin for using sass-like markup in CSS.

## [react](https://github.com/facebook/react)

Javascript library for user interfaces.

## [react-dom](https://github.com/facebook/react)

DOM module for React.

## [react-redux](https://github.com/reactjs/react-redux)

React bindings for Redux. Allows use to connect state and dispatch to component props.

```javascript
import { connect } from 'react-redux'
import { actions, itemsSelector } from 'module/items/actions'

class TestView extends React.Component {
  componentWillMount() {
    this.props.fetchItems()
  }

  render() {
    const { items } = this.props

    const itemsListItems = items.map(item =>
      <li key={item.id}>{item.id}: {item.name}</li>
    )

    return (
      <ul>
        {items}
      </ul>
    )
  }
}

export default connect((state) => ({
  items: itemsSelector(state)
}), actions)(TestView)
```

## [react-router](https://github.com/ReactTraining/react-router)

Routing library for React that allows us to use <Route /> components for route structure and <Link /> inside components to link to other components.

## [redux](https://github.com/reactjs/redux)

The central state container for the application.

TODO: Flesh out the explanation.

## [redux-immutablejs](https://github.com/indexiatech/redux-immutablejs)

Modifies redux to allow the use of Immutable structures in redux.

## [redux-logger](https://github.com/evgenyrodionov/redux-logger)

Fancy logging for redux in development.

## [redux-saga](https://github.com/yelouafi/redux-saga)

A library for managing side effects (primarily async communication with the server) with redux. 

TODO: Explain module further.

## [style-loader](https://github.com/webpack/style-loader)

Adds CSS to the DOM by injecting a <style> tag via webpack.
