export type ContactLink = {
  label: string;
  href: string;
  kind: 'email' | 'linkedin' | 'scholar';
  hint: string;
};

export type ExperienceEntry = { organization: string; role: string; period: string; summary: string };
export type PublicationEntry = { title: string; authors: string; venue: string; year: string; month: number; url: string; contributions: string[] };
export type AwardEntry = { title: string; organization: string; year: string };
export type HighlightEntry = { year: string; text: string };

export const siteData = {
  // Your name appears in the navigation, browser title, and hero heading.
  name: 'Sahil Kale',
  // The short line immediately below your name; keep this concise and memorable.
  tagline: 'Building Trustworthy and Reliable AI',
  // The main professional description on the homepage. Use 2–3 sentences.
  bio: 'Hi! I am Sahil, an AI researcher and engineer working on trustworthy and reliable language models, with research spanning LLM self-knowledge, hallucination detection, uncertainty calibration, and AI-powered information retrieval. My work has been published at venues including NeurIPS, ACL, NAACL, and SIGIR, and I am currently pursuing an M.S. in Computer Science at UCLA following research and engineering roles at Mastercard and KnowledgeVerse AI. My main goal is to build AI systems that are powerful yet also trustworthy enough to actually help humans towards a more equitable future.\n\nI’m open to research collaborations and exploring AI research & engineering roles for 2027. Please feel free to reach out via email to connect!',
  // These links power the icon row. Change only href/hint when your contact details change.
  contactLinks: [
    { label: 'Email', href: 'mailto:sahilrkale05@gmail.com', kind: 'email', hint: 'sahilrkale05@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sahil-r-kale/', kind: 'linkedin', hint: 'linkedin.com/in/sahil-r-kale/' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=_Kho5oEAAAAJ', kind: 'scholar', hint: 'Google Scholar profile' }
  ] satisfies ContactLink[],
  // Add future work history here; the Experience page can render this same array.
  experience: [] satisfies ExperienceEntry[],
  publications: [
  {
    title: 'ConceptGuard: Benchmarking Context-Sensitive Unlearning in Large Language Models', authors: 'Sahil Kale, Ian Harris', month: 8,
    venue: 'Submitted to NeurIPS E&D 2026, Sydney, Australia',
    year: '2026',
    url: 'https://arxiv.org/abs/2608.20338',
    contributions: [
      'Enables LLM unlearning to be explored and gauged at the level of concepts, instead of sparse facts, with evaluation being intent-sensitive to maximize contextual separation and promote safer behavior',
    ],
  },
  {
    title: 'Local Information Access in Marathi: Evaluating LLM-Native Web Retrieval in a Low-Resource Environment', authors: 'Sahil Kale', month: 7,
    venue: 'ACM SIGIR Conference 2026, Melbourne, Australia',
    year: '2026',
    url: 'https://dl.acm.org/doi/abs/10.1145/3805712.3808534',
    contributions: [
      'Identifies challenges in AI-backed information retrieval for under-represented languages, isolating failure modes in translated global queries and natively crafted local information needs.',
    ],
  },
  {
    title: 'KnowRL: Teaching Language Models to Know What They Know', authors: 'Sahil Kale, Devendra Singh Dhami', month: 5,
    venue: 'Submitted to NeurIPS 2026, Sydney, Australia',
    year: '2026',
    url: 'https://arxiv.org/abs/2510.11407',
    contributions: [
      'Presents a framework that strengthens a model’s internal understanding of its own feasibility boundaries using only a small seed set and no external supervision, achieving gains of up to 28% in accuracy and 12% in F1.',
    ],
  },
  {
    title: 'Lie to Me: Knowledge Graphs for Robust Hallucination Self-Detection in LLMs', authors: 'Sahil Kale, Antonio Luca Alfeo', month: 3,
    venue: 'ICPRAM Conference 2026, Marbella, Spain',
    year: '2026',
    url: 'https://www.scitepress.org/PublicationsDetail.aspx?ID=RcMLaWCJ6gk=&t=1',
    contributions: [
      'Demonstrates that structuring LLM outputs as knowledge graphs significantly improves hallucination self-detection, achieving up to 16% higher accuracy and 20% better F1-score over existing methods.',
    ],
  },
  {
    title: 'i-Check: An Idempotence-Driven Optimisation Framework for AI Agents in Enterprise Workflows', authors: 'Sahil Kale, Yash Nikam, Vijaykant Nadadur', month: 3,
    venue: 'ICAART Conference 2026, Marbella, Spain',
    year: '2026',
    url: 'https://www.scitepress.org/PublicationsDetail.aspx?ID=6ar9EaV1/dM=&t=1',
    contributions: [
      'Introduces input constraints called idempotence-driving constraints for agents to achieve enhanced repeatability and consistency up to 90% across responses, while reducing costs by 37% in enterprise workflows.',
    ],
  },
  {
    title: 'Mirage of Mastery: Memorization Tricks LLMs into Artificially Inflated Self-Knowledge', authors: 'Sahil Kale', month: 2,
    venue: 'AAAI IASEAI Conference 2026, Paris, France',
    year: '2026',
    url: 'https://ojs.aaai.org/index.php/IASEAI/article/view/43032',
    contributions: [
      'Shows that LLMs can draw confidence from memorized solutions to infer artificially inflated self-knowledge about their reasoning ability, resulting in over 45% inconsistency in feasibility assessments.',
    ],
  },
  {
    title: 'Line of Duty: Evaluating LLM Self-Knowledge via Consistency in Feasibility Boundaries', authors: 'Sahil Kale, Vijaykant Nadadur', month: 4,
    venue: 'TrustAI Workshop @NAACL 2025, Albuquerque, USA',
    year: '2025',
    url: 'https://aclanthology.org/2025.trustnlp-main.10/',
    contributions: [
      'Introduces a methodology for obtaining intrinsic insights into LLM self-knowledge through consistency in self-defined feasibility boundaries.',
      'Found that even frontier models such as GPT-4o and Mistral Large are uncertain about their capabilities more than 80% of the time.',
    ],
  },
  {
    title: 'Future Confidence Distillation in Large Language Models', authors: 'Sahil Kale', month: 7,
  venue: 'Submitted to AAAI 2027, Montreal, Canada',
  year: '2026',
  url: 'https://arxiv.org/abs/2607.07626',
  contributions: [
    'Investigates how language models can improve their confidence estimation by distilling information about future states post answer generation.',
    'Shows how distilled predictors recover calibration improvement achieved by post-solution confidence, remain highly sample efficient, and transfer across domains'
  ],
},
{
  title: 'Designing Policy with Last-Mile Stakeholders: Connecting Ground-Level Farmer Insights to Indian Agrarian Policymakers with NLP', authors: 'Kasturi Pathak, Sahil Kale', month: 6,
  venue: 'ACM DIS Conference 2026, Singapore',
  year: '2026',
  url: 'https://dl.acm.org/doi/abs/10.1145/3800645.3812895',
  contributions: [
    'Explores how NLP and voice-based AI can connect ground-level farmer insights with policymakers, enabling last-mile perspectives to inform agricultural policy design and formulation.',
  ],
},
{
  title: 'Geospatial modeling study assessing population level accessibility to medical college hospitals in India', authors: 'Harsh Thakkar, Chaitanya Reddy, Varun Raj Passi, Aamir Miyajiwala, Sahil Kale, Ankit Raj, Siddhesh Zadey', month: 2,
  venue: 'Discover Public Health, Vol 23, 2026',
  year: '2026',
  url: 'https://link.springer.com/article/10.1186/s12982-026-01463-7',
  contributions: [
    'Uses geocoding and spatial modeling to assess accessibility to medical college hospitals across India.',
    'Presents the density of MCHs, median travel times, and Access Population Coverage (APC) across 36 states and 735 districts, revealing significant disparities in access'
  ],
},
{
  title: 'A secure and imperceptible communication system for sharing co-ordinate data', authors: 'Ranjeet Bidwe, Sahil Kale, Gautam Khaire, Jay Patankar, Deepak Mane, Suraj Sawant', month: 7,
  venue: 'Scientific Reports, Vol. 15, 2025',
  year: '2025',
  url: 'https://www.nature.com/articles/s41598-025-10071-5',
  contributions: [
    'Combines AES encryption with hash-driven multi-image steganography to enable secure and imperceptible transmission of high-volume military coordinate data.',
    'Evaluates the approach as a practical and computationally efficient solution for sensitive communication channels.',
  ],
},
{
  title: 'Look It Up: Analysing Internal Web Search Capabilities of Modern LLMs', authors: 'Sahil Kale', month: 12,
  venue: 'arXiv preprint',
  year: '2025',
  url: 'https://arxiv.org/abs/2511.18931',
  contributions: [
    'Investigates whether modern LLMs understand when external web search is necessary and what information they should search for.',
    'Examines the internal web-search behavior of language models as part of their broader ability to recognize and address knowledge gaps.',
  ],
},
// {
//   title: 'Assessing Population-level Accessibility to Medical College Hospitals in India: A Geospatial Modeling Study', authors: 'Harsh Thakkar, Chaitanya Reddy, Varun Raj Passi, Aamir Miyajiwala, Sahil Kale, Ankit Raj, Siddhesh Zadey', month: 12,
//   venue: 'medRxiv preprint',
//   year: '2024',
//   url: 'https://www.medrxiv.org/content/10.1101/2024.08.11.24311839v2',
//   contributions: [
//     'Proposes a geospatial modeling approach to assess population-level accessibility to MCHs across Indian states and rural vs. urban areas',
//     'Presents the density of MCHs, median travel times, and Access Population Coverage (APC) across 36 states and 735 districts, revealing significant disparities in access',
//   ],
// },
  {
    title: 'TeXpert: A Multi-Level Benchmark for Evaluating LaTeX Code Generation by LLMs', authors: 'Sahil Kale, Vijaykant Nadadur', month: 6,
    venue: 'Scholarly Document Processing Workshop @ ACL 2025, Vienna, Austria',
    year: '2025',
    url: 'https://aclanthology.org/2025.sdp-1.2/',
    contributions: [
      'Proposes TeXpert, a benchmark with natural-language prompts for generating LaTeX components of scientific documents across multiple difficulty levels.',
      'Shows that LLM performance remains poor on complex LaTeX generation despite strong performance on standard benchmarks.',
    ],
  },
  {
    title: 'FAQ-Gen: An automated system to generate domain-specific FAQs to aid content comprehension', authors: 'Sahil Kale, Gautam Khaire, Jay Patankar', month: 11,
    venue: 'Journal of Computer-Assisted Linguistic Research, Universitat Politècnica de València, Vol. 8, 2024',
    year: '2024',
    url: 'https://polipapers.upv.es/index.php/jclr/article/view/21178',
    contributions: [
      'Proposes an FAQ generation system using custom-built and fine-tuned text-to-text transformation models with self-curated algorithms for cognitive ranking of question-answer pairs.',
    ],
  },
  {
    title: 'A Modern Approach to Electoral Delimitation using the Quadtree Data Structure', authors: 'Sahil Kale, Gautam Khaire, Jay Patankar, Pujashree Vidap', month: 7,
    venue: 'IEEE ICCCEE Conference 2023, Pune, India',
    year: '2023',
    url: 'https://ieeexplore.ieee.org/document/10424677/',
    contributions: [
      'Proposes a novel system using the quadtree data structure to automatically demarcate constituency boundaries while satisfying the requirements for fair delimitation established by the US Supreme Court.',
    ],
  },
] satisfies PublicationEntry[],
  // Add honors or distinctions here; ready for a future About or CV page.
  awards: [] satisfies AwardEntry[],
  highlights: [
  { year: 'Sep 2026', text: 'Excited to start my M.S. in Computer Science at UCLA, focusing on NLP and safe AI.' },
  { year: 'Sep 2026', text: 'I was invited to present at the U&ME LLM Unlearning workshop at ECCV 2026 in Malmo, Sweden with a full €2,000 grant.' },
  { year: 'Jul 2026', text: 'I presented as one of only 1% of Indian authors at SIGIR 2026 in Melbourne supported by a $1,500 grant about low resource LLM-native web retrieval' },
  { year: 'Jun 2026', text: 'I was invited as a start-up representative for KnowledgeVerse AI and awarded $800 support at ICRA 2026 in Vienna, Austria' },
  { year: 'Jun 2026', text: 'My co-author, Kasturi presented our work on AI-backed techniques to connect farmers with policymakers at ACM DIS 2026 in Singapore.'},
  { year: 'May 2026', text: 'Presented research at ACM WebSci 2026 in Braunschweig, Germany on LLM web search capabilities with a $1,000 grant.' },
  { year: 'Apr 2026', text: 'My project placed 3rd after 2 rounds of heavy in-person scrutiny in the Impact Achiever category at the Zurich GenAI Awards.' },
  { year: 'Mar 2026', text: 'I spoke at ICAART 2026 on reliable LLM systems, achieving up to 90% response stability while reducing costs by 37%.' },
  { year: 'Mar 2026', text: 'My co-author, Dr. Luca Alfeo presented our research at ICPRAM 2026 on using knowledge graphs to improve LLM hallucination self-detection.' },
  { year: 'Feb 2026', text: 'Spoke at the IASEAI Conference at UNESCO in Paris among Nobel laureates on how memorization can artificially inflate LLM self-knowledge.' },
  { year: 'Feb 2026', text: 'Our geospatial modeling study was published in the prestigious Springer Discover Public Health journal.' },
  { year: 'Jan 2026', text: 'I was promoted to Software Engineer II at Mastercard, now working on architecture serving 14M+ transactions per month.' },
  { year: 'Aug 2025', text: 'Our paper introducing TeXpert, a benchmark for evaluating LLM-generated LaTeX was presented at ACL 2025 in Vienna' },
  { year: 'Jul 2025', text: 'My abstract on LLM self-awareness won me a €200 support award at the Pre-ACL workshop in Copenhagen.' },
  { year: 'Jul 2025', text: 'Attended the Lisbon Machine Learning Summer School with a $1,500 Google scholarship' },
  { year: 'Apr 2025', text: 'I presented research analysing consistency in LLM self-knowledge at the TrustAI workshop at NAACL 2025 in Albuquerque' },
  { year: 'Dec 2024', text: 'Our project, Avani, achieved second place in the "Pattern" track at the FAO China Youth Hackathon on Urban Agriculture' },
  { year: 'Jun 2024', text: 'Started working with KnowledgeVerse AI as an AI Research Consultant, leading research on trustworthy and explainable LLM systems.' },
  { year: 'Jun 2024', text: 'Joined Mastercard as a Software Engineer, working on large-scale distributed transaction and data systems.' },
  { year: 'Apr 2024', text: 'I graduated 1st among 8,200 B.E. Computer Engineering students across the University of Pune with a 9.78/10 grade.' },
  { year: 'Dec 2023', text: 'Our team won 1st place among 5,000+ entries at Smart India Hackathon 2023 for building a knowledge management system' },
  { year: 'Jun 2020', text: 'Started my bachelors in Computer Engineering at the Pune Institute of Computer Technology.' },
] satisfies HighlightEntry[]
};

export type SiteData = typeof siteData;
