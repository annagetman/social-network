import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts() {

    let posts = [
        {id: 1, message: "hi, how are you?", likesCount: 12},
        {id: 2, message: "Its my first post", likesCount: 66},
    ]
    let postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFp3uCMFT-t3WKaunzc5iJMMNDiwDmz4q4CA&usqp=CAU'/>)
    return (
        <div className={classes.postsBlock}><h1>My Posts</h1>
            <div>
                <textarea></textarea></div>
            <div><button>Add post</button></div>

            <div className={classes.posts}>
                {postsElements}
            {/*<Post message={posts[0].message} likesCount={posts[0].likesCount} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFp3uCMFT-t3WKaunzc5iJMMNDiwDmz4q4CA&usqp=CAU'/>*/}
            {/*<Post message={posts[1].message} likesCount={posts[1].likesCount} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU'/>*/}



            </div>
        </div>
    )
}


export default MyPosts;