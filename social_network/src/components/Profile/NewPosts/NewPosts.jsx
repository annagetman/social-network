import React from 'react';
import fon from './fon.jpg';
import seagull from "./seagull.jpg";
import classes from './NewPosts.module.css'
function NewPost() {
    return (
        <div className={classes.content}>
            <img src={fon} className={classes.fon}/>
            <div><img src={seagull}/>ava + description</div>
        </div>
    )
}


export default NewPost;