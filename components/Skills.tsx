
import React from 'react';
import { RESUME } from '../constants';
import { Code, Server, Cloud } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (name: string) => {
    if (name.includes('Frontend')) return <Code className="text-orange-400" size={24} />;
    if (name.includes('Backend')) return <Server className="text-rose-400" size={24} />;
    return <Cloud className="text-amber-400" size={24} />;
  };

  return (
    <section id="skills" className="scroll-mt-24 py-24 bg-stone-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-100 mb-4">Technical Expertise</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over 4 years of solving complex problems in high-scale environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESUME.skills.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-stone-900 p-8 rounded-2xl border border-stone-800 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-stone-950 rounded-lg border border-stone-800 group-hover:border-orange-500/30 transition-colors">
                  {getIcon(category.name)}
                </div>
                <h3 className="text-xl font-semibold text-stone-100">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-stone-950 text-stone-400 text-sm rounded-lg border border-stone-800 group-hover:border-stone-700 group-hover:text-stone-300 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;