import { useEffect, useRef, useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import { CssBaseline } from '@material-ui/core';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { skills } from './myData';
import useActiveLink from './hooks/useActiveLink';

function App() {  
  const activeSection = useActiveLink()
  
  return (
    <div className="App">
      <Header activeSection={activeSection.visibleSection}/>
      <About />
      <Skills skills={skills} />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;