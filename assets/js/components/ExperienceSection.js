'use strict';

// Experience Section Component
const ExperienceSection = () => {
  const experiences = [
   {
    id: 1,
    role: "Senior Research Engineer – Multimodal AI Systems",
    company: "Teesside University, Middlesbrough, UK",
    period: "Jul 2025 – Present",
    description:
      "Designed and implemented end-to-end multimodal ML pipelines combining histopathology images, spatial transcriptomics, and metabolic data for cancer analysis. Built deep learning models and large-scale single-cell processing pipelines, enabling scalable analysis of datasets with 100k+ cells per study and improving model interpretability for downstream biomedical decision-making.",
    technologies: ["PyTorch", "Transformers", "Scanpy", "Python", "NumPy", "Pandas"]
  },

  {
    id: 2,
    role: "AI Tech Lead – LLM & RAG Systems (EdTech)",
    company: "EdTech-Wallex, Tehran, Iran",
    period: "Jul 2024 – Jul 2025",
    description:
      "Led the architecture and development of LLM-powered educational platforms for national university entrance exam (Konkur) preparation. Designed and owned RAG pipelines over large-scale biology textbooks, enabling personalized question answering and content generation for 100k+ active users. Reduced content generation time from days to minutes and significantly increased student engagement and retention.",
    technologies: ["LLMs", "RAG", "LangChain", "Vector Databases", "Python", "FastAPI"]
  },

  {
    id: 3,
    role: "AI Tech Lead (Hands-on)",
    company: "Snapp!, Tehran, Iran",
    period: "Jan 2023 – Jul 2024",
    description:
      "Led and scaled the Map ML team (10+ ML engineers and data scientists) while remaining hands-on in model development and production debugging. Owned ML architecture and decision-making for traffic prediction and ETA systems serving 5M+ daily trips. Improved ETA accuracy by ~10% and reduced prediction latency by ~30%, directly impacting user experience and operational efficiency.",
    technologies: ["Spark", "Airflow", "MLflow", "Kedro", "Kafka", "PostgreSQL", "Python"]
  },

  {
    id: 4,
    role: "Senior Machine Learning Engineer",
    company: "Snapp!, Tehran, Iran",
    period: "May 2020 – Jan 2023",
    description:
      "Built and owned large-scale traffic forecasting and routing ML pipelines processing billions of GPS data points. Applied time-series, spatial, and graph-based models to improve ETA reliability and routing decisions. Deployed and monitored production ML services supporting millions of daily users with strict latency and reliability constraints.",
    technologies: ["Python", "Spark", "Scikit-learn", "XGBoost", "Kafka", "Redis"]
  },

  {
    id: 5,
    role: "Machine Learning Engineer",
    company: "Kian Digital, Tehran, Iran",
    period: "Dec 2018 – May 2020",
    description:
      "Designed and deployed algorithmic trading and financial forecasting systems using machine learning and quantitative models. Built LSTM- and tree-based models for price prediction and trend detection, contributing to automated decision-making pipelines handling large-scale financial time-series data.",
    technologies: ["Python", "LSTM", "XGBoost", "Pandas", "NumPy"]
  },
  
  {
    id: 6,
    role: "Machine Learning Engineer",
    company: "Digikala, Tehran, Iran",
    period: "Jan 2018 – Dec 2018",
    description:
      "Implemented customer segmentation and personalization pipelines using RFM analysis and clustering models. Delivered ML-driven insights that supported large-scale marketing campaigns and improved targeting efficiency across millions of e-commerce users.",
    technologies: ["Python", "Scikit-learn", "SQL", "Pandas"]
  }
  ];

  // Card Component
  const ExperienceCard = (exp) => {
    return React.createElement(
      'div',
      {
        className:
          'bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 fade-in border-l-4 border-blue-500 dark:border-blue-400 hover:shadow-xl transition-all transform hover:-translate-y-1'
      },
      React.createElement(
        'h3',
        { className: 'text-xl font-bold text-gray-900 dark:text-white mb-2' },
        exp.role
      ),
      React.createElement(
        'p',
        { className: 'text-sm text-gray-600 dark:text-gray-400 mb-3' },
        `${exp.company} | ${exp.period}`
      ),
      React.createElement(
        'p',
        { className: 'text-gray-700 dark:text-gray-300 mb-4 text-justify leading-relaxed' },
        exp.description
      ),
      React.createElement(
        'div',
        { className: 'flex flex-wrap gap-2' },
        exp.technologies.map(tech =>
          React.createElement(
            'span',
            {
              key: tech,
              className:
                'px-2.5 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 rounded-full text-xs font-medium'
            },
            tech
          )
        )
      )
    );
  };

  // Main section layout
  return React.createElement(
    'section',
    {
      id: 'experience',
      className: 'py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300'
    },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4' },
      // Section Header (like ResearchSection)
      React.createElement(
        'div',
        { className: 'text-center mb-16 fade-in' },
        React.createElement(
          'h2',
          { className: 'text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white' },
          'Professional Experience'
        ),
        React.createElement(
          'div',
          { className: 'w-24 h-1.5 bg-gradient-to-r from-blue-600 via-yellow-500 to-indigo-600 dark:from-blue-400 dark:via-yellow-400 dark:to-indigo-400 mx-auto mb-6 rounded-full' }
        ),
        React.createElement(
          'p',
          { className: 'max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300' },
          'A timeline of my academic and industry experience across machine learning, data science, and AI engineering.'
        )
      ),
      // Grid Cards
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
        experiences.map(exp => React.createElement(ExperienceCard, { key: exp.id, ...exp }))
      )
    )
  );
};
