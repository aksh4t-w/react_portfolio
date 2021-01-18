import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import { CssBaseline } from '@material-ui/core';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { skills } from './myData';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header/>
      <About />
      <Skills skills={skills}/>
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
