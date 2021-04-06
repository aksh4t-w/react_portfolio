import './App.css';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { skills } from './myData';
import useActiveLink from './hooks/useActiveLink';
import { useEffect, useState } from 'react';
import useWindowSize from './hooks/useWindowSize';

function App() {  
  const activeSection = useActiveLink()
  const [mobileView, setMobileView] = useState(false)
  
  const {width} = useWindowSize()

  useEffect(() => {
    if (width <= 600)
      setMobileView(true)
    else
      setMobileView(false)   
  }, [width])
     
  return (
    <div className="App">
      <Header activeSection={activeSection.visibleSection} view={mobileView} />
      <About view={mobileView}/>
      <Skills skills={skills} view={mobileView}/>
      <Portfolio view={mobileView}/>
      <Contact view={mobileView}/>
    </div>
  );
}

export default App;