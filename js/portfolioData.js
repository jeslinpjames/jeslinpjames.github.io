/* ============================================================
   PORTFOLIO DATA — SINGLE SOURCE OF TRUTH
   ------------------------------------------------------------
   Edit ONLY this file to update the website's content.
   Every section of the UI renders dynamically from this object.
   - Leave a link as "" (empty string) to hide that link/button.
   - Add/remove items in any array; the UI adapts automatically.
   ============================================================ */

const portfolioData = {

  meta: {
    siteTitle: "Jeslin P James — AI/ML & Backend Engineer",
    description:
      "Portfolio of Jeslin P James — AI & Machine Learning engineer specialising in deep learning, computer vision, and production backend systems.",
    footerNote: "AI/ML & Backend Engineer · Kochi, India",
  },

  personal: {
    name: "Jeslin P James",
    monogram: "JJ",
    role: "AI/ML & Backend Engineer",
    tagline:
      "I build deep learning systems that listen, see, and understand — and the production backends that take them from notebook to deployed product.",
    location: "Kochi, Kerala, India",
    availability: "Open to internships & full-time roles",
    email: "jeslin@ug.cusat.ac.in",
    phone: "+91 9383468783",
    resumeUrl: "", // e.g. "assets/Jeslin_Resume.pdf" — leave "" to hide button
    socials: [
      { label: "GitHub",   url: "https://github.com/jeslinpjames", icon: "github" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/jeslin-p-james", icon: "linkedin" },
      { label: "Email",    url: "mailto:jeslin@ug.cusat.ac.in", icon: "mail" },
    ],
  },

  about: {
    heading: "Training models by day, serving them by night.",
    paragraphs: [
      "I'm an Integrated M.Sc. Computer Science (AI & Data Science) student at Cochin University of Science and Technology. Over the last two years I've had the chance to work on ML systems across medical audio, ESG carbon analytics, legal tech, and agricultural computer vision — and to learn, hands-on, what it takes to move a model from a notebook into production.",
      "I enjoy working across the full pipeline: feature engineering and architecture design in PyTorch on one end, FastAPI services, Postgres, Docker, and cloud infrastructure on the other. The details are what I find most interesting — the extra few percent of accuracy that takes real engineering to find, and the latency budget that decides whether anyone actually uses what you built.",
      "Outside of work, I contribute to open source (roboflow/supervision, hpcaitech/Open-Sora) and enjoy building under pressure at hackathons, with runner-up finishes at both state and national level.",
    ],
    highlights: [
      { value: "98%", label: "accuracy on respiratory sound classification (up from 86%)" },
      { value: "~90%", label: "manual asset-mapping reduced on a 500-bill ESG pilot" },
      { value: "6×", label: "faster training with Darknet/CUDA C++ vs PyTorch prototype" },
      { value: "21K+", label: "synthetic images generated for small-object pest detection" },
    ],
  },

  experience: [
    {
      company: "Laennec AI",
      role: "AI & Backend Engineer Intern",
      period: "Aug 2025 — Mar 2026",
      location: "Remote",
      summary: "Medical AI — respiratory sound diagnostics.",
      points: [
        "Architected a CNN + BiLSTM + Attention pipeline in PyTorch for respiratory sound classification, lifting accuracy from 86% to 98% through custom feature engineering and K-fold ensembling.",
        "Managed GCP infrastructure — GCS buckets and Compute Engine instances — for high-performance training and scalable deployment.",
        "Built and maintained FastAPI backends serving model inference with low-latency communication between the AI core and application layer.",
      ],
      tech: ["PyTorch", "FastAPI", "GCP", "Audio ML"],
    },
    {
      company: "Provez",
      role: "Backend & AI/ML Developer (Contract)",
      period: "Nov 2024 — Apr 2025",
      location: "Dubai · Remote",
      summary: "Legal tech — LLM-powered case management.",
      points: [
        "Built an MVP Legal Case Manager: case/matter CRUD, document ingest & search across PDFs, Word files and scans, calendar, and LLM-powered drafting and summaries — multi-tenant ready.",
        "Owned the backend end-to-end: FastAPI, Postgres with Alembic migrations, JWT auth, Docker, and CI with pytest + GitHub Actions.",
      ],
      tech: ["FastAPI", "PostgreSQL", "Docker", "LLM", "CI/CD"],
    },
    {
      company: "GreenFI AI",
      role: "Backend & AI/ML Development Intern",
      period: "Aug 2024 — Nov 2024",
      location: "Singapore · Remote",
      summary: "ESG / carbon analytics.",
      points: [
        "Built an ESG emissions pipeline: multilingual utility bills (PDF/image/CSV) → OCR + LLM parsing (OpenAI) → normalized energy data for carbon calculation.",
        "Implemented asset linking via embedding search with pgvector/Postgres and batch ZIP upload; Flask API deployed on AWS EC2.",
        "Cut manual asset mapping by ~90% on a 500-bill pilot.",
      ],
      tech: ["Flask", "OpenAI API", "pgvector", "AWS EC2", "OCR"],
    },
    {
      company: "Indian Institute of Space Science & Technology",
      role: "Student Research Intern",
      period: "May 2024 — Jul 2024",
      location: "Thiruvananthapuram, India",
      summary: "Computer vision research — early crop pest detection.",
      points: [
        "Built a synthetic data pipeline (21K generated + 1K real images, 11 pest classes) using custom compositing tuned for small objects.",
        "Trained YOLO variants and a FocusDET slice prototype; Darknet/CUDA C++ training ran ~6× faster than the PyTorch prototype and improved small-object detection on field samples.",
      ],
      tech: ["YOLO", "CUDA C++", "Darknet", "Synthetic Data"],
    },
  ],

  openSource: [
    {
      name: "roboflow/supervision",
      description: "Contributed to one of the most-used open-source computer vision utility libraries.",
      url: "https://github.com/roboflow/supervision",
      tags: ["Computer Vision", "Python"],
    },
    {
      name: "hpcaitech/Open-Sora",
      description: "Contributed to the open-source video generative AI project.",
      url: "https://github.com/hpcaitech/Open-Sora",
      tags: ["Generative AI", "Video"],
    },
  ],

  projects: [
    {
      title: "Multi-Class Object Localization with Deep RL",
      description:
        "A GRU-based reinforcement learning agent that localizes objects across multiple classes using Grad-CAM guidance and six dynamic actions — detection reframed as sequential decision-making.",
      tags: ["Reinforcement Learning", "Grad-CAM", "PyTorch"],
      github: "",
      demo: "",
      featured: true,
    },
    {
      title: "Statistical Image Synthesis via Matrix Variate Distributions",
      description:
        "A generative framework using pixel-wise mean, variance, and neighborhood covariance (matrix variate normal) to directly sample high-fidelity grayscale images. Validated on MNIST and Fashion-MNIST with strong SSIM scores.",
      tags: ["Generative Models", "Statistics", "NumPy"],
      github: "",
      demo: "",
      featured: true,
    },
    {
      title: "Inclusify — AI Learning Platform for Differently-Abled People",
      description:
        "GenAI-based learning platform for blind and deaf users with text-to-speech, speech-to-text, and interactive visual aids. Runner-up at the state-level AI Samasya Hackathon (Govt. of Kerala).",
      tags: ["GenAI", "Accessibility", "TensorFlow", "React"],
      github: "",
      demo: "",
      featured: true,
    },
    {
      title: "ShareMore — P2P File Sharing & Watch Party Platform",
      description:
        "Peer-to-peer file sharing with real-time watch parties, supporting local-network and internet sharing with unlimited file sizes. Flask backend, React frontend.",
      tags: ["P2P", "WebRTC", "Flask", "React"],
      github: "https://github.com/jeslinpjames",
      demo: "",
      featured: true,
    },
    {
      title: "StudySphere — Personalized Learning Platform",
      description:
        "RAG-powered study platform built with React and Django: notes, flashcards, quizzes, and PDF chat using retrieval-augmented generation.",
      tags: ["RAG", "Django", "React", "MongoDB"],
      github: "https://github.com/jeslinpjames",
      demo: "",
      featured: true,
    },
    {
      title: "Kathakali Navarasa Classification (ViT + LSTM)",
      description:
        "Classifies the nine traditional Kathakali expressions from video — keyframe extraction, Vision Transformer features, LSTM sequence modelling. Classical Kerala art meets modern vision.",
      tags: ["Vision Transformer", "LSTM", "Video ML"],
      github: "",
      demo: "",
      featured: true,
    },
    {
      title: "Malayalam Transformer Language Model",
      description:
        "Implemented the 'Attention Is All You Need' architecture from scratch and fine-tuned it for the Malayalam language.",
      tags: ["NLP", "Transformers", "Malayalam"],
      github: "",
      demo: "",
      featured: false,
    },
    {
      title: "Lunar Lander with Reinforcement Learning",
      description:
        "An RL agent that autonomously lands a lunar module by learning optimal control policies through simulation.",
      tags: ["Reinforcement Learning", "Deep Q-Learning"],
      github: "",
      demo: "",
      featured: false,
    },
    {
      title: "Custom MLP for Heart Disease Prediction",
      description:
        "A multi-layer perceptron built entirely from scratch in NumPy — custom activations, loss functions, and hyperparameter tuning.",
      tags: ["NumPy", "From Scratch", "Healthcare"],
      github: "",
      demo: "",
      featured: false,
    },
    {
      title: "Image Compression Suite",
      description:
        "Implementations of DDBTC, MBTC, AMBTC, BTC, and truncated-SVD compression techniques, with ongoing research on BTC for SAR image despeckling.",
      tags: ["Image Processing", "SVD", "Research"],
      github: "",
      demo: "",
      featured: false,
    },
  ],

  skills: [
    {
      group: "Languages",
      items: ["Python", "C++", "C", "SQL", "Java", "JavaScript", "R", "Golang", "LaTeX"],
    },
    {
      group: "ML / CV / NLP",
      items: ["PyTorch", "TensorFlow", "OpenCV", "CUDA", "HuggingFace Transformers", "scikit-learn", "YOLO", "LangChain"],
    },
    {
      group: "Backend & Data",
      items: ["FastAPI", "Flask", "Django", "PostgreSQL", "pgvector", "Alembic", "MongoDB", "Docker", "GitHub Actions"],
    },
    {
      group: "Cloud & LLM",
      items: ["AWS (EC2/S3)", "GCP (GCS/Compute)", "OpenAI API", "RAG Pipelines", "Embedding Search"],
    },
  ],

  achievements: [
    {
      year: "2024",
      title: "Runner-Up — AI Samasya Hackathon (State Level)",
      detail: "2nd place with Inclusify at the hackathon organized by the Dept. of Higher Education, Government of Kerala.",
    },
    {
      year: "2024",
      title: "Runner-Up — Pest Vision Challenge, NCVPRIPG-2024",
      detail: "Secured runner-up at the national conference on Computer Vision, Pattern Recognition, Image Processing and Graphics.",
    },
    {
      year: "2024",
      title: "Runner-Up — Hack for Tomorrow '24",
      detail: "2nd place at the 24-hour hackathon hosted by Kerala Startup Mission at Model Engineering College, Kochi.",
    },
    {
      year: "2023",
      title: "Certificate of Merit — ISRO START Program",
      detail: "\u201COverview of Space Science and Technology\u201D by the Indian Space Research Organisation.",
    },
  ],

  education: [
    {
      institution: "Cochin University of Science and Technology",
      degree: "Five-Year Integrated M.Sc. in Computer Science (AI & Data Science)",
      period: "2022 — 2027 (expected)",
      location: "Kochi, India",
    },
    {
      institution: "Saint Francis School, Vadakkencherry",
      degree: "ISC Class 12 (2021) · ICSE Class 10 (2019) — Computer Science",
      period: "2019 & 2021",
      location: "Kerala, India",
    },
  ],

  contact: {
    heading: "Let's build something that actually ships.",
    blurb:
      "Whether it's a deep learning pipeline, a backend that needs to scale, or a research idea worth prototyping — my inbox is open.",
  },
};
