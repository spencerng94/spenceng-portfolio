
import React from 'react';
import { Mail, Linkedin, Github, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="scroll-mt-24 bg-stone-950 pt-20 pb-10 border-t border-stone-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
        <p className="text-stone-400 mb-12">
          Currently based in the Bay Area and always open to discussing new technologies, 
          startup ideas, or resilient system design.
        </p>

        <div className="flex justify-center gap-8 mb-16">
          <a href="mailto:spencerng94@gmail.com" className="flex flex-col items-center gap-2 text-stone-400 hover:text-orange-400 transition-colors group">
            <div className="p-4 bg-stone-900 rounded-full group-hover:bg-stone-800 transition-colors">
              <Mail size={24} />
            </div>
            <span className="text-sm">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/ngspencer94" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-stone-400 hover:text-blue-400 transition-colors group">
            <div className="p-4 bg-stone-900 rounded-full group-hover:bg-stone-800 transition-colors">
              <Linkedin size={24} />
            </div>
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href="https://github.com/spencerng94" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-stone-400 hover:text-white transition-colors group">
            <div className="p-4 bg-stone-900 rounded-full group-hover:bg-stone-800 transition-colors">
              <Github size={24} />
            </div>
            <span className="text-sm">GitHub</span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-900 flex flex-col items-center">
            <div className="flex items-center gap-2 text-stone-600 text-sm mb-2">
                <Terminal size={14} />
                <span>Designed & Built with React + Tailwind</span>
            </div>
            <p className="text-stone-700 text-xs">© {new Date().getFullYear()} Spencer Ng. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;