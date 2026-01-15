import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Server, Cloud, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'fullstack' | 'frontend' | 'backend' | 'cloud';
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string[];
}

const projects: Project[] = [
  {
    title: 'SageMaker Code Editor Auto Shut Down',
    description: 'React-based feature preventing data loss during WebSocket disconnections',
    longDescription: 'Designed and developed a critical feature for AWS SageMaker Code Editor that automatically handles WebSocket disconnections, preventing UI freezes and data loss. Implemented robust error handling and state management.',
    technologies: ['React', 'TypeScript', 'WebSocket', 'AWS', 'State Management'],
    category: 'fullstack',
    highlights: [
      'Resolved SEV-2 production incident',
      'Prevented data loss during network interruptions',
      'Improved user experience with graceful error handling'
    ],
    metrics: ['SEV-2 resolved', 'Zero data loss incidents']
  },
  {
    title: 'RStudio Region Build Automation',
    description: 'Automated provisioning system reducing development time by 75%',
    longDescription: 'Engineered a comprehensive automation system for RStudio region builds, reducing manual provisioning time from 28 days to 7 days. Built with Python, AWS CloudFormation, and CI/CD pipelines.',
    technologies: ['Python', 'AWS CloudFormation', 'Jenkins', 'Docker', 'CI/CD'],
    category: 'cloud',
    highlights: [
      '75% reduction in provisioning time',
      'Automated infrastructure deployment',
      'Improved developer productivity'
    ],
    metrics: ['28 → 7 days', '75% time reduction']
  },
  {
    title: 'PatientPop Management Settings',
    description: 'Enterprise Vue.js application with comprehensive user and role management',
    longDescription: 'Developed a full-featured management interface for PatientPop using Vue.js, VueX, and REST APIs. Implemented comprehensive unit testing achieving 90%+ coverage.',
    technologies: ['Vue.js', 'VueX', 'Jest', 'Cypress', 'Storybook'],
    category: 'frontend',
    highlights: [
      '90%+ test coverage with Jest',
      'Cypress E2E testing integration',
      'Component library with Storybook'
    ],
    metrics: ['90%+ coverage', '100+ components']
  },
  {
    title: 'SageMaker Resource Optimization',
    description: 'Automation scripts for optimizing resource limits across data plane cells',
    longDescription: 'Developed automation scripts and collaborated with external teams to optimize resource limits for SageMaker data plane cells, supporting high-scale operations and reducing costs.',
    technologies: ['Python', 'AWS SDK', 'DynamoDB', 'CloudWatch', 'Automation'],
    category: 'backend',
    highlights: [
      'Optimized resource allocation',
      'Reduced operational costs',
      'Improved system scalability'
    ],
    metrics: ['Cost reduction', 'High-scale support']
  }
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code2 },
    { id: 'fullstack', label: 'Full Stack', icon: Code2 },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'cloud', label: 'Cloud/DevOps', icon: Cloud },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      fullstack: 'bg-gradient-to-r from-orange-500 to-rose-500',
      frontend: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      backend: 'bg-gradient-to-r from-purple-500 to-pink-500',
      cloud: 'bg-gradient-to-r from-amber-500 to-orange-500',
    };
    return colors[category as keyof typeof colors] || 'bg-stone-600';
  };

  return (
    <section id="projects" className="scroll-mt-24 py-24 bg-stone-900/30" aria-label="Featured Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-4">Featured Projects</h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Real-world solutions built for production environments. Each project demonstrates problem-solving, 
            technical depth, and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'
                }`}
                aria-label={`Filter projects by ${category.label}`}
              >
                <Icon size={16} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-stone-900 p-8 rounded-2xl border border-stone-800 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 group flex flex-col"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(project.category)}`}>
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={16} className="text-stone-400 group-hover:text-white" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
                      aria-label={`View live ${project.title}`}
                    >
                      <ExternalLink size={16} className="text-stone-400 group-hover:text-white" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-stone-100 mb-3 group-hover:text-orange-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-stone-400 mb-4 leading-relaxed flex-1">
                {project.longDescription}
              </p>

              {/* Metrics */}
              {project.metrics && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((metric, mIdx) => (
                    <span
                      key={mIdx}
                      className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-lg border border-orange-500/20 font-mono"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-stone-950 text-stone-400 text-xs rounded border border-stone-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mt-4 pt-4 border-t border-stone-800">
                {project.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2 text-sm text-stone-300">
                    <ArrowRight size={14} className="text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-stone-500">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
