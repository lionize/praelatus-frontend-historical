import React from 'react'

export default function wrapRouter({ params }) {
  return function WrapRouterFactory(WrappedComponent) {
    class WrapRouter extends React.Component {
      getChildContext() {
        const router = {
          createHref: () => {},
          params,
        }
        return { router }
      }

      render() {
        return (
          <WrappedComponent {...this.props} />
        )
      }
    }

    WrapRouter.childContextTypes = {
      router: React.PropTypes.object
    }

    return WrapRouter
  }
}
