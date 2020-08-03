import React from 'react';
import Header from "./components/Header";
import './App.css';
import Nav from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
    return (
        <div className="app-wrapper">


            <Header/>

            <Nav/>

            <Profile/>


        </div>
    );
}

export default App;
