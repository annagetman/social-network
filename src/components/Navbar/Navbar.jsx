import React from 'react';
import './Navbar.module.css';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></div>
            <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink></div>
            <div className={classes.item}><NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink></div>
            <div className={classes.item}><NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink></div>
            <div className={classes.item}><NavLink to="/setting" activeClassName={classes.activeLink}>Settings</NavLink></div>
            <div className={classes.item}><NavLink to="/friends" activeClassName={classes.activeLink}>Friends
                <div>
                    <div className={classes.friends}>Andrew</div>
                    <div className={classes.friends}>Sasha</div>
                    <div className={classes.friends}>Sveta</div>
                </div>
            </NavLink></div>
        </nav>

    )
}


export default Nav;