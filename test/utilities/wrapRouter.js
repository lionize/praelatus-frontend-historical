import React from 'react';
import PropTypes from 'prop-types';

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
        };
        return { router };
      }

      render() {
        return <WrappedComponent {...this.props} params={params} {...props} />;
      }
    }

    WrapRouter.childContextTypes = {
      router: PropTypes.object,
    };

    return WrapRouter;
  };
}
