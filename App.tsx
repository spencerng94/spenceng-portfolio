import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

// Lazy load Projects component for better performance
const Projects = lazy(() => import('./components/Projects'));

const App: React.FC = () => {
  return (
    <div className="bg-stone-950 min-h-screen text-stone-300 selection:bg-orange-500/30 selection:text-orange-200">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Suspense fallback={
          <section className="py-24 bg-stone-900/30" aria-label="Loading projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="h-8 w-64 bg-stone-800 rounded-lg mx-auto mb-4 animate-pulse"></div>
                <div className="h-4 w-96 bg-stone-800 rounded mx-auto animate-pulse"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-stone-900 p-8 rounded-2xl border border-stone-800 animate-pulse">
                    <div className="h-6 w-32 bg-stone-800 rounded mb-4"></div>
                    <div className="h-8 w-full bg-stone-800 rounded mb-4"></div>
                    <div className="h-4 w-full bg-stone-800 rounded mb-2"></div>
                    <div className="h-4 w-3/4 bg-stone-800 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        }>
          <Projects />
        </Suspense>
        <Experience />
        <Education />
      </main>
      <Contact />
    </div>
  );
};

export default App;