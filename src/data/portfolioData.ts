export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  tech: string[];
  role: string;
  status: 'In Progress' | 'Concept & Prototype' | 'Active Exploration';
  link?: string;
}

export interface Pillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: 'Shrinidhi Kotagiri',
  shortName: 'Shrinidhi',
  title: 'CSE (AI/ML) Undergraduate · Builder & Community Explorer',
  location: 'Bengaluru, India',
  education: 'B.Tech in Computer Science & Engineering (Specialization in AI & ML)',
  year: '1st Year Undergraduate',
  tagline: 'People. Ideas. Technology. Possibilities.',
  subtagline:
    'Exploring what happens when technical curiosity meets entrepreneurship, community building, and real-world experiences.',
  manifesto:
    "I'm not someone who wants to limit herself to just coding or academics. I'm equally interested in understanding people, bringing people together, organizing experiences, exploring businesses, and building things that solve real problems.",
  socials: {
    github: 'https://github.com/shrinidhirk0306-ui',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    email: 'shrinidhirk0306@gmail.com',
  },
};

export const THREE_PILLARS: Pillar[] = [
  {
    id: 'technology',
    number: '01',
    title: 'Technology & Building',
    subtitle: 'From Code to Functional Products',
    description:
      'Immersed in Artificial Intelligence, Machine Learning, and software engineering. I find joy in taking an abstract idea, architecting the solution, and shipping something tangible that solves actual friction.',
    highlights: [
      'Machine Learning pipelines & predictive modeling',
      'Full-stack web applications & rapid prototyping',
      'Data-driven insights & problem discovery',
    ],
  },
  {
    id: 'people',
    number: '02',
    title: 'People & Communities',
    subtitle: 'Cross-Domain Human Perspectives',
    description:
      'Fascinated by meeting people from completely different walks of life — founders, doctors, advocates, engineers, athletes, and creatives. Understanding what motivates them leads to the most original ideas.',
    highlights: [
      'Connecting people with complementary ambitions',
      'Event operations & community building in Bengaluru',
      'Deep listening & cross-disciplinary curiosity',
    ],
  },
  {
    id: 'business',
    number: '03',
    title: 'Business & Ventures',
    subtitle: 'Turning Value into Viability',
    description:
      'My long-term ambition is to build something meaningful of my own. I seek to master both halves of modern creation: the technology that enables the product, and the human psychology that gives it purpose.',
    highlights: [
      'Startup business models & market dynamics',
      'Product strategy & user-centric experiences',
      'Execution discipline & iterative experimentation',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'goalnetwork',
    title: 'GoalNetwork',
    tagline: 'Intentional networking rooted in shared ambitions, not superficial job titles.',
    category: 'Product Concept & Platform',
    summary:
      'A social-discovery platform designed around what people are actively building and striving toward, facilitating collaborations between complementary thinkers.',
    problem:
      'Traditional professional networks feel transactional and static, organized around past credentials rather than present goals and shared creative pursuits.',
    solution:
      'Matches students, founders, and creators based on active goals, technical skills, and collaborative interests, enabling natural and high-trust introductions.',
    tech: ['React', 'TypeScript', 'Node.js', 'AI Matching Logic', 'Tailwind CSS'],
    role: 'Concept, Product Design & Architecture',
    status: 'In Progress',
  },
  {
    id: 'quickbite',
    title: 'Quickbite',
    tagline: 'Eliminating the chaos of campus dining through smart queue management.',
    category: 'Campus Solution & Full Stack',
    summary:
      'A streamlined digital ordering and kitchen display system built specifically to eliminate peak-hour canteen overcrowding in college environments.',
    problem:
      'Students and faculty lose 20-30 minutes of limited break time waiting in crowded canteen queues, while kitchen staff face irregular order surges.',
    solution:
      'A mobile-first ordering interface with real-time pickup status, slot prediction, and inventory tracking to smoothen kitchen throughput.',
    tech: ['Web Application', 'Real-Time State', 'Mobile-Responsive UI', 'State Management'],
    role: 'Full-Stack Development & UX Flow',
    status: 'In Progress',
  },
  {
    id: 'student-performance',
    title: 'Student Performance Predictor',
    tagline: 'Predictive machine learning model assessing academic trajectories and early intervention points.',
    category: 'AI / Machine Learning',
    summary:
      'An analytical AI system analyzing multi-variate factors such as study consistency, attendance, and past assessments to predict outcomes and suggest personalized improvements.',
    problem:
      'Academic feedback is often retrospective when it is too late to adjust study habits or provide timely mentorship.',
    solution:
      'Applied supervised learning algorithms to identify risk patterns early, offering actionable indicators for both learners and educators.',
    tech: ['Python', 'Scikit-Learn', 'Pandas & NumPy', 'Data Visualization', 'ML Evaluation'],
    role: 'Data Analysis, Model Training & Feature Engineering',
    status: 'Concept & Prototype',
  },
];

export const COMMUNITY_EXPERIENCES = [
  {
    role: 'Community & Event Operations',
    context: 'Tech & Builder Ecosystem · Bengaluru',
    description:
      'Hands-on experience organizing community gatherings, participant outreach, and coordinating operational logistics. Focused on creating welcoming atmospheres where organic conversations flourish.',
    takeaway: 'Confidence, communication agility, and understanding the mechanics of how communities gather momentum.',
  },
  {
    role: 'Cross-Domain Conversations',
    context: 'Founders, Doctors, Engineers, Creatives',
    description:
      'Deliberately seeking out conversations outside the standard tech bubble to understand how professionals in healthcare, legal, venture, and arts tackle complex problem-solving.',
    takeaway: 'Broadened mental models and the realization that the best tech ideas borrow principles from other disciplines.',
  },
  {
    role: 'Active B.Tech Student in AI/ML',
    context: 'Academic & Project Exploration',
    description:
      'Balancing academic foundations in computer science with real-world project builds, hackathons, and technical self-study.',
    takeaway: 'Theory without building is fragile; building without fundamentals is shallow. Striving for both.',
  },
];
