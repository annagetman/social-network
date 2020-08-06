import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import NewPost from "./NewPosts/NewPosts";


function Profile() {
    return (
        <div className={classes.content}>
           <NewPost/>
            <MyPosts/>
        </div>
    )
}


export default Profile;