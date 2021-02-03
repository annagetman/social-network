import Post from "../Profile/MyPosts/Post/Post";
import React from "react";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: "hi, how are you?", likesCount: 12,  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFp3uCMFT-t3WKaunzc5iJMMNDiwDmz4q4CA&usqp=CAU'},
            {id: 2, message: "Its my first post", likesCount: 66, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFp3uCMFT-t3WKaunzc5iJMMNDiwDmz4q4CA&usqp=CAU'},
        ]

    },
   dialogsPage: {
        messages: [
            {id: 1, message: "Hi!!!"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "OK!!!!"},
            {id: 4, message: "dvdfggggggggg"},
            {id: 5, message: "ooooooooooo!!!"},
        ],
        dialogs: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Ann"},
            {id: 3, name: "Art"},
            {id: 4, name: "Eva"},
            {id: 5, name: "Karen"},
        ]
    }
}


export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount:0
    }

    state.profilePage.posts.push(newPost);
}




export default state;
// export default {addPost}