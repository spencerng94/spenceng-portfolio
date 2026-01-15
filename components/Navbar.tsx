import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-stone-950/80 backdrop-blur-md border-b border-stone-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="font-mono text-xl font-bold text-orange-500 tracking-tighter hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-stone-950 rounded"
              aria-label="Return to top of page"
            >
              &lt;SpencerNg /&gt;
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-stone-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-stone-950"
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
             <a 
               href="mailto:spencerng94@gmail.com" 
               className="text-stone-400 hover:text-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-stone-950 rounded p-1"
               aria-label="Send email to Spencer Ng"
             >
               <Mail size={20} />
             </a>
             <a 
               href="https://www.linkedin.com/in/ngspencer94" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-stone-400 hover:text-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-stone-950 rounded p-1"
               aria-label="Visit Spencer Ng's LinkedIn profile"
             >
               <Linkedin size={20} />
             </a>
             <a 
               href="https://github.com/spencerng94" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-stone-400 hover:text-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-stone-950 rounded p-1"
               aria-label="Visit Spencer Ng's GitHub profile"
             >
               <Github size={20} />
             </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-900 border-b border-stone-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-stone-300 hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;