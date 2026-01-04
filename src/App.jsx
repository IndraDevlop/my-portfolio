import Preloader from './components/Preloader'
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Navbar from './components/navbar'
import CustomCursor from './components/CustomCursor'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from "./components/Experience";


function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="loading" />
      ) : (
        <div key="main">
          <CustomCursor />
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer/>
        </div>
      )}
    </AnimatePresence>
  )
}

export default App
