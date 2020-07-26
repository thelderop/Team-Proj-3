import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Calendar from './components/Calendar'
import Favorites from './components/Favorites'
import Login from './components/Login'
import Profile from './components/Profile'
import Welcome from './components/Welcome'
import Navigation from './wrappers/Navigation'
import Content from './content/content'
import Footer from './wrappers/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Navigation />
      <div className="react-router-logic">
      <Switch>
          <Route path='/calendar' component={ Calendar } />
          <Route path='/login' component={ Login } /> } /> 
          <Route path='/favorites' component={ Favorites } />
          <Route path='/profile' component={ Profile } />
          <Route path='/' component={ Welcome } />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
