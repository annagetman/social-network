import React from 'react';
import logo from "../../logo.png";
import './Header.module.css';
import classes from "./Header.module.css";

function Header() {
    return (
        <header className={classes.header}>
            <div><img src={logo}/></div>
            <h1>This is react, baby!!!</h1>
        </header>
    )
}


export default Header;