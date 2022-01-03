import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import './output.css'
import {BrowserRouter as Router }from 'react-router-dom'
import {ResultContextProvider} from './contexts/ResultContextProvider';

ReactDOM.render(
    <ResultContextProvider>
        <Router>
            <App/>
        </Router>
    </ResultContextProvider>
    
,document.getElementById('root'));