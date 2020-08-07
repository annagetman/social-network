import React from 'react';
import fon from './fon.jpg';
import seagull from "./seagull.jpg";
import classes from './ProfileInfo.module.css'
function ProfileInfo() {
    return (
        <div>
            <img src={fon} className={classes.fon}/>

            <div className={classes.descriptionBlock}>
                <img src={seagull}/>ava + description</div>
        </div>
    )
}


export default ProfileInfo;