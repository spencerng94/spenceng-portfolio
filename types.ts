
export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  year?: string;
  courses?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  experience: Job[];
  education: Education[];
  skills: SkillCategory[];
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: number;
  isTyping?: boolean;
}
