import React from 'react'

export default function wrapRouter({ params, props } = {}) {
  return function WrapRouterFactory(WrappedComponent) {
    class WrapRouter extends React.Component {
      getChildContext() {
        const router = {
          createHref: () => {},
          push: () => {},
          replace: () => {},
          go: () => {},
          goBack: () => {},
          goForward: () => {},
          setRouteLeaveHook: () => {},
          isActive: () => {},
          params,
        }
        return { router }
      }

      render() {
        return (
          <WrappedComponent {...this.props} {...props} />
        )
      }
    }

    WrapRouter.childContextTypes = {
      router: React.PropTypes.object
    }

    return WrapRouter
  }
}
