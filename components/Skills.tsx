import React, { useState, useEffect, useRef } from 'react';
import { RESUME } from '../constants';
import { Code, Server, Cloud } from 'lucide-react';

// Proficiency levels for skills (based on experience)
const skillProficiency: Record<string, 'expert' | 'advanced' | 'proficient'> = {
  // Frontend - Expert level
  'React': 'expert',
  'TypeScript': 'expert',
  'JavaScript': 'expert',
  'VueJS': 'advanced',
  'Redux': 'advanced',
  'VueX': 'advanced',
  'HTML5': 'expert',
  'CSS3': 'expert',
  'Webpack': 'advanced',
  'Cypress': 'proficient',
  
  // Backend - Advanced to Expert
  'Node.js': 'expert',
  'Express': 'expert',
  'Java': 'advanced',
  'Python': 'advanced',
  'GraphQL': 'advanced',
  'Microservices': 'expert',
  'SQL (MySQL, Postgres)': 'advanced',
  'NoSQL (DDB)': 'advanced',
  
  // Cloud & DevOps - Expert
  'AWS Lambda': 'expert',
  'AWS DynamoDB': 'expert',
  'AWS S3': 'expert',
  'AWS EC2': 'advanced',
  'AWS CloudFormation': 'advanced',
  'AWS CloudWatch': 'advanced',
  'Docker': 'advanced',
  'Jenkins': 'proficient',
};

const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Animate skills in on mount
    const timer = setTimeout(() => {
      RESUME.skills.forEach((category) => {
        category.skills.forEach((skill) => {
          setTimeout(() => {
            setVisibleSkills((prev) => new Set([...prev, skill]));
          }, Math.random() * 500);
        });
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for staggered card animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0');
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, cardIndex]));
            }, cardIndex * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('[data-card-index]');
      cards.forEach((card) => observer.observe(card));
    }

    return () => {
      if (sectionRef.current) {
        const cards = sectionRef.current.querySelectorAll('[data-card-index]');
        cards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  const getIcon = (name: string) => {
    if (name.includes('Frontend')) {
      return (
        <div className="relative">
          <div className="absolute inset-0 bg-orange-400/20 rounded-lg blur-md"></div>
          <Code className="relative text-orange-400" size={24} />
        </div>
      );
    }
    if (name.includes('Backend')) {
      return (
        <div className="relative">
          <div className="absolute inset-0 bg-rose-400/20 rounded-lg blur-md"></div>
          <Server className="relative text-rose-400" size={24} />
        </div>
      );
    }
    return (
      <div className="relative">
        <div className="absolute inset-0 bg-amber-400/20 rounded-lg blur-md"></div>
        <Cloud className="relative text-amber-400" size={24} />
      </div>
    );
  };

  const getProficiencyBadge = (skill: string) => {
    const proficiency = skillProficiency[skill] || 'proficient';
    const colors = {
      expert: 'bg-green-500/20 text-green-400 border-green-500/30',
      advanced: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      proficient: 'bg-stone-700/50 text-stone-400 border-stone-700',
    };
    
    return (
      <span className={`text-[10px] px-1.5 py-0.5 rounded border ${colors[proficiency]} font-mono uppercase tracking-wider`}>
        {proficiency}
      </span>
    );
  };

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="scroll-mt-24 py-24 bg-stone-900/50" 
      aria-label="Technical Skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-4">Technical Expertise</h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit built over 4+ years of solving complex problems in high-scale production environments.
            Each technology has been battle-tested in real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESUME.skills.map((category, idx) => {
            const isCardVisible = visibleCards.has(idx);
            const categoryColor = category.name.includes('Frontend') 
              ? 'orange' 
              : category.name.includes('Backend') 
              ? 'rose' 
              : 'amber';
            
            return (
              <div 
                key={idx}
                data-card-index={idx}
                className={`relative p-8 rounded-2xl transition-all duration-500 ${
                  isCardVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  background: 'rgba(28, 25, 23, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg">
                    {getIcon(category.name)}
                  </div>
                  <h3 className="text-xl font-semibold text-stone-100">{category.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const isVisible = visibleSkills.has(skill);
                    const isExpert = skillProficiency[skill] === 'expert';
                    
                    return (
                      <div
                        key={skill}
                        className={`relative group/skill transition-all duration-300 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}
                      >
                        <span 
                          className="inline-flex items-center gap-2 px-3 py-2 bg-stone-950/50 text-stone-400 text-sm rounded-lg border border-stone-800/50 transition-all cursor-default hover:scale-105 hover:border-[#FF6B2B]/50 hover:text-stone-300 hover:shadow-[0_0_15px_rgba(255,107,43,0.3)]"
                          title={`${skill} - ${skillProficiency[skill] || 'proficient'} level`}
                        >
                          {skill}
                          {isExpert && (
                            <span className="relative inline-flex items-center justify-center">
                              <span className="absolute w-2 h-2 rounded-full bg-green-400 animate-ping opacity-75"></span>
                              <span 
                                className="relative w-2 h-2 rounded-full bg-green-400 animate-pulse"
                                style={{
                                  boxShadow: '0 0 8px rgba(74, 222, 128, 0.8), 0 0 16px rgba(74, 222, 128, 0.4)',
                                }}
                              />
                            </span>
                          )}
                        </span>
                        {/* Tooltip on hover */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-stone-800 text-stone-200 text-xs rounded opacity-0 group-hover/skill:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-stone-700">
                          {getProficiencyBadge(skill)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-stone-500">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex items-center justify-center">
              <span className="absolute w-3 h-3 rounded-full bg-green-400 animate-ping opacity-75"></span>
              <span 
                className="relative w-3 h-3 rounded-full bg-green-400 animate-pulse"
                style={{
                  boxShadow: '0 0 8px rgba(74, 222, 128, 0.8)',
                }}
              />
            </span>
            <span>Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <span>Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-stone-500"></div>
            <span>Proficient</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;