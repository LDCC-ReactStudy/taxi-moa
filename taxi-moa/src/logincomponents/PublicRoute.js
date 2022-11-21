import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthenticationService from '../service/AuthenticationService';

const PublicRoute = ({ children }) => {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return isUserLoggedIn ? <Navigate to='/' /> : children;
};

export default PublicRoute;