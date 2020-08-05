import React from 'react';
import Header from "./components/Header/Header";
import './App.css';
import Nav from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
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
                <Route path='/profile' component={Profile} />
                <Route path='/dialogs' component={Dialogs} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/setting' component={Setting} />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
