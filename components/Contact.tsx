import React from 'react';
import { Mail, Linkedin, Github, Terminal, MapPin, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="scroll-mt-24 bg-stone-950 pt-20 pb-10 border-t border-stone-900" aria-label="Contact Information">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-stone-400 mb-8 text-lg max-w-2xl mx-auto">
          Currently based in the <span className="text-orange-400 font-medium">Bay Area</span> and always open to discussing 
          new technologies, startup ideas, or resilient system design.
        </p>

        {/* Quick Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-stone-500">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-orange-400" />
            <span>San Francisco Bay Area, CA</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-orange-400" />
            <span>Available for opportunities</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly items-start max-w-3xl mx-auto mb-16">
          <a 
            href="mailto:spencerng94@gmail.com" 
            className="flex flex-col items-center gap-3 text-stone-400 hover:text-orange-400 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-stone-950 rounded-lg p-2 flex-1 min-w-[140px]"
            aria-label="Send email to Spencer Ng"
          >
            <div className="p-4 bg-stone-900/80 backdrop-blur-sm rounded-full group-hover:bg-orange-500/10 group-hover:scale-110 transition-all duration-300 border border-stone-800/50 group-hover:border-orange-500/40">
              <Mail size={28} className="group-hover:text-orange-400 transition-colors duration-300" />
            </div>
            <span className="text-sm font-medium">Email</span>
            <span className="text-xs text-stone-600 group-hover:text-stone-500">spencerng94@gmail.com</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/ngspencer94" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center gap-3 text-stone-400 hover:text-blue-400 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-stone-950 rounded-lg p-2 flex-1 min-w-[140px]"
            aria-label="Visit Spencer Ng's LinkedIn profile"
          >
            <div className="p-4 bg-stone-900/80 backdrop-blur-sm rounded-full group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-300 border border-stone-800/50 group-hover:border-blue-500/40">
              <Linkedin size={28} className="group-hover:text-blue-400 transition-colors duration-300" />
            </div>
            <span className="text-sm font-medium">LinkedIn</span>
            <span className="text-xs text-stone-600 group-hover:text-stone-500">Connect with me</span>
          </a>
          <a 
            href="https://github.com/spencerng94" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center gap-3 text-stone-400 hover:text-white transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-stone-950 rounded-lg p-2 flex-1 min-w-[140px]"
            aria-label="Visit Spencer Ng's GitHub profile"
          >
            <div className="p-4 bg-stone-900/80 backdrop-blur-sm rounded-full group-hover:bg-stone-800 group-hover:scale-110 transition-all duration-300 border border-stone-800/50 group-hover:border-stone-700">
              <Github size={28} className="group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="text-sm font-medium">GitHub</span>
            <span className="text-xs text-stone-600 group-hover:text-stone-500">View my code</span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-900 flex flex-col items-center">
            <div className="flex items-center gap-2 text-stone-600 text-sm mb-2">
                <Terminal size={14} className="text-orange-400" />
                <span>Designed & Built with <span className="text-orange-400">React</span> + <span className="text-orange-400">TypeScript</span> + <span className="text-orange-400">Tailwind CSS</span></span>
            </div>
            <p className="text-stone-700 text-xs">© {new Date().getFullYear()} Spencer Ng. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;