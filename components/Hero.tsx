
import React from 'react';
import { ArrowRight, Database, Server, Layout } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-stone-950">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-orange-400 font-mono text-xs md:text-sm mb-6 tracking-wider uppercase opacity-90">
               <span className="w-8 h-[1px] bg-orange-500"></span>
               <span>Precision-Driven Engineering. Passion-Powered Innovation.</span>
               <span className="lg:hidden w-8 h-[1px] bg-orange-500"></span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-stone-100 tracking-tight mb-8 leading-tight">
              Building Scalable Systems, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
                Empowering Users,
              </span>
              <br />
              & Solving Real-World Problems
            </h1>
            
            <p className="text-xl text-stone-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I'm <strong>Spencer Ng</strong>, a Full Stack Engineer specializing in React, AWS Cloud Services, and Microservice architecture. 
              Currently engineering resilient systems at <span className="text-stone-200 font-semibold">AWS SageMaker</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-8">
              <a 
                href="#experience" 
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20"
              >
                View Work <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium rounded-lg transition-all border border-stone-700"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Visual Element - Code/Tech representation */}
          <div className="hidden lg:block lg:w-5/12 relative animate-slide-up">
             <div className="relative bg-stone-900 border border-stone-800 rounded-xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4 border-b border-stone-800 pb-4">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs text-stone-500 font-mono">developer_profile.ts</span>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-3 text-stone-300">
                    <Layout size={16} className="text-orange-400" /> 
                    <span>Frontend: ['React', 'VueJS', 'TS']</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-300">
                    <Server size={16} className="text-rose-400" /> 
                    <span>Backend: ['Node', 'Java', 'Python']</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-300">
                    <Database size={16} className="text-amber-400" /> 
                    <span>Cloud: ['AWS', 'DynamoDB', 'S3']</span>
                  </div>
                  <div className="h-px bg-stone-800 my-4"></div>
                  <div className="text-orange-400">
                    <span className="text-rose-400">const</span> <span className="text-amber-400">mission</span> = <span className="text-stone-300">"Empowering users"</span>;
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;