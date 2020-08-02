import React from 'react';
import logo from './logo.png'
import fon from './fon.jpg'
import seagull from './seagull.jpg'
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img src={logo}/>
            </header>

            <nav className='nav'>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className='content'>
                <img src={fon}/>

          <div> <img src={seagull}/>ava + description</div>
        </div>
        </div>
    );
}

export default App;
