import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Resume />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;