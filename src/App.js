import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';


import Footer from './wrappers/Footer'
import Content from './content/content'

function App() {
  return (
    <div>
      <div className="App">
        <main>
          <Content />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
