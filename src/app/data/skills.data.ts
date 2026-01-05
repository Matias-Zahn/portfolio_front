import { SkillCategory } from '../models/skills.inteface';

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: 'Backend Core',
    icon: '⚡', 
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'NestJS' },
      { name: 'TypeScript' },
      { name: 'Java' } 
    ]
  },
  {
    name: 'Bases de Datos',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'Sequelize ORM' },
      { name: 'TypeORM' },
      { name: 'Normalización' }
    ]
  },
  {
    name: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'Angular' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5 / CSS3' },
      { name: 'JavaScript' }
    ]
  },
  {
    name: 'DevOps & Herramientas',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'Docker' },
      { name: 'Postman' },
      { name: 'Linux Terminal' }
    ]
  }
];