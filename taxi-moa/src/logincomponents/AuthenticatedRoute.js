import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';
function AuthenticatedRoute(props) {

    
    if (AuthenticationService.isUserLoggedIn()) {
        return <Route {...props} />
    } else {
        return <Navigate to="/login" />
    }
    
}
export default AuthenticatedRoute