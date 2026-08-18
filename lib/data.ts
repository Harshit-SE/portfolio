export const navLinks = [
  { href: "#about",         label: "About" },
  { href: "#skills",        label: "Skills" },
  { href: "#projects",      label: "Projects" },
  { href: "#experience",    label: "Experience" },
  { href: "#achievements",  label: "Achievements" },
  { href: "#contact",       label: "Contact" },
];

export const dropdownLinks = [
  { href: "#about",         icon: "◈", label: "About Me" },
  { href: "#projects",      icon: "⬡", label: "Projects" },
  { href: "#experience",    icon: "◎", label: "Experience" },
  { href: "#achievements",  icon: "★", label: "Achievements" },
  { href: "#contact",       icon: "✉", label: "Contact Me" },
];

export const skills = [
  {
    category: "Languages",
    color: "#FFD700",
    gameColor: "#00F5FF",
    items: ["Python", "C++", "SQL", "JavaScript"],
  },
  {
    category: "Backend",
    color: "#B46FFF",
    gameColor: "#A78BFA",
    items: ["Node.js", "Flask", "REST APIs", "Firebase", "Docker"],
  },
  {
    category: "Data Analytics",
    color: "#00F5A0",
    gameColor: "#00F5A0",
    items: ["Pandas", "NumPy", "Matplotlib", "EDA", "ETL Pipelines", "Statistical Analysis"],
  },
  {
    category: "AI / ML",
    color: "#FF8C00",
    gameColor: "#FF8C00",
    items: ["TensorFlow", "CNN", "scikit-learn", "XGBoost", "NLP", "LLMs", "Prompt Engineering"],
  },
  {
    category: "Mobile",
    color: "#06d6a0",
    gameColor: "#06d6a0",
    items: ["Flutter", "Firebase", "TensorFlow Lite", "Gemini API"],
  },
  {
    category: "Tools",
    color: "#7A8CA0",
    gameColor: "#64748B",
    items: ["Git", "Linux", "Postman", "Jupyter Notebook", "Streamlit"],
  },
];

export const projects = [
  {
    id: "01",
    title: "OmniScan AI",
    meta: ["2026", "Autonomous Vulnerability Scanner"],
    description:
      "Built a 100% local, privacy-centric cybersecurity scanner with custom SAST/DAST engines in Node.js and a React frontend. Integrated a Python-based RAG pipeline with FAISS vector database to provide OWASP contextual knowledge to a local Phi-3 LLM via Ollama. Implemented Attacker Personas and vulnerability chaining to simulate multi-step cyberattacks, and generated automated developer-focused remediation code using LLM inference.",
    stack: ["Python", "Node.js", "React", "RAG", "FAISS", "Ollama", "Phi-3 LLM"],
    accentColor: "#FFD700",
    gameAccent: "#00F5FF",
    github: "https://github.com/harshitmishra",
    demo: "https://github.com/harshitmishra",
  },
  {
    id: "02",
    title: "AGRIHIVE",
    meta: ["Mar 2025 – Jun 2025", "AI Farming Advisory Platform"],
    description:
      "End-to-end AI-powered platform for rural farmers with plant disease detection, advisory chatbot, and real-time crop health monitoring. Built and trained a TensorFlow CNN model achieving 92% accuracy on real-world field data. Integrated Gemini API for multilingual, context-aware farming assistance. Designed an offline-first Firebase backend (Firestore + Cloud Functions) supporting 100+ concurrent rural users with low-latency data sync.",
    stack: ["Flutter", "Firebase", "TensorFlow", "CNN", "Gemini API"],
    accentColor: "#00F5A0",
    gameAccent: "#00F5A0",
    github: "https://github.com/harshitmishra",
    demo: "https://github.com/harshitmishra",
  },
  {
    id: "03",
    title: "NovaVCS",
    meta: ["Aug 2026", "High-Performance Version Control System"],
    description:
      "Engineered a high-performance VCS from scratch in C++17, implementing a Directed Acyclic Graph (DAG) for commit history and Content-Addressable Storage (CAS). Developed a custom diff and merge engine using the O(ND) Myers algorithm and three-way merge strategy. Built a sub-millisecond search engine integrating a Trie, Inverted Index, and Levenshtein automata for fuzzy search. Implemented Huffman Coding + delta compression for efficient packfile storage.",
    stack: ["C++17", "DAG", "Myers Diff", "Huffman Coding", "Trie", "Inverted Index"],
    accentColor: "#B46FFF",
    gameAccent: "#A78BFA",
    github: "https://github.com/harshitmishra",
    demo: "https://github.com/harshitmishra",
  },
];

export const experiences = [
  {
    period: "20 May 2026 – 13 Jul 2026",
    role: "Data Analyst Intern",
    company: "Varun Beverages Limited",
    description:
      "Developed a Market Basket Analysis solution using Apriori and FP-Growth algorithms to identify frequently purchased product combinations and generate cross-selling recommendations. Built an end-to-end Customer Churn Prediction pipeline using Logistic Regression, Random Forest, and XGBoost with feature engineering and hyperparameter tuning. Deployed interactive Streamlit dashboards to deliver actionable business insights.",
    dotColor: "#FFD700",
    gameDotColor: "#00F5FF",
  },
  {
    period: "Mar 2025 – Jun 2025",
    role: "Flutter Developer & AI Integrator",
    company: "AGRIHIVE — Team Project (3 Members)",
    description:
      "Collaborated with a 3-person team to build a production Flutter app for rural Indian farmers. Trained a TensorFlow CNN achieving 92% plant disease classification accuracy. Integrated Gemini API for multilingual advisory chatbot and architected an offline-first Firebase backend supporting 100+ concurrent users.",
    dotColor: "#00F5A0",
    gameDotColor: "#00F5A0",
  },
  {
    period: "Aug 2026 – Present",
    role: "Systems Engineer",
    company: "NovaVCS — Personal Research Project",
    description:
      "Independently designed and built a high-performance version control system in C++17 featuring a DAG-based commit model, Content-Addressable Storage, Myers diff algorithm, fuzzy search with Levenshtein automata, and Huffman + delta compression for packfile optimization.",
    dotColor: "#B46FFF",
    gameDotColor: "#A78BFA",
  },
  {
    period: "Aug 2023 – Present",
    role: "B.Tech Student — Computer Science & Engineering",
    company: "IIIT Senapati, Manipur (CGPA: 7.02 / 10.0)",
    description:
      "Pursuing a B.Tech in CSE with coursework in Data Structures & Algorithms, Operating Systems, OOP, DBMS, and Compiler Design. Actively building real-world projects alongside academics — spanning AI security tools, mobile apps, data analytics pipelines, and systems programming.",
    dotColor: "#7A8CA0",
    gameDotColor: "#64748B",
  },
];

export const achievements = [
  {
    icon: "⚡",
    num: "#1623",
    title: "LeetCode Global Contest Rank",
    description:
      "Achieved a Global Contest Rank of 1623 on LeetCode under timed competition conditions, demonstrating strong algorithmic thinking across Arrays, Graphs, DP, Binary Search, Trees, and Greedy.",
  },
  {
    icon: "🧩",
    num: null,
    title: "DSA Problem Solver",
    description:
      "Consistent practice on medium-to-hard difficulty problems across Arrays, Graphs, Dynamic Programming, Binary Search, Trees, and Greedy algorithms on LeetCode.",
  },
  {
    icon: "🛡️",
    num: null,
    title: "OmniScan AI — Cybersecurity",
    description:
      "Built a 100% local, privacy-centric vulnerability scanner with SAST/DAST engines, RAG pipeline, attacker persona simulation, and LLM-powered remediation code generation.",
  },
  {
    icon: "📊",
    num: null,
    title: "Industry Data Analytics Intern",
    description:
      "Delivered Market Basket Analysis and Customer Churn Prediction pipelines with interactive Streamlit dashboards at Varun Beverages Limited, a real-world FMCG company.",
  },
];

export const focusAreas = [
  {
    icon: "⚙️",
    bg: "rgba(255,215,0,0.1)",
    title: "Backend Engineering",
    desc: "Node.js, Flask, REST APIs, Docker, Firebase — reliable, production-grade server-side systems.",
  },
  {
    icon: "📊",
    bg: "rgba(0,245,200,0.1)",
    title: "Data Analytics",
    desc: "Pandas, NumPy, EDA, ETL Pipelines, Streamlit — turning raw data into actionable business insights.",
  },
  {
    icon: "🤖",
    bg: "rgba(180,100,255,0.1)",
    title: "AI / ML Engineering",
    desc: "TensorFlow, scikit-learn, RAG pipelines, LLMs, Prompt Engineering — real intelligence in real products.",
  },
  {
    icon: "📱",
    bg: "rgba(6,214,160,0.1)",
    title: "Mobile Development",
    desc: "Flutter & Dart for cross-platform apps — 92% accurate CNN models, Gemini API integration, Firebase backend.",
  },
];

/* ── Contact details from resume ── */
export const contactInfo = {
  email:    "harshithihu@gmail.com",
  phone:    "+91 9628492644",
  linkedin: "https://linkedin.com/in/harshitmishra",
  github:   "https://github.com/harshitmishra",
  portfolio:"https://harshitmishra.dev",
};
