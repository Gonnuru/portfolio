import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <>
      <div className="bg-gradient-radial"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Education />
      </main>
      <Contact />
      <Chatbot />
    </>
  );
}

export default App;
