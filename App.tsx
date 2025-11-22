import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="bg-stone-950 min-h-screen text-stone-300 selection:bg-orange-500/30 selection:text-orange-200">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Contact />
      <ChatWidget />
    </div>
  );
};

export default App;