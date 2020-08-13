import React from 'react';
import Header from "./components/Header/Header";
import './App.css';
import Nav from "./components/Navbar/Navbar";
import Message from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {

    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route exact path='/profile' render={ () => <Profile state={props.state.profilePage}/>} />
                <Route path='/dialogs' render={ () => <Message state={props.state.messagesPage}/>} />
                <Route path='/news' render={ () =>  <News />} />
                <Route path='/music' render={ () => <Music/>} />
                <Route path='/setting' render={ () => <Setting/>} />
                <Route path='/friends' render={ () => <Friends/>} />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
