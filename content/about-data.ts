export type MapAchievement = {
  id: string;
  event: string;
  city: string;
  country: string;
  description: string;
  latitude: number;
  longitude: number;
};

export type Experience = { company: string; role: string; dates: string; location: string; bullets: string[] };
export type Education = { degree: string; institution: string; dates: string; bullets: string[] };
export type SkillGroup = { category: string; skills: string[] };

export const achievements: MapAchievement[] = [
  { id: 'sih-2023', event: 'Smart India Hackathon 2023', city: 'Chandigarh', country: 'India', description: 'Achieved first place from 5,000+ entries for a government contact-center knowledge management tool.', latitude: 30.7333, longitude: 76.7794 },
  { id: 'icccee-2023', event: 'IEEE ICCCEE 2023', city: 'Pune', country: 'India', description: 'Proposed a quadtree system for fair, automatically demarcated constituency boundaries.', latitude: 18.5204, longitude: 73.8567 },
  { id: 'fao-2024', event: 'FAO-CAAS Agriculture Hackathon 2024', city: 'Sanya', country: 'China', description: 'Awarded second place for a unique voice-driven AI system connecting farmer opinions to policymakers.', latitude: 18.2431, longitude:  104.505 },
  { id: 'pre-acl-2025', event: 'Pre-ACL Workshop 2025', city: 'Copenhagen', country: 'Denmark', description: 'Presented research on memorized solutions and model self-knowledge about reasoning ability.', latitude: 55.6761, longitude: 12.5683 },
  { id: 'naacl-2025', event: 'NAACL Conference 2025', city: 'Albuquerque', country: 'USA', description: 'Shared a methodology for studying LLM self-knowledge and capability awareness.', latitude: 35.0844, longitude: -101.6504 },
  { id: 'acl-2025', event: 'ACL Conference 2025', city: 'Vienna', country: 'Austria', description: 'Proposed TeXpert, a benchmark for natural-language prompts that generate scientific LaTeX.', latitude: 48.2082, longitude: 16.3738 },
  { id: 'lxmls-2025', event: 'Lisbon Machine Learning Summer School (LxMLS 2025)', city: 'Lisbon', country: 'Portugal', description: 'Presented a method quantifying LLM self-knowledge using generation-validation consistency.', latitude: 38.7223, longitude: -9.1393 },
  { id: 'zurich-2026', event: 'Zurich GenAI Awards 2026', city: 'Zurich', country: 'Switzerland', description: 'Won 3rd place in Impact Achiever for a trustworthy voice AI system connecting farmer opinions to policymakers.', latitude: 47.3769, longitude: 8.5417 },
  { id: 'icaart-2026', event: 'ICAART Conference 2026', city: 'Marbella', country: 'Spain', description: 'Presented idempotent-driving constraints and i-Check, improving response stability while reducing cost.', latitude: 36.5101, longitude: -4.8824 },
  { id: 'iaseai-2026', event: 'IASEAI Conference 2026', city: 'Paris', country: 'France', description: 'Discussed LLM generalization and the inconsistency of feasibility assessments at UNESCO headquarters.', latitude: 48.8566, longitude: 2.3522 },
  { id: 'ecampus-2026', event: 'eCampus Research Collaboration 2026', city: 'Novedrate', country: 'Italy', description: 'Research collaboration with Prof. Antonio Luca Alfeo on ontology frameworks and LLMs', latitude: 45.6997, longitude: 9.1209 },
  { id: 'icpram-2026', event: 'ICPRAM Conference 2026', city: 'Marbella', country: 'Spain', description: 'Presented research on knowledge graphs for improving self-detection of LLM hallucinations.', latitude: 36.5101, longitude: -4.8824 },
  { id: 'websci-2026', event: 'ACM WebSci Conference 2026', city: 'Braunschweig', country: 'Germany', description: 'Explored whether language models know when and what to search through web-focused behavior.', latitude: 52.2689, longitude: 10.5268 },
  { id: 'icra-2026', event: 'ICRA Conference 2026', city: 'Vienna', country: 'Austria', description: 'Presented industry work from KnowledgeVerse AI for academic discussion.', latitude: 48.2082, longitude: 16.3738 },
  { id: 'sigir-2026', event: 'SIGIR Conference 2026', city: 'Melbourne', country: 'Australia', description: 'Presented research benchmarking LLM information integration from web sources in low-resource environments.', latitude: -37.8136, longitude: 144.9631 },
  { id: 'eccv-2026', event: 'ECCV Conference 2026', city: 'Malmo', country: 'Sweden', description: 'Spoke about a novel concept-level LLM unlearning benchmarking targeting the removal of harmful intents and preserving overlapping benign capabilities.', latitude: 55.6059, longitude: 13.0007 },
  { id: 'princeton-2026', event: 'ICWSM Global Initiative 2026', city: 'Princeton', country: 'USA', description: 'Collaboration with Prof. Manoel Ribeiro at Princeton University on analysing moderation patterns and failures on Moltbook', latitude: 40.3582, longitude: -74.6667 },
  { id: 'ucla-2026', event: 'MS in CS at UCLA', city: 'Los Angeles', country: 'USA', description: 'Pursuing an MS degree at UCLA in computer science with a focus on safe and trustworthy AI', latitude: 34.0522, longitude: -115.2437 }
];

export const experiences: Experience[] = [
  { company: 'Mastercard', role: 'Software Engineer II', dates: 'Jan 2026 – Aug 2026', location: 'Pune, India', bullets: ['Redesigned the data architecture for the Click2Pay and Secure Card-on-File systems, serving over 14 million transactions per month.'] },
  { company: 'Mastercard', role: 'Software Engineer I', dates: 'Jun 2024 – Jan 2026', location: 'Pune, India', bullets: ['Integrated AI agents into Apache data flows, reducing transaction settlement and clearance time by nearly 35%.', 'Supported distributed automated billing batches handling over a million transactions in 6 global regions.'] },
  { company: 'KnowledgeVerse AI', role: 'AI Research Consultant', dates: 'Jun 2024 – Aug 2026', location: 'Atlanta, United States (Remote)', bullets: ['Led 5+ research projects on LLM benchmarks for trustworthiness and explainability, published in ACL and NAACL.', 'Built 80+ custom agentic AI workflows for critical client applications.'] },
  { company: 'Stride.ai', role: 'Applied Scientist Intern (NLP)', dates: 'Sep 2023 – Jun 2024', location: 'Bangalore, India', bullets: ['Led a scalable production NLP system processing 40,000 words in under 2 minutes across 17 domains.'] },
  { company: 'Barclays', role: 'Software Engineer Intern', dates: 'Jun 2023 – Aug 2023', location: 'Pune, India', bullets: ['Used SQL partitioning to reduce query time of post-trade transaction databases to less than 89% of the original.', 'Automated monitoring for 90+ million transactions across 35 distributed servers.'] },
  { company: 'Association for Socially Applicable Research', role: 'Data Analyst', dates: 'Mar 2023 – Jun 2023', location: 'Pune, India', bullets: ['Designed geocoded data-ingestion workflows supporting easy access to almost a million emergency health centres in India.'] }
];

export const education: Education[] = [
  { degree: 'M.S. Computer Science', institution: 'University of California, Los Angeles (UCLA)', dates: 'September 2026 – June 2028', bullets: ['Pursuing a Master’s degree focused on NLP and safe AI at the Henry Samueli School of Engineering.'] },
  { degree: 'Lisbon Machine Learning Summer School (LxMLS 2025)', institution: 'Instituto Superior Técnico', dates: 'July 2025', bullets: ['Grade: 4.0/4.0.', 'Invited with a full Google scholarship to present research on LLM self-knowledge.'] },
  { degree: 'B.E. Computer Engineering', institution: 'Pune Institute of Computer Technology', dates: 'July 2020 – April 2024', bullets: ['Grade: 9.78/10.', 'Recipient of the Late Ajay Prabhakar Nene Award and fellowship for the 1st rank among 8200 students across the University of Pune.'] }
];

export const skillGroups: SkillGroup[] = [
  { category: 'Artificial Intelligence', skills: ['Natural Language Processing', 'Large Language Models', 'Machine Learning', 'Agentic AI', 'Model Fine-Tuning', 'Model Benchmarking'] },
  { category: 'Programming Languages', skills: ['C++', 'Python', 'JavaScript', 'Unix/Linux'] },
  { category: 'Database Management', skills: ['SQL', 'SQL Server', 'NoSQL', 'Concurrency'] },
  { category: 'Data Science & Engineering', skills: ['Apache Hadoop', 'Apache NiFi', 'Apache Spark', 'Big Data', 'Data Analytics'] },
  { category: 'Web Development', skills: ['HTML', 'CSS', 'FastAPI', 'Flask', 'JavaScript Libraries','Git'] },
  { category: 'Cloud Computing', skills: ['AWS', 'Microsoft Azure', 'Docker'] },
  { category: 'Languages', skills: ['English', 'Marathi', 'Hindi', 'German', 'Japanese'] }
];
