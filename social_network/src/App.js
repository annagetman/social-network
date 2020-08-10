import React from 'react';
import Header from "./components/Header/Header";
import './App.css';
import Nav from "./components/Navbar/Navbar";
import Message from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route exact path='/profile' render={ () => <Profile/>} />
                <Route path='/dialogs' render={ () => <Message/>} />
                <Route path='/news' render={ () => <Profile/>} />
                <Route path='/music' render={ () => <Music/>} />
                <Route path='/setting' render={ () => <Setting/>} />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
