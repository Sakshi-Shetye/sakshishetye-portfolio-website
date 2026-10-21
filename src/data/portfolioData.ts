import { EducationItem, SkillCategory, ProjectItem, ExperienceItem, AchievementItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Sakshi Shetye",
  role: "Computer Engineering Student & Aspiring Software Engineer",
  tagline: "Engineering ideas into meaningful digital experiences.",
  bio: "Computer Engineering student exploring software development, AI-powered applications, and creative solutions to real-world problems.",
  aboutDetailed: "I'm Sakshi, a Computer Engineering student passionate about software development, AI-assisted applications, and creative problem-solving. My journey combines hands-on projects, internships, continuous learning, and the curiosity to explore new technologies.",
  email: "sakshishetyecmpn@gmail.com",
  college: "Atharva College of Engineering, Mumbai",
  location: "Mumbai, Maharashtra, India",
  github: "https://github.com/Sakshi-Shetye",
  linkedin: "https://linkedin.com/in/sakshi-shetye",
  avatarImage: "/src/assets/images/hero_developer_avatar_1792561189105.jpg",
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "be-cmpn",
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Atharva College of Engineering",
    location: "Mumbai, Maharashtra",
    period: "September 2024 – June 2027",
    highlights: [
      "Focusing on Core Computer Science: Algorithms, Database Systems, Cloud Computing, and AI/ML architectures.",
      "Active participant in technical symposiums, research publications, and national innovation competitions.",
      "Developing production-ready web applications and exploring distributed systems."
    ]
  },
  {
    id: "diploma-it",
    degree: "Diploma in Information Technology",
    institution: "Vidyalankar Polytechnic",
    location: "Mumbai, Maharashtra",
    period: "June 2021 – June 2024",
    highlights: [
      "Graduated with rigorous foundation in Object-Oriented Programming, Web Technologies, and Database Management.",
      "Lead developer for final-year capstone project VGuideMaster, published in an international research journal.",
      "Hands-on coursework in Advanced Java, PHP, Laravel, C++, and Linux system administration."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming",
    description: "Core algorithmic thinking, data structures, and object-oriented architecture.",
    skills: ["Java", "C++", "JavaScript", "Advanced Java", "Object-Oriented Programming"]
  },
  {
    id: "web-dev",
    name: "Web Development",
    description: "Building responsive, modern, client-side & full-stack web applications.",
    skills: ["HTML5", "CSS3 / Tailwind", "React.js", "TypeScript", "Node.js", "PHP", "Laravel"]
  },
  {
    id: "databases",
    name: "Databases",
    description: "Relational schema design, querying, and real-time document storage.",
    skills: ["SQL", "MySQL", "Firebase Firestore", "Database Indexing", "Relational Modeling"]
  },
  {
    id: "ai-apis",
    name: "AI and APIs",
    description: "Integrating modern LLMs, embedding pipelines, REST endpoints, and prompt workflows.",
    skills: ["REST APIs", "Ollama / Llama", "Gemini API", "Hugging Face", "LangChain", "Mistral", "ChatGPT", "Prompt Engineering"]
  },
  {
    id: "tools",
    name: "Tools and Practices",
    description: "Collaborative software engineering, version control, and design prototyping.",
    skills: ["Git", "GitHub", "SDLC", "Agile / Scrum", "Figma", "Canva", "Postman", "VS Code"]
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "mysanmarg",
    title: "MySANmarg",
    subtitle: "Rural Vehicle Assistance & Employment Platform",
    description: "A rural vehicle assistance and employment platform connecting users with nearby mechanics for breakdown support across multiple vehicle types while creating opportunities for local service providers.",
    extendedDescription: "MySANmarg bridges a critical infrastructure gap in semi-urban and rural transit corridors. When vehicles break down in remote areas, standard road services often fail to reach. MySANmarg leverages geographic radius mapping, live geolocation via Leaflet, and a decentralized mechanic registry so commuters get verified rapid assistance while rural mechanics receive reliable local service requests.",
    technologies: ["React.js", "Node.js", "Firebase", "Leaflet API", "Stripe Payment Gateway"],
    imageSrc: "/src/assets/images/project_mysanmarg_map_1792561192175.jpg",
    visualConcept: "Connected road network, service locations, and a clean map-inspired interface.",
    features: [
      "Real-time geolocation mapping connecting stranded commuters to closest verified mechanics",
      "Multi-vehicle support: two-wheelers, four-wheelers, tractors, and agricultural transport",
      "Stripe payment gateway integration for secure escrow and direct payments",
      "Local employment creation dashboard empowering regional mechanics with digital bookings",
      "Selected among top 55 teams out of 350+ entries nationwide at Tantravihar National Project Competition"
    ],
    demoType: "breakdown-map"
  },
  {
    id: "mockpilot",
    title: "MockPilot",
    subtitle: "AI-Powered Interactive Interview Simulator",
    description: "An AI-powered mock interview platform with live subtitles, speech evaluation, and interactive interview simulation tailored to technical and behavioral rounds.",
    extendedDescription: "MockPilot simulates realistic technical engineering interviews with real-time audio interaction, automated speech-to-text live subtitles, and structured feedback on clarity, pacing, and technical depth. Built with VAPI voice integration and React, it empowers candidates to overcome interview anxiety with repeatable simulation.",
    technologies: ["React.js", "Node.js", "VAPI", "Tailwind CSS", "Firebase"],
    imageSrc: "/src/assets/images/project_mockpilot_interview_1792561192729.jpg",
    visualConcept: "Futuristic interview workspace with conversation panels and abstract AI interface elements.",
    features: [
      "Interactive voice-driven AI interviewer with conversational turn-taking",
      "Live closed-caption speech transcription and audio waveform visualization",
      "Structured rubrics scoring technical precision, answer conciseness, and communication clarity",
      "Session history with actionable improvement notes stored securely in Firebase"
    ],
    demoType: "interview-pilot"
  },
  {
    id: "vguidemaster",
    title: "VGuideMaster",
    subtitle: "Web-Based Campus Management System",
    description: "A comprehensive web-based campus management system with dedicated portals for students, teachers, parents, and administrators, accompanied by published research.",
    extendedDescription: "Designed and built during diploma studies to solve fragmented academic administration. VGuideMaster centralizes attendance tracking, marks entry, internal announcements, and parent-teacher communication within role-segregated portals with strict access boundaries.",
    technologies: ["Laravel", "SQL", "JavaScript", "PHP", "Bootstrap"],
    imageSrc: "", // Custom styled SVG / interactive view
    visualConcept: "A modern digital campus with interconnected interface panels and role-based workflows.",
    features: [
      "Four distinct role-based portals: Student, Faculty, Parent, and Campus Administrator",
      "Automated attendance recording and real-time attendance percentage alerts",
      "Examination marks entry, transcript generation, and institutional circulars",
      "Formally peer-reviewed and published in the International Journal of Research Publication and Reviews (March 2024)"
    ],
    demoType: "campus-portal"
  },
  {
    id: "mindmate",
    title: "MindMate",
    subtitle: "AI-Based Mental Wellness Assistant",
    description: "An AI-based mental wellness assistant that provides supportive, empathetic, interactive responses and guided self-reflection exercises in a soothing environment.",
    extendedDescription: "MindMate was developed to offer a safe, confidential digital space for students experiencing academic burnout and stress. Operating locally via Ollama / Llama models to safeguard user privacy, it provides thoughtful coping reflections, guided breathing prompts, and sentiment-aware responses.",
    technologies: ["Ollama API", "React.js", "Tailwind CSS", "Llama 3"],
    imageSrc: "", // Custom styled SVG / interactive view
    visualConcept: "Calm digital assistant interface with soft blue and lavender lighting and mindful reflection.",
    features: [
      "Empathetic conversation flow tuned with supportive system prompts",
      "Local LLM inference via Ollama ensuring zero chat telemetry or data sharing",
      "Interactive mood tracker and mindfulness check-in prompts",
      "Clean, distraction-free interface with gentle lavender visual aesthetics"
    ],
    demoType: "wellness"
  },
  {
    id: "process-scheduler",
    title: "ProcessSchedule Calculator",
    subtitle: "CPU Scheduling Algorithm Visualizer",
    description: "A CPU scheduling tool that calculates waiting time, turnaround time, and visualizes CPU execution sequence using classic scheduling algorithms.",
    extendedDescription: "Built to provide computer engineering students with an intuitive, interactive way to understand operating system CPU scheduling mechanics. Computes exact metrics for First Come First Serve (FCFS), Shortest Job First (SJF), and Round Robin algorithms alongside real-time Gantt charts.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Algorithms"],
    imageSrc: "", // Custom styled SVG / interactive view
    visualConcept: "A clean process timeline with moving nodes, timing metrics, and scheduling Gantt charts.",
    features: [
      "Interactive algorithm switcher: First Come First Serve (FCFS) & Round Robin",
      "Dynamic process queue configuration with custom arrival and burst times",
      "Interactive SVG Gantt chart generator with timeline markers",
      "Precise computation of Average Waiting Time (AWT) and Average Turnaround Time (TAT)"
    ],
    demoType: "cpu-scheduling"
  },
  {
    id: "cardiocare",
    title: "CardioCare",
    subtitle: "Heart Disease Prediction & Medical Guidance Chatbot",
    description: "A student AI/ML project involving heart disease prediction from clinical health parameters and a supportive chatbot for medical report questions and related health guidance.",
    extendedDescription: "CardioCare applies supervised machine learning models trained on cardiovascular health datasets to evaluate risk factors based on user-entered clinical attributes (blood pressure, cholesterol, resting ECG, max heart rate). Includes an educational guidance chatbot that explains medical terminology in plain language.",
    technologies: ["React.js", "Python", "Machine Learning", "Firebase", "Scikit-Learn"],
    imageSrc: "/src/assets/images/project_cardiocare_analytics_1792561191541.jpg",
    visualConcept: "Abstract healthcare data interface with readable charts and connected clinical panels.",
    features: [
      "Clinical risk factor evaluation based on standard cardiovascular diagnostic parameters",
      "Interactive patient metric input panel with healthy baseline comparisons",
      "Educational AI query assistant explaining lab terminologies and preventative lifestyle tips",
      "Clear ethical disclaimer emphasizing educational, non-clinical scope"
    ],
    demoType: "cardiocare-analytics"
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "blockseblock",
    role: "AI & Decentralized Technology Intern",
    company: "BlockseBlock",
    period: "August 2025 – September 2025",
    highlights: [
      "Engineered SafeBuy-AI, Mall Customers Analysis, and MindMate projects using modern full-stack workflows.",
      "Integrated Ollama/Llama open-weights models and Google Gemini API for AI-assisted workflows and automated text processing.",
      "Conducted prompt engineering and evaluated LLM response consistency for generative and conversational assistants.",
      "Collaborated on decentralized application design patterns and resilient API integrations."
    ],
    skillsUsed: ["Ollama / Llama", "Gemini API", "Prompt Engineering", "Python", "React.js", "AI Evaluation"]
  },
  {
    id: "hertzsoft",
    role: "Full Stack Web Development Intern",
    company: "Hertzsoft Technologies Pvt. Ltd.",
    period: "June 2022 – July 2022",
    highlights: [
      "Developed a responsive Villa Booking System frontend using semantic HTML5, modern CSS3, and JavaScript.",
      "Engineered an interactive JavaScript-based calculator and dynamic booking calculation algorithms.",
      "Implemented mobile-first cross-browser UI components and optimized client-side performance.",
      "Participated in sprint reviews, code refactoring, and user interface testing."
    ],
    skillsUsed: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX Testing"]
  }
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: "research-paper",
    title: "Published Research Paper: VGuideMaster",
    organization: "International Journal of Research Publication and Reviews (IJRP)",
    date: "March 2024",
    category: "Publication",
    description: "Authored and published research paper titled 'VGuideMaster (A Campus Management Website)', detailing the architectural design, multi-role security framework, and database efficiency for academic institutions."
  },
  {
    id: "tantravihar",
    title: "National Finalist: Tantravihar Project Display",
    organization: "Tantravihar National Level Project Competition",
    date: "2024",
    category: "Competition",
    description: "Selected among the top 55 teams out of 350+ entries nationwide to showcase MySANmarg, an innovative rural vehicle breakdown assistance and local employment platform."
  },
  {
    id: "iirs-isro",
    title: "AI/ML for Geodata Analytics",
    organization: "Indian Institute of Remote Sensing (IIRS), ISRO",
    date: "2024",
    category: "Certification",
    description: "Successfully completed intensive government technical training program on applying Artificial Intelligence and Machine Learning techniques to satellite imagery and geospatial data analysis."
  },
  {
    id: "scaler-react",
    title: "React Bootcamp Certification",
    organization: "Scaler",
    date: "2023",
    category: "Certification",
    description: "Comprehensive hands-on training covering modern React principles, state management, component architecture, hooks lifecycle, and performance optimization."
  },
  {
    id: "tata-genai",
    title: "GenAI Powered Data Analytics Job Simulation",
    organization: "TATA Insights & Quants",
    date: "2024",
    category: "Certification",
    description: "Completed practical job simulation on leveraging Generative AI to analyze business metrics, craft executive summaries, and automate exploratory data queries."
  },
  {
    id: "blockseblock-milestone",
    title: "AI & Decentralized Internship Completion",
    organization: "BlockseBlock",
    date: "September 2025",
    category: "Internship",
    description: "Recognized for high-impact contributions across AI-assisted application pipelines, customer clustering, and mental wellness tooling."
  },
  {
    id: "hertzsoft-milestone",
    title: "Full Stack Web Development Internship",
    organization: "Hertzsoft Technologies",
    date: "July 2022",
    category: "Internship",
    description: "Commended for delivering production-ready responsive frontend interfaces and dynamic web calculator modules ahead of schedule."
  }
];
