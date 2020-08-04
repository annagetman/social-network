import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts() {
    return (
        <div><h1>My Posts</h1>
            <div>
                <textarea></textarea>
            <button>Add post</button>

            </div>
            <div className={classes.posts}>

            <Post message='Hi, how are you?'count='14' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFp3uCMFT-t3WKaunzc5iJMMNDiwDmz4q4CA&usqp=CAU'/>
            <Post message='Hi, its mu first post' count='155' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU'/>



            </div>
        </div>
    )
}


export default MyPosts;