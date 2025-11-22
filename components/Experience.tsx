
import React from 'react';
import { RESUME } from '../constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const getCompanyLogo = (company: string) => {
    if (company.includes('Amazon') || company.includes('AWS')) {
      // Official AWS Logo
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png';
    }
    if (company.includes('PatientPop')) {
      // PatientPop Green Square Logo (Source: GitHub Org Avatar)
      return 'https://avatars.githubusercontent.com/u/15299319?s=200&v=4';
    }
    return null;
  };

  return (
    <section id="experience" className="scroll-mt-24 py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-100 mb-16 text-center">Professional Experience</h2>
        
        <div className="space-y-12 relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-stone-800"></div>

          {RESUME.experience.map((job, index) => {
            const logoUrl = getCompanyLogo(job.company);
            
            return (
              <div key={index} className="relative md:pl-24 group">
                {/* Timeline Dot / Icon (Desktop) */}
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-white rounded-xl items-center justify-center z-10 shadow-xl border border-stone-800 overflow-hidden p-2 group-hover:scale-110 transition-transform duration-300">
                  {logoUrl ? (
                    <img src={logoUrl} alt={job.company} className="w-full h-full object-contain" />
                  ) : (
                    <Briefcase className="text-stone-600" size={24} />
                  )}
                </div>

                <div className="bg-stone-900 p-8 rounded-2xl border border-stone-800 shadow-sm hover:shadow-md hover:border-orange-500/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 md:hidden mb-4">
                         <div className="p-2 rounded-lg bg-white inline-flex border border-stone-200 shadow-sm">
                           {logoUrl ? (
                             <img src={logoUrl} alt={job.company} className="w-8 h-8 object-contain" />
                           ) : (
                             <Briefcase className="text-stone-600" size={20} />
                           )}
                         </div>
                         <span className="text-orange-400 font-semibold">{job.company}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-stone-100">{job.role}</h3>
                      <p className="text-xl text-orange-400 mt-1 hidden md:block">{job.company}</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col md:items-end text-stone-400 text-sm font-mono space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} /> {job.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} /> {job.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {job.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-stone-300 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
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