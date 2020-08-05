import React from 'react';
import Header from "./components/Header/Header";
import './App.css';
import Nav from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs"

function App() {
    return (
        <div className="app-wrapper">

            <Header/>

            <Nav/>
            <div className="app-wrapper-content">
                <Dialogs/>
            </div>
            {/*<Profile/>*/}



        </div>
    );
}

export default App;
