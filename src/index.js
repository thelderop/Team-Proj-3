import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
require('dotenv').config()
// require('dotenv').config({path: path.resolve(__dirname, '../.env')})
// const cors = require('cors')
// const express = require('express')
// const app = express()



// app.use(cors({
//     origin: "*",
//     credentials: true,
//     optionsSuccessStatus: 200
// }))

// app.use(express.urlencoded({extended:false}))
// app.use(express.json())

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
