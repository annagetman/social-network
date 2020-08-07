import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.name;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

let dialogsData = [
    {id: 1, name: "Dima"},
    {id: 2, name: "Ann"},
    {id: 3, name: "Art"},
    {id: 4, name: "Eva"},
    {id: 5, name: "Karen"},
]

let messagesData = [
    {id: 1, message: "Hi!!!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "OK!!!!"},
    {id: 4, message: "dvdfggggggggg"},
    {id: 5, message: "ooooooooooo!!!"},
]

function Dialogs(props) {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>


        </div>
    )
}


export default Dialogs;