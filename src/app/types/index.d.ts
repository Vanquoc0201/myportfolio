interface Project {
  slug: string;
  title: string;
  shortDescription: string; 
  description: string;    
  image: string;          
  liveDemoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  role: string;
  challenges?: string[];
  solutions?: string[];
}

interface Skill {
  name: string;
  icon: string; 
  category: 'Frontend' | 'Backend' | 'Devops' | 'Tools' | 'Other';
}

export type { Project, Skill };