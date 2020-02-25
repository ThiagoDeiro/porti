import React from 'react';
import { Router } from '@reach/router'
import Background from './components/Background/Background';
import Navegation from './components/Navegation/Navegation';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects'
import './App.css';

function App() {
  return (
    <div className="App">
      <Background/>
      <Navegation />
        <Router>
          <Header path="/porti"/>
          <About path="/About"/>
          <Projects path="/Projects"/>
        </Router>
   
      
    </div>
  );
}

export default App;
