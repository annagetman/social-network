import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map( d =>  <DialogItem name={d.name} id={d.id} /> )
    let messagesElements = props.state.messages.map( m => <Message message={m.message} id={ m.id} />);

    let newMes = React.createRef();

    let addNewMes =()=> {
        let messages = newMes.current.value;
        alert(messages)
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                    {messagesElements}
                    <textarea ref={newMes}></textarea>
                <button onClick={addNewMes}>push</button>
            </div>
        </div>
    )
}


export default Dialogs;