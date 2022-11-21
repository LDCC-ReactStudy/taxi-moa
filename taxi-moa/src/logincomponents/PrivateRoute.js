import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthenticationService from '../service/AuthenticationService';

const PrivateRoute = ({ children }) => {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return !isUserLoggedIn ? <Navigate to='/login' /> : children;
};

export default PrivateRoute;