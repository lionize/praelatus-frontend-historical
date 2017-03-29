import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

export default function wrapProvider({ state } = {}) {
  const store = configureStore()(state ? state : {})

  return function WrapProviderFactory(WrappedComponent) {
    return class WrapProvider extends React.Component {
      render() {
        return (
          <Provider store={store}>
            <WrappedComponent {...this.props} />
          </Provider>
        )
      }
    }
  }
}
