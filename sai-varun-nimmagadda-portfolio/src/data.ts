/**
 * Structured Resume Data
 * Captured every line from the provided resume document.
 */

export const resumeData = {
  basics: {
    name: "Sai Varun Nimmagadda",
    title: "AI/ML Engineer • Data Scientist • Big Data & Analytics",
    summary: "Results-driven AI/ML Engineer and Data Science enthusiast with 4+ years of experience designing end-to-end machine learning pipelines, NLP systems, and real-time data architectures. Published IEEE researcher with a 4.0 GPA M.S. in Data Science from UMBC. Currently building AI-powered impact measurement systems for nonprofits at WikiCharities, applying LLMs, probabilistic modeling, and NLP to the social innovation sector. Proven ability to translate complex data into actionable intelligence across business, technology, manufacturing, agriculture, nonprofit, and scientific domains.",
    location: "Baltimore, MD",
    email: "saivarun.nimmagadda@gmail.com",
    links: [
      { label: "Email", url: "mailto:saivarun.nimmagadda@gmail.com" },
      { label: "Sai Varun's Linkedin", url: "https://www.linkedin.com/in/sai-varun-nimmagadda-6ab2581ba" },
      { label: "GitHub", url: "https://github.com/Saivarun23" }
    ]
  },
  skills: [
    { category: "Languages", items: ["Python", "R", "SQL", "T-SQL"] },
    { category: "ML / DL", items: ["Machine Learning", "Deep Learning", "CNNs", "GANs", "Autoencoders", "Scikit-learn", "TensorFlow", "PyTorch"] },
    { category: "NLP / LLMs", items: ["Natural Language Processing", "Large Language Models", "Probabilistic Modeling", "Theory of Change Frameworks"] },
    { category: "Big Data", items: ["Apache Spark", "Apache Flink", "Hadoop", "Databricks"] },
    { category: "Cloud & DB", items: ["AWS", "GCP", "Azure", "MongoDB", "SQL Server (SSMS)", "NoSQL"] },
    { category: "Viz & Tools", items: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Git", "Jupyter", "VS Code"] }
  ],
  experience: [
    {
      company: "WikiCharities",
      role: "AI Engineer Intern",
      dates: "Mar 2026 – Present",
      location: "Remote/Hybrid",
      bullets: [
        "Designing AI-powered guidance systems to help nonprofits improve impact assessment responses through intelligent NLP prompts, validation, and suggestions.",
        "Developing NLP pipelines to analyze nonprofit mission statements and auto-generate Theory of Change (ToC) frameworks aligned with the Quantifiable Theory of Change (QToC) model.",
        "Building ML models mapping nonprofit activities to standardized impact metrics based on sector, population served, and intervention type; integrating with WikiCharities nonprofit database.",
        "Applying LLMs and probabilistic modeling to provide outcome predictions, evidence-based recommendations, and data validation workflows for impact metric accuracy.",
        "Creating interactive visualization components that help nonprofits understand logic models, assumption dependencies, and pathway probabilities."
      ],
      metrics: ["NLP Prompts", "QToC Model", "LLM Predictions"]
    },
    {
      company: "University of Maryland, Baltimore County (UMBC)",
      role: "Graduate Teaching Assistant",
      dates: "Aug 2025 – Dec 2025",
      location: "Baltimore, MD",
      bullets: [
        "Supported DATA 602 (Data Analysis & ML) and DATA 603 (Big Data Processing) — graduate courses serving 60+ students; designed materials, graded work, and provided 1-on-1 mentorship on ML algorithms and Spark workflows."
      ],
      metrics: ["60+ Students", "Spark Workflows"]
    },
    {
      company: "Skyworks Solutions",
      role: "AI Engineering Co-Op",
      dates: "Jun 2024 – Dec 2024",
      location: "Woburn, MA",
      bullets: [
        "Designed, developed, and deployed AI/ML models via RESTful endpoints using FastAPI and Flask, integrating generative AI and NLP systems into internal production services.",
        "Built full-stack AI product integrations connecting backend model-serving APIs with front-end components for internal tooling and analytics dashboards.",
        "Leveraged AWS and Azure to manage cloud data pipelines, model deployments, and database interactions for operational data workflows.",
        "Designed scalable Python backend services covering the full AI project lifecycle — from data ingestion through model inference and business reporting."
      ],
      metrics: ["FastAPI & Flask", "Generative AI", "Cloud Pipelines"]
    },
    {
      company: "Integrated Cleanroom Technologies Limited",
      role: "AI/ML Engineer",
      dates: "Feb 2023 – Jan 2024",
      location: "India",
      bullets: [
        "Engineered and deployed ML models to optimize operational efficiency in cleanroom manufacturing, supporting data-driven process improvements across production lines.",
        "Built real-time data pipelines using Apache Flink and AWS; developed Power BI dashboards for KPI visualization; automated ETL workflows using Python and SQL, reducing manual processing time significantly."
      ],
      metrics: ["Operational Efficiency", "Real-time Pipelines", "Automated ETL"]
    },
    {
      company: "SRM University, AP",
      role: "Machine Learning Researcher",
      dates: "Dec 2022 – Jan 2024",
      location: "Amaravati, India",
      bullets: [
        "Led deep learning research on UAV-based plant disease detection — achieved 95.09% accuracy (corn) and 94% accuracy (wheat) using Fully Convolutional AutoEncoder and CNN architectures.",
        "Published 3 IEEE conference papers; led two cross-functional research teams of 4+ members through full research lifecycle from data acquisition to publication."
      ],
      metrics: ["95.09% Accuracy", "3 IEEE Papers", "4+ Team Members"]
    }
  ],
  achievements: [
    { title: "95.09% Accuracy", context: "Main Author: Corn plant disease detection using Fully Convolutional AutoEncoder", type: "metric" },
    { title: "94% Accuracy", context: "Wheat plant disease detection using CNN architectures", type: "metric" },
    { title: "3 IEEE Papers", context: "Published and presented at international conferences", type: "award" },
    { title: "4.0 GPA", context: "M.S. in Data Science from UMBC", type: "metric" },
    { title: "Databricks Certified", context: "Apache Spark™ Programming with Databricks", type: "certification" }
  ],
  projects: [
    {
      title: "Synthetic Data Generation with GANs for Particle Physics",
      institution: "UMBC",
      dates: "Oct – Dec 2024",
      bullets: [
        "Implemented a 2D Convolutional GAN on CERN Open Data to generate synthetic particle shower projections, reducing computational cost for detector testing; evaluated fidelity via MSE, SSIM, and Wasserstein Distance metrics."
      ],
      stack: ["GANs", "CERN Open Data", "MSE", "SSIM", "Wasserstein Distance"]
    }
  ],
  publications: [
    {
      title: "Deep Learning Based Techniques for Corn Plant Disease Detection Using UAV Imagery (Main Author)",
      conference: "15th IEEE ICCCNT 2024 (Computing, Communication & Networking Technologies)",
      summary: "Developed a Fully Convolutional AutoEncoder model to classify corn plant diseases from self-captured UAV imagery, achieving 95.09% accuracy. The research demonstrated that deep learning models can reliably identify subtle visual symptoms of disease before they spread — with direct implications for precision agriculture."
    },
    {
      title: "Wheat Plant Disease Detection Analysis",
      conference: "16th IEEE CICN 2024 (Computational Intelligence & Communication Networks)",
      summary: "Used convolutional neural networks to detect diseases in wheat crops from real-time drone footage. The system was trained on field-captured UAV images and achieved 94% accuracy — offering farmers and agronomists a scalable, low-cost early warning tool that can prevent large-scale crop losses."
    },
    {
      title: "Wheat Plant Disease Detection Using CNN",
      conference: "15th IEEE CICN 2023 (Computational Intelligence & Communication Networks)",
      summary: "An earlier iteration of the wheat detection work, establishing the baseline CNN architecture and data collection methodology that informed subsequent research. Published as a standalone contribution covering the full pipeline from UAV image acquisition to model deployment and evaluation."
    }
  ],
  education: [
    {
      degree: "M.S. in Data Science",
      institution: "University of Maryland, Baltimore County (UMBC)",
      dates: "Dec 2025",
      gpa: "4.0 / 4.0"
    },
    {
      degree: "B.Tech in Electronics & Communication Engineering",
      institution: "SRM University AP, Amaravati",
      dates: "May 2023",
      gpa: "8.98 / 10"
    }
  ],
  certifications: [
    { name: "Apache Spark™ Programming with Databricks", issuer: "Databricks Certified", date: "Nov 2024" }
  ],
  leadership: [
    { role: "Research Team Lead", description: "Led 2 research teams under Prof. Sateesh Krishna Dhuli; oversaw model development and publication of 3 IEEE papers." }
  ],
  extra: [
    "Published IEEE researcher",
    "Proven ability to translate complex data into actionable intelligence across business, technology, manufacturing, agriculture, nonprofit, and scientific domains.",
    "Research focuses on making advanced AI practical for real-world problems."
  ]
};
