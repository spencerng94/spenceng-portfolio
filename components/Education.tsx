
import React from 'react';
import { RESUME } from '../constants';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

const Education: React.FC = () => {
  const getSchoolLogo = (school: string) => {
    if (school.includes('Southern California')) {
      // USC Interlocking SC Logo
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/USC_Trojans_logo.svg/240px-USC_Trojans_logo.svg.png';
    }
    if (school.includes('Los Angeles') || school.includes('UCLA')) {
      // UCLA Script Logo (Blue Text) - Fits well on white
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/UCLA_Bruins_script.svg/512px-UCLA_Bruins_script.svg.png';
    }
    if (school.includes('Galvanize')) {
      return '/images/galvanize.jpg';
    }
    if (school.includes('Google')) {
      // Google G Logo
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/240px-Google_%22G%22_logo.svg.png';
    }
    return null;
  };

  return (
    <section className="py-24 bg-stone-900/30" aria-label="Education and Certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-4">Education & Certifications</h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Continuous learning and professional development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESUME.education.map((edu, idx) => {
            const logoUrl = getSchoolLogo(edu.school);

            return (
              <div key={idx} className="bg-stone-900 p-6 rounded-xl border border-stone-800 flex flex-col h-full hover:-translate-y-1 hover:border-orange-500/30 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-2 shadow-md">
                    {logoUrl ? (
                      <img src={logoUrl} alt={edu.school} className="w-full h-full object-contain" />
                    ) : (
                      <GraduationCap size={24} className="text-stone-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-100 leading-tight">{edu.school}</h3>
                    {edu.year && <span className="text-xs text-orange-400 font-mono">{edu.year}</span>}
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-stone-300 text-sm font-medium mb-3">{edu.degree}</p>
                  
                  {edu.courses && (
                    <div className="mt-4 pt-4 border-t border-stone-800">
                      <p className="text-xs text-stone-500 mb-2 uppercase tracking-wider">Modules</p>
                      <ul className="space-y-1.5">
                        {edu.courses.map((course, cIdx) => (
                          <li key={cIdx} className="text-xs text-stone-400 flex items-start gap-2">
                             <CheckCircle2 size={12} className="text-green-500 mt-0.5 flex-shrink-0" />
                             <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;