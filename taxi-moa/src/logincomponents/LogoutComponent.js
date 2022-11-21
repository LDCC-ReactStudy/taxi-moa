import React from 'react'
import { Navigate, Route, Link } from 'react-router-dom';
import AuthenticationService from '../service/AuthenticationService'
import styles from "./LoginComponent.module.css";
function LogoutComponent() {
    AuthenticationService.logout();
    const reRender = () => {
        // calling the forceUpdate() method
        this.forceUpdate();
    };
    return (
        <div className={styles.mymyform}>
            <div className={styles.logo}>Success Logout!</div>
            <form className={styles.myform}>
                <button className={styles.mybutton} onClick={reRender}>Continue</button>
            </form>
        </div>
        /*
        <>
            <Navigate to='/' />
        </>
        */
    )

}
export default LogoutComponent