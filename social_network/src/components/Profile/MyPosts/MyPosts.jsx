import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPost} from "../../redux/state";


addPost('samurayJS');


function MyPosts(props) {
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} src={p.src} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
       props.addPost(text)
    }

    return (
        <div className={classes.postsBlock}><h1>My Posts</h1>
            <div>
                <textarea ref={newPostElement}></textarea></div>
            <div><button onClick={addPost}>Add post</button></div>

            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts;