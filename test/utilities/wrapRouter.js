import React from 'react'

export default function wrapRouter({ params, props }) {
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
