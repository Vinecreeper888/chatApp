import React from "react";
import styles from "./Nav.module.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/");
    }   

    return(
        <div className={styles.navbar}>
            <ul className={styles.menuItem}>
                <li>Menu</li>
            </ul>
            <ul className={styles.listItems}>
                <li>About</li>
                <li onClick={navigateToHome}>Chatapp</li>
                <li>Login</li>
            </ul>
        </div>
    );
}

export default Nav;