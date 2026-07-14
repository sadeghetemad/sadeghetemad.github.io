'use strict';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      year: '2026',
      role: 'Senior AI Engineer',
      company: 'CPI, United Kingdom',
      period: 'Mar 2026 – Present',
      description: 'Designing and building AI systems for industrial and healthcare applications, with a focus on Agentic AI, LLM-powered workflows, multimodal data integration, cloud-native architectures, and production-ready AI solutions.',
      outcomes: [
        'Agentic AI systems for industrial automation',
        'Multimodal data integration for healthcare diagnostics',
        'Cloud-native production ML architecture'
      ]
    },
    {
      id: 2,
      year: '2025',
      role: 'Senior AI Engineer',
      company: 'Teesside University, UK',
      period: 'Jul 2025 – Feb 2026',
      description: 'Developed multimodal AI pipelines for cancer research combining biomedical imaging, spatial transcriptomics, and metabolic data. Built deep learning workflows supporting cancer detection, biomarker discovery, and model interpretability.',
      outcomes: [
        '100k+ cells processed per study',
        'Multimodal pipeline across imaging, transcriptomics, and metabolic data',
        'Explainable AI models for clinical decision support'
      ]
    },
    {
      id: 3,
      year: '2024',
      role: 'AI Tech Lead',
      company: 'EdTech-Wallex, Tehran, Iran',
      period: 'Jul 2024 – Jul 2025',
      teamSize: '4–6 engineers',
      description: 'Led architecture and delivery of LLM-powered educational systems for university entrance exam preparation. Directed a team of engineers across RAG pipelines, multi-chain reasoning, automated content generation, and personalized learning.',
      outcomes: [
        'Tens of thousands of active users on LLM-powered platform',
        'Automated exam content generation pipeline at scale',
        'RAG and multi-chain reasoning workflows in production'
      ]
    },
    {
      id: 4,
      year: '2023',
      role: 'AI Tech Lead',
      company: 'Snapp!, Tehran, Iran',
      period: 'Jan 2023 – Jul 2024',
      teamSize: '6–8 engineers',
      description: 'Led technical direction for large-scale ML systems supporting traffic prediction and ETA estimation. Owned model architecture, cross-team roadmap, production reliability, and incident resolution while staying hands-on.',
      outcomes: [
        '8–12% ETA accuracy improvement across millions of daily trips',
        '~20% inference latency reduction in production',
        'Led and mentored a team of 6–8 ML engineers'
      ]
    },
    {
      id: 5,
      year: '2020',
      role: 'Senior Machine Learning Engineer',
      company: 'Snapp!, Tehran, Iran',
      period: 'May 2020 – Jan 2023',
      description: 'Built and maintained production ML pipelines for traffic forecasting, routing, and ETA improvement on large-scale geospatial and time-series data. Delivered real-time model serving, monitoring, and reliability for high-traffic mobility systems.',
      outcomes: [
        'Production traffic and ETA models at millions-of-trips scale',
        'Real-time model serving with low-latency inference',
        'End-to-end ML pipelines for spatiotemporal forecasting'
      ]
    },
    {
      id: 6,
      year: '2018',
      role: 'Machine Learning Engineer',
      company: 'Earlier Career — Kian Digital & Digikala, Tehran',
      period: '2018 – 2020',
      description: 'At Kian Digital: developed ML systems for financial forecasting, trend detection, and algorithmic decision-making on large-scale time-series data. At Digikala: implemented customer segmentation and personalization pipelines using RFM analysis, behavioral features, and clustering models.',
      outcomes: [
        'Production financial forecasting and trading signal systems',
        'Customer segmentation across millions of users at Digikala',
        'ML-driven personalization and targeting pipelines'
      ]
    }
  ];

  const TimelineItem = (exp, index) => {
    const isLast = index === experiences.length - 1;
    return React.createElement(
      'div',
      { key: exp.id, className: 'relative flex gap-5 md:gap-8 pb-12 fade-in' },
      // Year label
      React.createElement(
        'div',
        { className: 'w-16 md:w-24 shrink-0 text-right pt-1' },
        React.createElement('span', { className: 'text-lg md:text-2xl font-bold text-blue-600 dark:text-blue-400' }, exp.year)
      ),
      // Timeline spine
      React.createElement(
        'div',
        { className: 'relative flex flex-col items-center shrink-0' },
        React.createElement('div', { className: 'w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-900 shadow-md z-10' }),
        !isLast && React.createElement('div', { className: 'absolute top-4 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-yellow-500 to-indigo-500' })
      ),
      // Card
      React.createElement(
        'div',
        { className: 'flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all transform hover:-translate-y-1' },
        React.createElement(
          'div',
          { className: 'flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3' },
          React.createElement(
            'div',
            null,
            React.createElement('h3', { className: 'text-xl font-bold text-gray-900 dark:text-white mb-1' }, exp.role),
            React.createElement('p', { className: 'text-sm font-medium text-gray-500 dark:text-gray-400' }, exp.company),
            exp.teamSize && React.createElement(
              'p',
              { className: 'text-xs text-blue-600 dark:text-blue-400 font-medium mt-1' },
              React.createElement('i', { className: 'fas fa-users mr-1' }),
              exp.teamSize
            )
          ),
          React.createElement(
            'span',
            { className: 'inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold whitespace-nowrap' },
            exp.period
          )
        ),
        React.createElement('p', { className: 'text-gray-600 dark:text-gray-300 leading-relaxed text-justify mb-4' }, exp.description),
        React.createElement(
          'ul',
          { className: 'space-y-1.5' },
          exp.outcomes.map(item => React.createElement(
            'li',
            { key: item, className: 'flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400' },
            React.createElement('i', { className: 'fas fa-check text-blue-500 dark:text-blue-400 text-xs mt-1 flex-shrink-0' }),
            item
          ))
        )
      )
    );
  };

  return React.createElement(
    'section',
    { id: 'experience', className: 'py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300' },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4' },
      React.createElement(
        'div',
        { className: 'text-center mb-16 fade-in' },
        React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white' }, 'Professional Experience'),
        React.createElement('div', { className: 'w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6' }),
        React.createElement('p', { className: 'max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400' }, 'A career timeline across production AI, LLM systems, multimodal AI, healthcare platforms, and large-scale machine learning.')
      ),
      React.createElement(
        'div',
        { className: 'max-w-5xl mx-auto' },
        experiences.map((exp, index) => TimelineItem(exp, index))
      )
    )
  );
};
