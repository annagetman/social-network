import React from 'react';
import classes from './Post.module.css';



function Post(props) {
    console.log(props.message)
    return (
        <div className={classes.item}>
            <img src={props.src}/>
            {props.message}
            <div><span>{props.count}</span><i className="material-icons">favorite_border</i>
                <span>Like</span></div>
        </div>
    )
}


export default Post;