import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      id="about" 
      className="scroll-mt-24 min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-stone-950"
      aria-label="About Spencer Ng"
    >
      {/* Background decorations with subtle animation */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Grid pattern overlay for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1917_1px,transparent_1px),linear-gradient(to_bottom,#1c1917_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 2-Column Grid: 60/40 split with healthy gap, flexbox for alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-12 xl:gap-16 min-h-[calc(100vh-4rem)]">
          {/* Left Side - Text Content (60%) */}
          <div className={`relative py-12 lg:py-12 flex items-center space-y-6 text-center lg:text-left transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            {/* Subtle background gradient that bleeds into image */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/95 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 w-full space-y-6">
              {/* Name - aligned with "Building" text */}
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-100 tracking-tight">
                  Spencer Ng
                </h2>
                
                {/* Title */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-orange-400 font-medium text-sm md:text-base">
                  <Sparkles size={14} className="animate-pulse" />
                  <span>Full Stack Engineer • 4+ Years Experience</span>
                </div>
              </div>
              
              {/* Main Heading - increased line-height */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-stone-100 tracking-tight leading-[1.2]">
                Building Scalable Systems, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-orange-500">
                  Empowering Users,
                </span>
                <br />
                <span className="text-stone-300">& Solving Real-World Problems</span>
              </h1>
              
              {/* Description */}
              <p className="text-base md:text-lg text-stone-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A Full Stack Engineer specializing in 
                <span className="text-orange-400 font-medium"> React</span>, 
                <span className="text-orange-400 font-medium"> TypeScript</span>, 
                <span className="text-orange-400 font-medium"> AWS Cloud Services</span>, and 
                <span className="text-orange-400 font-medium"> Microservice architecture</span>. 
                Currently engineering resilient systems at <span className="text-stone-200 font-semibold">AWS SageMaker</span>, 
                where I build production-grade features that serve millions of users.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="#experience" 
                  className="group px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-stone-950"
                  aria-label="View professional experience"
                >
                  View Work <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium rounded-lg transition-all border border-stone-700 hover:border-stone-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-stone-950"
                  aria-label="Contact Spencer Ng"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image (40%) */}
          <div className={`relative flex items-center justify-center lg:justify-end py-12 lg:py-12 transition-opacity duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative w-full max-w-full">
              {/* Photo container with elegant vertical rectangle */}
              <div 
                className="relative w-full overflow-hidden rounded-2xl border border-stone-800/50 shadow-xl shadow-stone-900/50 bg-stone-900/50 min-h-[450px] max-h-[60vh] lg:max-h-none"
                style={{
                  aspectRatio: '4 / 5',
                }}
              >
                <img 
                  src="/images/spencer-ng.jpg" 
                  alt="Spencer Ng - Full Stack Software Engineer"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center 15%',
                  }}
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full bg-stone-800 flex items-center justify-center text-stone-600 rounded-2xl"><span>Photo</span></div>';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;