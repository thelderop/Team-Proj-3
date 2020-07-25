import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

import Navbar from './wrappers/Navigation'
import Footer from './wrappers/Footer'
import Content from './content/content'

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Switch>

        </Switch>
        <main>
          <Content />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
