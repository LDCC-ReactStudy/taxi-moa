import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ToolbarMenu.module.css";
import AuthenticationService from '../service/AuthenticationService';

function ToolbarMenu() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(AuthenticationService.isUserLoggedIn());
  const [selected, setSelected] = useState("home");

  useEffect(()=>{
    setIsUserLoggedIn(AuthenticationService.isUserLoggedIn());

  }, [])

  const onClick = (e) => {
    setSelected(e.target.id);
    console.log(e.target.id);
  };

  return (
    <div>
      <ul className={styles.MenuUl}>
        <li className={styles.MenuLi}>
          <Link
            className={
              selected === "home"
                ? styles.selectedCategory
                : styles.unselectedCategory
            }
            id="home"
            to="/"
            onClick={onClick}
          >
            Home
          </Link>
        </li>
        <li className={styles.MenuLi}>
          <Link
            className={
              selected === "about"
                ? styles.selectedCategory
                : styles.unselectedCategory
            }
            id="about"
            to="/about"
            onClick={onClick}
          >
            About
          </Link>
        </li>
        /*
        <li className={styles.MenuLi}>
          {!isUserLoggedIn &&
          <Link
            className={
              selected === "login"
                ? styles.selectedCategory
                : styles.unselectedCategory
            }
            id="login"
            to="/login"
            onClick={onClick}
          >
            Login
          </Link>
          }
          {isUserLoggedIn &&
          <Link
            className={
              selected === "logout"
                ? styles.selectedCategory
                : styles.unselectedCategory
            }
            id="logout"
            to="/logout"
            onClick={onClick}
          >
            Logout
          </Link>
          }
        </li>
        */
      </ul>
    </div>
  );
}

export default ToolbarMenu;
