
import { ResumeData } from './types';

export const RESUME: ResumeData = {
  name: "Spencer Ng",
  title: "Full Stack Software Engineer",
  summary: "Full Stack Software Engineer with 4 years of experience building scalable microservices and enterprise applications. Demonstrated ability in API design using JavaScript, React, and backend technologies, with proven success in resolving high-severity incidents and streamlining operations. Adept at translating business requirements into resilient data models that enhance user interfaces and deliver cost-saving improvements.",
  experience: [
    {
      company: "Amazon Web Services (AWS)",
      role: "Full Stack Software Engineer",
      period: "Jan 2023 - Present",
      location: "Santa Clara, CA",
      highlights: [
        "Resolved a SEV-2 incident by implementing a UI fix to prevent freezes and data loss during WebSocket disconnections, demonstrating robust incident management.",
        "Designed and developed the Auto Shut Down feature for the Code Editor in React, enhancing localized user experience and ensuring resilient enterprise application workflows.",
        "Engineered the design and implementation of RStudio Region Build Automation (RBA), reducing development effort from 28 to 7 days through automated provisioning.",
        "Optimized resource limits for SageMaker data plane cells by developing automation scripts and collaborating with external teams to support high-scale operations.",
        "Led cross-functional initiatives to enhance operational readiness by developing On-call Ops Tools, comprehensive runbooks, and training materials."
      ]
    },
    {
      company: "PatientPop",
      role: "Frontend Software Engineer",
      period: "Jul 2021 - Dec 2022",
      location: "Santa Monica, CA",
      highlights: [
        "Developed PatientPop management settings, including User and Roles pages, by integrating VueJS components with backend services via VueX.",
        "Achieved over 90% test coverage by creating Unit Tests (Jest) for VueJS components and Cypress tests for StorybookJS.",
        "Collaborated with cross-functional teams including Product Designers, UX/UI Designers, and Project Managers to plan sprints and refine development processes.",
        "Coordinated sprint planning with SaaS, Automation, and Dashboard teams to deliver prioritized features using agile methodologies."
      ]
    }
  ],
  education: [
    {
      school: "University of Southern California",
      degree: "Master of Science, Global Medicine",
      courses: [
        "Healthcare Informatics",
        "Epidemiology"
      ]
    },
    {
      school: "University of California, Los Angeles",
      degree: "Bachelor of Science, Biological Sciences",
      courses: [
        "Mathematics for Life Scientists",
        "Statistics for Life Scientists",
        "Laboratory & Scientific Methodology"
      ]
    },
    {
      school: "Google",
      degree: "Google AI Essentials Specialization",
      year: "Oct 2025",
      courses: [
        "Maximize Productivity With AI Tools",
        "Discover the Art of Prompting",
        "Use AI Responsibly",
        "Stay Ahead of the AI Curve"
      ]
    },
    {
      school: "Galvanize",
      degree: "Advanced, Full-Stack Software Engineering Program",
      courses: [
        "1000+ hour residency in SDLC and production-grade engineering",
        "Full-stack architecture, microservices, and scalable API design"
      ]
    }
  ],
  skills: [
    {
      name: "Frontend",
      skills: ["CSS3", "Cypress", "HTML5", "JavaScript", "React", "Redux", "TypeScript", "VueJS", "VueX", "Webpack"]
    },
    {
      name: "Backend",
      skills: ["Express", "GraphQL", "Java", "Microservices", "Node.js", "NoSQL (DDB)", "Python", "SQL (MySQL, Postgres)"]
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS CloudFormation", "AWS CloudWatch", "AWS DynamoDB", "AWS EC2", "AWS Lambda", "AWS S3", "Docker", "Jenkins"]
    }
  ]
};
