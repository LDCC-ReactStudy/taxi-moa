import React from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import MenuComponent from './MenuComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import { Navigate, BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import AuthenticationService from '../service/AuthenticationService';
function InstructorApp() {
    return (
        <>
            <MenuComponent />
            <Routes>
                <Route path="/" element={<LoginComponent />} />
                <Route path="/login" element={<LoginComponent />} />
                ({AuthenticationService.isUserLoggedIn()}) ? 
                    <Route path="/logout" element={<LogoutComponent />} />
                    : ''
            </Routes>
        </>
    );

    /*
    return (
        <>
            <Router>
                <>
                    <MenuComponent />
                    <Routes>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" exact component={LoginComponent} />
                        <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                        <AuthenticatedRoute path="/courses" exact component={ListCoursesComponent} />
                    </Routes>
                </>
            </Router>
        </>
    );
    */
}

export default InstructorApp;