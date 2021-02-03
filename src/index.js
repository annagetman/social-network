import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./components/redux/state";
import {addPost} from "./components/redux/state";
import {BrowserRouter} from "react-router-dom";

addPost('samurayJS');



ReactDOM.render(
    <BrowserRouter>
  <React.StrictMode>
    <App state={state} addPost={addPost} />
  </React.StrictMode>,
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
