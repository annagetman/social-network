import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts() {

    let postData = [
        {id: 1, message: "hi, how are you?", likesCount: 12},
        {id: 2, message: "Its my first post", likesCount: 66},
    ]
    return (
        <div className={classes.postsBlock}><h1>My Posts</h1>
            <div>
                <textarea></textarea></div>
            <div><button>Add post</button></div>

            <div className={classes.posts}>

            <Post message={postData[0].message} likesCount={postData[0].likesCount} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFp3uCMFT-t3WKaunzc5iJMMNDiwDmz4q4CA&usqp=CAU'/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU'/>



            </div>
        </div>
    )
}


export default MyPosts;