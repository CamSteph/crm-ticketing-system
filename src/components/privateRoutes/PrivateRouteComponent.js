import { element } from 'prop-types';
import React from 'react';
import {Route, Navigate} from 'react-router-dom';
// Import components
import DefaultLayout from '../../layout/DefaultLayout';

const isAuthenticated = true;
const PrivateRouteComponent = ({children, ...rest}) => {
  return (isAuthenticated ? <DefaultLayout>{children}</DefaultLayout> : <Navigate to='/'/>)
}

export default PrivateRouteComponent