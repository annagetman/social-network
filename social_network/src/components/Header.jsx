import React from 'react';
import logo from "../logo.png";
import './Header.module.css';
import classes from "./Header.module.css";

function Header() {
    return (
        <header className={classes.header}>
            <img src={logo}/>
        </header>
    )
}


export default Header;