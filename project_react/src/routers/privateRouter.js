import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function PrivateRouter({ children, redirectTo }) {
  const isLogged = useSelector((state) => state.authReducer.isLoggedIn);
  return isLogged ? children : <Navigate to={redirectTo} />;
}

PrivateRouter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  redirectTo: PropTypes.string.isRequired,
};
