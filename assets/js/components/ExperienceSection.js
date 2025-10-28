'use strict';

// Experience Section Component
const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      role: "Research Associate – Multimodal AI in Biomedical Research",
      company: "Teesside University, Middlesbrough, UK",
      period: "Jul 2025 – Present",
      description:
        "Working on multimodal AI applications in cancer research, integrating spatial transcriptomics, single-cell imaging, and fluxomics data using deep learning and statistical modeling to uncover cellular mechanisms and metabolic behaviors.",
      technologies: ["Python", "PyTorch", "Transformers", "Multimodal AI", "Spatial Transcriptomics", "Fluxomics"]
    },
    {
      id: 2,
      role: "AI Engineering Manager",
      company: "Snapp!, Tehran, Iran",
      period: "Jul 2024 – Jul 2025",
      description:
        "Led a team of 10 data scientists and engineers building ML pipelines for real-time transportation optimization, ETA prediction, and map intelligence. Designed distributed data architectures and deployed production-level ML systems handling 5M+ daily trips.",
      technologies: ["Airflow", "Spark", "MLflow", "Kedro", "PostgreSQL", "Kafka", "Python"]
    },
    {
      id: 3,
      role: "Senior Data Scientist",
      company: "Snapp!, Tehran, Iran",
      period: "May 2020 – May 2022",
      description:
        "Developed large-scale traffic forecasting and routing optimization models using spatial-temporal machine learning to improve ETA accuracy. Designed pipelines to process billions of GPS records for better mobility insights.",
      technologies: ["Python", "XGBoost", "LightGBM", "Scikit-learn", "Pandas", "Time-Series"]
    },
    {
      id: 4,
      role: "Data Scientist",
      company: "Kian Digital, Tehran, Iran",
      period: "Dec 2018 – May 2020",
      description:
        "Developed algorithmic trading and quantitative forecasting models integrating statistical and deep learning approaches. Implemented trend detection and portfolio optimization strategies for financial markets.",
      technologies: ["Python", "LSTM", "Finance", "Time-Series", "Quantitative Modeling"]
    },
    {
      id: 5,
      role: "Data Scientist",
      company: "Digikala, Tehran, Iran",
      period: "Jan 2018 – Dec 2018",
      description:
        "Built RFM-based customer segmentation and personalization models, providing data-driven insights for marketing and user engagement. Enhanced retention strategies through clustering and behavioral analytics.",
      technologies: ["Python", "RFM", "K-Means", "Data Mining", "Business Intelligence"]
    }
  ];

  // Card Component
  const ExperienceCard = (exp) => {
    return React.createElement(
      'div',
      {
        className:
          'bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-blue-500 dark:border-blue-400 hover:shadow-2xl transition-all transform hover:-translate-y-1'
      },
      React.createElement(
        'h3',
        { className: 'text-xl font-bold text-gray-900 dark:text-white mb-2' },
        exp.role
      ),
      React.createElement(
        'div',
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
                'px-2.5 py-1.5 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 rounded-full text-xs font-medium'
            },
            tech
          )
        )
      )
    );
  };

  return React.createElement(
    'section',
    {
      id: 'experience',
      className: 'py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 relative'
    },
    // subtle background pattern
    React.createElement('div', {
      className: 'absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none',
      style: {
        backgroundImage: 'none'
      }
    }),
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 relative z-10' },
      React.createElement(
        'div',
        { className: 'text-center mb-16 fade-in' },
        React.createElement(
          'h2',
          { className: 'text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white text-gradient' },
          'Professional Experience'
        ),
        React.createElement('div', {
          className:
            'w-24 h-1.5 bg-gradient-to-r from-blue-600 via-yellow-500 to-indigo-600 dark:from-blue-400 dark:via-yellow-400 dark:to-indigo-400 mx-auto mb-6 rounded-full'
        }),
        React.createElement(
          'p',
          { className: 'max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 parallax mb-8', 'data-speed': '0.05' },
          'A timeline of my academic and industry experience across machine learning, data science, and AI engineering.'
        )
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
        experiences.map((exp, index) =>
          React.createElement(
            'div',
            {
              key: exp.id,
              className: 'stagger-item transform transition-all duration-500',
              style: {
                animationDelay: `${index * 100}ms`,
                transform: 'translateY(0) scale(1)'
              }
            },
            ExperienceCard(exp)
          )
        )
      )
    )
  );
};
