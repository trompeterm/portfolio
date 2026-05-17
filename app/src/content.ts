import check from './assets/check.jpg'
import grad from './assets/grad.jpg'
import robot from './assets/robot.jpeg'
import sit from './assets/sit.jpg'
import speaking from './assets/speaking.jpg'
import trees from './assets/trees.jpeg'
import winners from './assets/winners.jpg'

export type Project = {
  name: string
  summary: string
  impact: string
  stack: string[]
}

export type TimelineItem = {
  title: string
  org: string
  period: string
  detail: string
}

export type EducationItem = {
  degree: string
  school: string
  meta: string
}

export type SkillGroup = {
  category: string
  items: string[]
}

export type InlinePhoto = {
  src: string
  alt: string
}

export const profile = {
  name: 'Miles Trompeter',
  title: 'B.S. Computer Science student, future M.S. Machine Learning student',
  location: 'Milwaukee School of Engineering',
  summary:
    'B.S. Computer Science student at Milwaukee School of Engineering with a strong background in AI, robotics, and full-stack development. Continuing to an M.S. in Machine Learning and focused on building practical systems with teammates and independently.',
  availability: 'Available for internships, co-ops, and full-time opportunities',
  email: 'trompeterm@msoe.edu',
  phone: '(414) 731-1022',
  linkedin: 'https://linkedin.com/in/miles-trompeter/',
}

export const highlights = [
  {
    label: 'Focus',
    value: 'AI, ML, and full-stack development',
  },
  {
    label: 'Strengths',
    value: 'Python, TypeScript, React, FastAPI, LangGraph',
  },
  {
    label: 'Involvement',
    value: 'Active contributor to AI Club and student organizations',
  },
]

export const projects: Project[] = [
  {
    name: 'Lescribe | MSOE AI Club Innovation Lab Competition (Persistent Systems)',
    summary:
      'Generated ICD-10-CM and CPT medical codes from doctor-patient conversations. Designed a LangGraph agent graph to assign codes. Deployed a Databricks app with dashboards and alerts.',
    impact:
      'Assigned medical codes in real time with 91% accuracy. Team won first place in the competition.',
    stack: ['Databricks', 'LangGraph', 'RAG', 'FastAPI', 'React'],
  },
  {
    name: 'EnergyAI',
    summary:
      'Individual full-stack recommendation system for energy drink preferences with a React/TypeScript frontend and Python FastAPI backend.',
    impact:
      'Implemented Supabase-backed user accounts, product data, and fridge inventory tracking with an embedding-based recommendation model.',
    stack: ['React', 'TypeScript', 'FastAPI', 'Supabase', 'Python'],
  },
  {
    name: 'Qual-V | MSOE AI Club Innovation Lab Competition (Xorbix)',
    summary:
      'Created an autonomous quality assurance system that can detect product defects in real time. Trained YOLO models for product detection and classification. Designed a post-training pipeline in Databricks to integrate human-in-the-loop feedback.',
    impact:
      'Identified defects with 96% accuracy. Team won first place in the competition.',
    stack: ['YOLO', 'Databricks', 'ML', 'LiveKit', 'Computer Vision', 'Python'],
  },
]

export const educationPhotos: InlinePhoto[] = [
  {
    src: grad,
    alt: 'Graduation portrait outdoors in a cap and gown.',
  },
  {
    src: check,
    alt: 'Celebratory check presentation at a competition.',
  },
]

export const projectPhotos: InlinePhoto[] = [
  {
    src: trees,
    alt: 'Trees and sky at a campus walkway.',
  },
  {
    src: robot,
    alt: 'Robotic hardware on display.',
  },
]

export const skillPhotos: InlinePhoto[] = [
  {
    src: sit,
    alt: 'Casual seated portrait.',
  },
]

export const involvementPhotos: InlinePhoto[] = [
  {
    src: speaking,
    alt: 'Miles speaking at a podium during a presentation.',
  },
]

export const workPhotos: InlinePhoto[] = [
  {
    src: winners,
    alt: 'Project team holding a first place check on stage.',
  },
]

export const education: EducationItem[] = [
  {
    degree: 'B.S. Computer Science',
    school: 'Milwaukee School of Engineering',
    meta: 'GPA 3.84 | Expected December 2027',
  },
  {
    degree: 'M.S. Machine Learning',
    school: 'Milwaukee School of Engineering',
    meta: 'Expected Summer 2028',
  },
]

export const skills: SkillGroup[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'C/C++', 'R', 'SQL', 'Assembly', 'TypeScript'],
  },
  {
    category: 'Frameworks & Tools',
    items: ['Git', 'React', 'FastAPI', 'LangGraph', 'Databricks', 'CI/CD', 'Linux', 'Enterprise Architect'],
  },
  {
    category: 'AI / ML',
    items: ['Computer Vision', 'Supervised ML', 'LLMs', 'NLP', 'RAG', 'Agents'],
  },
]

export const involvement: TimelineItem[] = [
  {
    title: 'Member',
    org: 'AI Club',
    period: 'September 2024 - Present',
    detail: '10 hrs per wk',
  },
  {
    title: 'Member',
    org: 'MSOE Pep Band & Jazz Band',
    period: 'September 2024 - Present',
    detail: '5 hrs per wk',
  },
  {
    title: 'Member',
    org: 'Rock Climbing Club',
    period: 'September 2025 - Present',
    detail: '5 hrs per wk',
  },
  {
    title: 'Former Scout',
    org: 'Boy Scouts of America',
    period: 'September 2017 - October 2023',
    detail: 'Eagle Scout earned June 2022',
  },
  {
    title: 'Controls Team Lead',
    org: 'FIRST Robotics 3197 HexHounds',
    period: 'January 2021 - March 2024',
    detail: 'High school robotics leadership',
  },
]

export const work: TimelineItem[] = [
  {
    title: 'Cashier',
    org: "Pick 'n Save",
    period: 'September 2022 - Present',
    detail: '40 hrs per wk during summer',
  },
]
