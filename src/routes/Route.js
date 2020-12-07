import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import UserStore from '../stores/UserStore';
import { getRedirectURLWithParameters } from '../utils/qs';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = UserStore.getIsAuthenticated();

  if (!signed && isPrivate) {
    const urlWithParameters = getRedirectURLWithParameters();

    return (
      <Redirect to={urlWithParameters ? `/to=${urlWithParameters}` : '/'} />
    );
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
