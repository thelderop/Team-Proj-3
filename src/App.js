import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './wrappers/Footer'
import Content from './content/content'

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Content />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
