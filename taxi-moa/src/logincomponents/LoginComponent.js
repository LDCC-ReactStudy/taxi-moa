import React from 'react';
import AuthenticationService from '../service/AuthenticationService';
import { useState, useEffect } from 'react';
import styles from "./LoginComponent.module.css";
import Loading from "../components/Loading";
import { useLocation, useNavigate } from "react-router-dom";
export default function LoginComponent(props) {
    const [state, setState] = useState({
        username: '',
        password: '',
        hasLoginFailed: false,
        showSuccessMessage: false
    });

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const loginClicked = () => {
        AuthenticationService.executeBasicAuthenticationService(state.username, state.password)
            .then(() => {
                //debugger;
                AuthenticationService.registerSuccessfulLogin(state.username, state.password);
                navigate("/", {state: pathname});
                
            }).catch(e => {
                console.log(e);
                setState(
                    {
                        ...state,
                        showSuccessMessage: false,
                        hasLoginFailed: true
                    }
                );
            });
    };

    const onKeyPress = (e) => {
        if(e.key == 'Enter') loginClicked();
    }

    return (
        <>
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
        <div className={styles.mymyform}>
            <div className={styles.logo}>TaxiMoa Login!
            </div>
            <div className={styles.myform}>
                {state.hasLoginFailed && <div className="alert alert-warning">계정이 올바르지 않습니다.</div>}
                {state.showSuccessMessage && <div>로그인 성공</div>}
                <input className={styles.myinput} name="username" value={state.username} type="text" onChange={handleChange} placeholder="&#xf003;   ID" />
                <input className={styles.myinput} onKeyPress={onKeyPress} name="password"  value={state.password} type="password" onChange={handleChange} placeholder=" &#xf023;  Password" />
                <button className={styles.mybutton}onClick={loginClicked}>LOG IN </button>
            </div>
        </div>
        </>
    );
    /*
    return (
        <div>
            <h1>Login</h1>
            <div className="container">
                {state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {state.showSuccessMessage && <div>Login successful</div>}
                User Name: <input type="text" name="username" value={state.username} onChange={handleChange}></input>
                Password: <input type="password" name="password" value={state.password} onChange={handleChange}></input>
                <button className="btn btn-success" onClick={loginClicked}>Login</button>
            </div>
            
        </div>
    );
    */
}