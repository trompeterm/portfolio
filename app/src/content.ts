export type Project = {
  name: string
  meta: string
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


export const profile = {
  name: 'Miles Trompeter',
  title: 'B.S. Computer Science student, future M.S. Machine Learning student',
  location: 'Milwaukee School of Engineering',
  summary:
    'B.S. Computer Science student at Milwaukee School of Engineering, continuing into an M.S. in Machine Learning. Developed and deployed systems spanning LLM agents, machine learning, and computer vision. Two first-place finishes in MSOE AI Club’s Innovation Lab competitions, with Data Engineer Intern experience at Brady Corporation.',
  availability: 'Available for internships, co-ops, and full-time opportunities',
  email: 'trompeterm@msoe.edu',
  github: 'https://github.com/trompeterm',
  linkedin: 'https://linkedin.com/in/miles-trompeter/',
}

export const highlights = [
  {
    label: 'Focus',
    value: 'LLM agents, machine learning, and computer vision',
  },
  {
    label: 'Strengths',
    value: 'Python, SQL, PyTorch, Databricks, LangGraph',
  },
  {
    label: 'Involvement',
    value: 'MSOE AI Club Technical Strategist and Mentor',
  },
]

export const projects: Project[] = [
  {
    name: 'Product Recommendation System',
    meta: 'Brady Corporation | Individual project | Summer 2026',
    summary:
      'Built a bipartite graph of account-product purchase history in Google BigQuery and computed account Jaccard similarities for a collaborative filtering baseline. Integrated region, account size, item co-occurrence, temporal significance, and purchase count to address cold-start accounts. Evaluated matrix factorization and DNN models in BigQuery ML.',
    impact:
      'Selected a custom neuro-collaborative filtering model, achieving 25.5% Mean Precision @1.',
    stack: ['Google BigQuery', 'BigQuery ML', 'SQL', 'Collaborative Filtering'],
  },
  {
    name: 'Lescribe — Multi-Agent Clinical Coding Assistant',
    meta: 'MSOE AI Club Innovation Lab Competition | Team of 5 | Spring 2026',
    summary:
      'Built a clinical state extraction agent to retrieve chief complaints, symptoms, diagnoses, and procedures from doctor-patient transcripts. Designed a multi-agent LangGraph pipeline with delegator, ICD/CPT coding, and aggregator agents enhanced by knowledge graph search and RAG. Deployed a scalable Databricks app and coding analytics dashboard with automated alerts to detect potential pandemics.',
    impact:
      'Won first place among 10 teams with 91% overall coding accuracy.',
    stack: ['Databricks', 'LangGraph', 'RAG', 'Knowledge Graphs', 'LLM Agents'],
  },
  {
    name: 'Qual-V — Computer Vision QA System',
    meta: 'MSOE AI Club Innovation Lab Competition | Team of 8 | Fall 2025',
    summary:
      'Created a real-time inference pipeline that processes frames from a LiveKit server. Trained YOLO models to classify products as damaged or intact and identify dents, holes, and scratches. Designed a Databricks post-training pipeline that integrates human-in-the-loop feedback to retrain and update model weights.',
    impact:
      'Won first place with 96.4% binary classification accuracy and 78.0% defect classification accuracy.',
    stack: ['YOLO', 'Databricks', 'ML', 'LiveKit', 'Computer Vision', 'Python'],
  },
]

export const education: EducationItem[] = [
  {
    degree: 'B.S. Computer Science',
    school: 'Milwaukee School of Engineering',
    meta: 'Math Minor | GPA 3.88 | Expected December 2027',
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
    items: ['Python', 'SQL', 'Java', 'C/C++', 'R', 'TypeScript'],
  },
  {
    category: 'AI / ML',
    items: ['PyTorch', 'Supervised ML', 'LLMs', 'NLP', 'RAG', 'Computer Vision', 'Agents'],
  },
  {
    category: 'Data & Cloud',
    items: ['Databricks', 'Google BigQuery', 'Apache Airflow'],
  },
  {
    category: 'Frameworks & Tools',
    items: ['Git', 'FastAPI', 'LangGraph', 'React'],
  },
]

export const involvement: TimelineItem[] = [
  {
    title: 'Executive Board (Technical Strategist), Mentor',
    org: 'MSOE AI Club',
    period: 'September 2024 - Present',
    detail: '7 hrs per wk',
  },
  {
    title: 'Member',
    org: 'Jazz Band',
    period: 'November 2024 - Present',
    detail: '3 hrs per wk',
  },
  {
    title: 'Member',
    org: 'Rock Climbing Club',
    period: 'September 2025 - Present',
    detail: '2 hrs per wk',
  },
  {
    title: 'Eagle Scout',
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
    title: 'Data Engineer Intern',
    org: 'Brady Corporation | Milwaukee, WI',
    period: 'May 2026 - August 2026',
    detail:
      'Maintained and optimized 15+ automated ETL pipelines using Python, SQL, and Apache Airflow to reliably move data from diverse sources into Google BigQuery. Created automated checks and balance reports to verify file counts and detect missing records, minimizing data incidents. Developed alerts for hung or long-running DAGs to save compute time and increase efficiency.',
  },
]
