import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


function Dialogs(props) {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
            <div className={classes.dialog + ' ' + classes.active}>
                <NavLink to="/dialogs/1">Dima</NavLink></div>
            <div className={classes.dialog}>
                <NavLink to="/dialogs/2">Ann</NavLink></div>
            <div className={classes.dialog}>
                <NavLink to="/dialogs/3">Art</NavLink></div>
            <div className={classes.dialog}>
                <NavLink to="/dialogs/4">Eva</NavLink></div>
            <div className={classes.dialog}>
                <NavLink to="/dialogs/5">Karen</NavLink></div>
            </div>




            <div className={classes.messages}>
                <div className={classes.message}>Hi!!!</div>
                <div className={classes.message}>How is your it-kamasutra?????</div>
                <div className={classes.message}>Yoo</div>
            </div>


        </div>
    )
}


export default Dialogs;