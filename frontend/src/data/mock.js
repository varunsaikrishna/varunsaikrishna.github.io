// Mock data extracted from resume
export const portfolioData = {
  personal: {
    name: "Varun Kanulla",
    title: "AI Engineer",
    tagline: "Results-driven Software Engineer with 3+ years of experience evolving into an AI Engineer, specializing in machine learning, deep learning, and scalable AI systems.",
    email: "varunsaikrishnakanulla@gmail.com",
    phone: "+1 (352) 224-8872",
    linkedin: "https://www.linkedin.com/in/varunsaikrishna",
    github: "#" // Placeholder
  },

  about: {
    summary: "Results-driven Software Engineer with 3+ years of experience evolving into an AI Engineer, specializing in machine learning, deep learning, and scalable AI systems. Strong foundation in software development combined with hands-on expertise in building intelligent applications using modern AI frameworks. Proven ability to transition from backend engineering to deploying AI-powered solutions in production environments."
  },

  experience: [
    {
      id: 1,
      company: "Cognizant",
      role: "AI Engineer",
      location: "USA",
      period: "Jan 2025 - Present",
      current: true,
      responsibilities: [
        "Designed and deployed scalable machine learning models processing over 2M+ records daily, improving prediction accuracy by 28% and reducing manual decision-making efforts across business workflows.",
        "Developed NLP-based applications using transformer architectures and LLM APIs, increasing customer query resolution speed by 35% and enhancing contextual response accuracy in production environments.",
        "Built end-to-end AI pipelines leveraging Python, PyTorch, and FastAPI, reducing model deployment time by 40% and ensuring seamless integration with cloud-based microservices architecture.",
        "Optimized model performance through hyperparameter tuning and feature engineering, improving inference efficiency by 30% while reducing computational costs by approximately 20% in production systems.",
        "Collaborated with cross-functional teams to implement AI-driven automation solutions, increasing operational efficiency by 25% and reducing turnaround time for key business processes significantly."
      ]
    },
    {
      id: 2,
      company: "EPSoft",
      role: "Software Engineer",
      location: "India",
      period: "Aug 2022 – Nov 2023",
      current: false,
      responsibilities: [
        "Developed and maintained scalable RESTful APIs serving 100K+ monthly users, improving system performance by 32% through efficient backend optimization and database query enhancements.",
        "Engineered data processing pipelines handling large datasets, reducing data processing time by 45% and enabling faster analytics and reporting for business-critical decision-making systems.",
        "Integrated machine learning models into backend services, improving feature intelligence by 20% and enabling predictive capabilities within existing enterprise applications.",
        "Optimized database performance using indexing and query tuning, reducing response latency by 38% and significantly improving application reliability under high concurrent user loads.",
        "Collaborated in Agile development teams to deliver high-quality features, reducing bug rates by 25% and accelerating release cycles through continuous integration and testing practices."
      ]
    },
    {
      id: 3,
      company: "Druva Software",
      role: "Software Engineer",
      location: "India",
      period: "Apr 2021 - Jul 2022",
      current: false,
      responsibilities: [
        "Developed backend microservices supporting cloud-based applications, handling 50K+ daily requests while ensuring 99.9% uptime and high system reliability across distributed environments.",
        "Designed and implemented efficient data storage solutions, reducing data retrieval time by 30% and improving system scalability for growing enterprise-level workloads.",
        "Built core application features using Java and cloud technologies, improving overall system performance by 22% and enhancing user experience across multiple service modules.",
        "Collaborated with cross-functional teams to troubleshoot and resolve production issues, reducing system downtime by 18% and improving incident response efficiency.",
        "Strengthened software design and problem-solving capabilities by contributing to scalable architecture decisions, enabling smoother system expansion and long-term maintainability."
      ]
    }
  ],

  skills: {
    "AI / Machine Learning": [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Generative AI & Large Language Models (LLMs)",
      "Model Deployment & Optimization"
    ],
    "Programming & Development": [
      "Python (Advanced)",
      "Java",
      "Data Structures & Algorithms",
      "System Design & Scalable Architectures"
    ],
    "Frameworks & Tools": [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "LangChain",
      "Hugging Face",
      "FastAPI",
      "Flask"
    ],
    "Cloud & DevOps": [
      "AWS (EC2, S3, Lambda)",
      "Docker",
      "CI/CD Pipelines"
    ],
    "Databases": [
      "MySQL",
      "MongoDB"
    ]
  },

  education: [
    {
      id: 1,
      degree: "Masters in CISE",
      field: "Computer & Information Science & Engineering",
      institution: "University of Florida",
      location: "Gainesville, Florida, USA",
      period: "2023 - 2024"
    },
    {
      id: 2,
      degree: "Bachelors in Computer Science",
      field: "AI Specialization",
      institution: "Bennett University",
      location: "Greater Noida, India",
      period: "2017 - 2021"
    }
  ],

  projects: [
    {
      id: 1,
      icon: "✈",
      title: "US Domestic Flight Delay Prediction",
      description: "A machine learning system that predicts whether a domestic US flight will be delayed by 15+ minutes at arrival, using only information available at booking time. Trained on 5.6M flight records from 2017 across 12 carriers and 320 airports.",
      highlights: [
        "Trained and compared 10+ classifiers including XGBoost, GBM, Random Forest, Neural Networks, and stacked ensembles using 5-fold cross-validation.",
        "XGBoost achieved best balanced accuracy; stacked model (GBM + XGBoost → regularised logistic meta-learner) correctly classifies 62.2% of flights.",
        "Built compareCarrierDelays() function to compare predicted delay probabilities across all carriers for any user-specified route and date.",
        "Key predictors identified: time of day, carrier, origin/destination state, and day of week.",
        "Full pipeline in R: preprocessing, feature engineering, resampling, training, and model stacking."
      ],
      tags: ["R", "XGBoost", "GBM", "Random Forest", "Model Stacking", "Feature Engineering", "caret"],
      github: "https://github.com/varunsaikrishna/airline-delay-prediction"
    },
    {
      id: 2,
      icon: "📡",
      title: "Telecom Churn Intelligence Platform",
      description: "An end-to-end ML pipeline for predicting customer churn in telecommunications — from raw data ingestion through model training, with automated orchestration, versioning, and MLflow experiment tracking.",
      highlights: [
        "Full pipeline: data ingestion (CSV + Hugging Face API) → validation → preparation → feature engineering → feature store → DVC versioning → model training.",
        "Supports Random Forest and Logistic Regression classifiers with class-balanced training; all experiments tracked via MLflow.",
        "DVC-based versioning creates reproducible snapshots at every pipeline stage.",
        "Orchestrated with Apache Airflow; containerized with Docker and Docker Compose.",
        "Centralized logging system with per-stage log files; targets >85% accuracy and >0.80 F1-score."
      ],
      tags: ["Python", "Scikit-learn", "Apache Airflow", "DVC", "MLflow", "Docker", "Pandas"],
      github: "https://github.com/varunsaikrishna/churn-intelligence-platform"
    },
    {
      id: 3,
      icon: "🎙",
      title: "Voice Support Agent",
      description: "An intelligent, voice-enabled documentation assistant built on a RAG architecture. Users query any documentation site using natural language and receive grounded answers in both text and spoken audio via OpenAI TTS.",
      highlights: [
        "RAG pipeline: Firecrawl crawls docs → FastEmbed generates embeddings → Qdrant stores vectors → GPT-4o generates grounded answers → OpenAI TTS synthesises speech.",
        "Supports 11 OpenAI TTS voices; audio delivered in-browser with download option.",
        "Streamlit UI with sidebar API key management — no keys written to disk.",
        "Deployable to Heroku via included Procfile and setup.sh.",
        "Zero hallucination guarantee: every answer is grounded in the indexed documentation."
      ],
      tags: ["Python", "RAG", "GPT-4o", "OpenAI TTS", "Qdrant", "FastEmbed", "Firecrawl", "Streamlit"],
      github: "https://github.com/varunsaikrishna/varun-voice-support-agent"
    },
    {
      id: 4,
      icon: "📖",
      title: "Narrative Fiction Conversation Miner",
      description: "An NLP system that automatically extracts and mines conversations from narrative fiction text. Benchmarks a rule-based heuristic against a deep learning BERT + BiLSTM sequence-labelling model on Jane Austen's Pride and Prejudice.",
      highlights: [
        "Framed conversation boundary detection as a sequence-labelling task using an IOB tagging scheme (B-START, I-START, B-OTHER, I-OTHER, O).",
        "BERT + BiLSTM model achieves 70% recall on conversation-start labels and 93% precision on utterance pairs — vs 50% recall for the heuristic baseline.",
        "Built a full pipeline: HTML parser (Project Gutenberg) → paragraph tagger → IOB annotator → model training → utterance pair generation.",
        "Implemented in TensorFlow 2.0; BERT outperformed GloVe, TF-IDF, doc2vec, and LDA embeddings in experiments.",
        "Directly applicable to all ~58,000 freely available Project Gutenberg texts for large-scale dialogue corpus creation."
      ],
      tags: ["Python", "TensorFlow", "BERT", "BiLSTM", "NLP", "NER", "Sequence Labelling"],
      github: "https://github.com/varunsaikrishna/narrative-fiction-convo"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Fundamentals of Accelerated Computing with CUDA Python",
      issuer: "NVIDIA"
    },
    {
      id: 2,
      name: "Fundamentals of Deep Learning",
      issuer: "NVIDIA"
    },
    {
      id: 3,
      name: "AWS Academy Graduate - AWS Academy Machine Learning",
      issuer: "Amazon Web Services"
    }
  ]
};
