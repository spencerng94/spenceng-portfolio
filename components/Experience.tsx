import React, { useState, useEffect } from 'react';
import { RESUME } from '../constants';
import { Briefcase, MapPin, Calendar, TrendingUp, Code2, Zap } from 'lucide-react';

const Experience: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    RESUME.experience.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => new Set([...prev, index]));
      }, index * 200);
    });
  }, []);

  const getCompanyLogo = (company: string) => {
    if (company.includes('Amazon') || company.includes('AWS')) {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png';
    }
    if (company.includes('PatientPop')) {
      return '/images/patientpop.jpg';
    }
    return null;
  };

  const extractMetrics = (highlight: string) => {
    const metrics: { icon: React.ReactNode; text: string }[] = [];
    
    // Extract percentage improvements
    const percentMatch = highlight.match(/(\d+)%/);
    if (percentMatch) {
      metrics.push({
        icon: <TrendingUp size={14} className="text-green-400" />,
        text: `${percentMatch[1]}% improvement`
      });
    }
    
    // Extract time reductions
    const timeMatch = highlight.match(/(\d+)\s+to\s+(\d+)\s+days/);
    if (timeMatch) {
      const reduction = parseInt(timeMatch[1]) - parseInt(timeMatch[2]);
      metrics.push({
        icon: <Zap size={14} className="text-orange-400" />,
        text: `${reduction} days saved`
      });
    }
    
    // Extract test coverage
    const coverageMatch = highlight.match(/(\d+)%\s+test\s+coverage/);
    if (coverageMatch) {
      metrics.push({
        icon: <Code2 size={14} className="text-blue-400" />,
        text: `${coverageMatch[1]}% coverage`
      });
    }
    
    return metrics;
  };

  return (
    <section id="experience" className="scroll-mt-24 py-24 bg-stone-950" aria-label="Professional Experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-4 tracking-tight">Professional Experience</h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Building production-grade systems and leading technical initiatives at scale
          </p>
        </div>
        
        <div className="space-y-12 relative">
          {/* Enhanced Vertical Timeline connecting company logos */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/60 via-orange-500/30 to-stone-800/50"></div>

          {RESUME.experience.map((job, index) => {
            const logoUrl = getCompanyLogo(job.company);
            const isVisible = visibleItems.has(index);
            
            return (
              <div 
                key={index} 
                className={`relative md:pl-24 group transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                {/* Timeline Dot / Icon (Desktop) */}
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-white rounded-xl items-center justify-center z-10 shadow-xl border border-stone-800 overflow-hidden p-2 group-hover:scale-110 group-hover:border-orange-500/50 transition-all duration-300">
                  {logoUrl ? (
                    <img 
                      src={logoUrl} 
                      alt={`${job.company} logo`} 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <Briefcase className="text-stone-600" size={24} />
                  )}
                </div>

                <div className="bg-stone-900/80 backdrop-blur-sm p-8 rounded-2xl border border-stone-800/50 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:border-orange-500/40 group-hover:bg-stone-900/90">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 md:hidden mb-4">
                         <div className="p-2 rounded-lg bg-white inline-flex border border-stone-200 shadow-sm">
                           {logoUrl ? (
                             <img 
                               src={logoUrl} 
                               alt={`${job.company} logo`} 
                               className="w-8 h-8 object-contain"
                               loading="lazy"
                             />
                           ) : (
                             <Briefcase className="text-stone-600" size={20} />
                           )}
                         </div>
                         <span className="text-orange-400 font-semibold">{job.company}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-stone-100 mb-1">{job.role}</h3>
                      <p className="text-xl text-orange-400 mt-1 hidden md:block font-medium">{job.company}</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col md:items-end text-gray-400 text-sm font-mono space-y-2">
                      <div className="flex items-center gap-2 bg-stone-950/50 px-3 py-1.5 rounded-lg border border-stone-800/50">
                        <Calendar size={14} className="text-gray-400" /> 
                        <span className="tracking-wider">{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-stone-950/50 px-3 py-1.5 rounded-lg border border-stone-800/50">
                        <MapPin size={14} className="text-gray-400" /> 
                        <span className="tracking-wider">{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {job.highlights.map((highlight, hIdx) => {
                      const metrics = extractMetrics(highlight);
                      return (
                        <li 
                          key={hIdx} 
                          className="flex items-start gap-3 text-stone-300 leading-snug group/item"
                          style={{ letterSpacing: '-0.01em' }}
                        >
                          <span className="mt-2 w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0 group-hover/item:bg-orange-400 transition-colors" />
                          <div className="flex-1">
                            <p className="mb-1 leading-snug" style={{ letterSpacing: '-0.01em' }}>{highlight}</p>
                            {metrics.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-2">
                                {metrics.map((metric, mIdx) => (
                                  <span 
                                    key={mIdx}
                                    className="inline-flex items-center gap-1.5 px-2 py-1 bg-stone-950 text-xs rounded border border-stone-800"
                                  >
                                    {metric.icon}
                                    {metric.text}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;