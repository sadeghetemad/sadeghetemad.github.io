'use strict';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'NG-Dx Multimodal Cancer Diagnostics Platform',
      role: 'Senior AI Engineer',
      category: 'Healthcare AI',
      icon: 'fa-microscope',
      description: 'Designed the logical and physical architecture, data model, and end-to-end data flows for a next-generation cancer diagnostics platform. Developed the initial AWS-based prototype to support multimodal healthcare data integration and AI-driven diagnostics.',
      impact: ['Platform architecture design for multimodal data', 'AWS-based prototype delivery', 'Cancer diagnostics data integration'],
      tags: ['AWS', 'Multimodal AI', 'Healthcare AI', 'Data Architecture']
    },
    {
      title: 'Multimodal Cancer AI Research Platform',
      role: 'Senior Research Engineer',
      category: 'Biomedical AI',
      icon: 'fa-dna',
      description: 'Designed and implemented multimodal ML pipelines combining histopathology imaging, spatial transcriptomics, and metabolic data for cancer analysis. Built deep learning models and scalable single-cell processing workflows for biomedical decision-support.',
      impact: ['100k+ cells processed per study', 'Multimodal biomedical modeling pipeline', 'Explainable AI for clinical insight'],
      tags: ['PyTorch', 'Transformers', 'Spatial Transcriptomics', 'Explainable AI']
    },
    {
      title: 'Educational LLM & RAG Platform',
      role: 'AI Tech Lead',
      category: 'EdTech / LLM Systems',
      icon: 'fa-graduation-cap',
      description: 'Led design and development of LLM-powered educational systems for university entrance exam preparation — including RAG pipelines, multi-chain reasoning, question answering, content generation, and personalized study materials.',
      impact: ['Tens of thousands of active users', 'Automated content generation at scale', 'Personalized learning at scale'],
      tags: ['LLMs', 'RAG', 'LangChain', 'Vector Databases', 'Production AI']
    },
    {
      title: 'Large-Scale ETA & Traffic Prediction',
      role: 'Senior ML Engineer & Tech Lead',
      category: 'Mobility AI',
      icon: 'fa-route',
      description: 'Owned ML architecture and technical direction for real-time traffic prediction and ETA systems. Led model development, deployment, monitoring, and production incident resolution while mentoring a team of ML engineers.',
      impact: ['Millions of daily trips served', '8–12% ETA accuracy improvement', '~20% inference latency reduction'],
      tags: ['Spatiotemporal Modeling', 'Time-Series ML', 'MLflow', 'Technical Leadership']
    },
    {
      title: 'Financial Forecasting & Algorithmic Trading',
      role: 'Machine Learning Engineer',
      category: 'FinTech / Time-Series ML',
      icon: 'fa-chart-line',
      description: 'Designed and deployed ML systems for financial forecasting, trend detection, and algorithmic decision-making using deep learning and tree-based models on large-scale time-series data.',
      impact: ['Production forecasting pipelines', 'Automated decision workflows', 'Large-scale time-series modeling'],
      tags: ['LSTM', 'XGBoost', 'Time-Series ML', 'Financial ML']
    },
    {
      title: 'Customer Segmentation & Personalization Engine',
      role: 'Machine Learning Engineer',
      category: 'E-commerce / Personalization',
      icon: 'fa-users',
      description: 'Built customer segmentation and personalization pipelines using behavioral features, RFM analysis, and clustering models to support large-scale marketing, targeting, and customer engagement initiatives.',
      impact: ['Millions of users segmented', 'ML-driven customer insights', 'Improved targeting efficiency'],
      tags: ['Recommendation Systems', 'Clustering', 'RFM Analysis', 'Scikit-learn']
    }
  ];

  const ProjectCard = (project) => React.createElement(
    'div',
    { className: 'project-card bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 fade-in border border-gray-200 dark:border-gray-700 flex flex-col' },
    React.createElement(
      'div',
      { className: 'flex items-start gap-3 mb-4' },
      React.createElement(
        'div',
        { className: 'w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0' },
        React.createElement('i', { className: 'fas ' + project.icon + ' text-blue-600 dark:text-blue-400' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400' }, project.category),
        React.createElement(
          'span',
          { className: 'inline-block mt-1 px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs font-medium' },
          project.role
        )
      )
    ),
    React.createElement('h3', { className: 'text-lg font-bold text-gray-900 dark:text-white mb-3 leading-snug' }, project.title),
    React.createElement('p', { className: 'text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow' }, project.description),
    React.createElement(
      'div',
      { className: 'mb-4' },
      React.createElement('p', { className: 'text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2' }, 'Key Outcomes'),
      React.createElement(
        'ul',
        { className: 'space-y-1.5' },
        project.impact.map(item => React.createElement(
          'li',
          { key: item, className: 'flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300' },
          React.createElement('i', { className: 'fas fa-check text-blue-500 dark:text-blue-400 text-xs mt-1 flex-shrink-0' }),
          item
        ))
      )
    ),
    React.createElement(
      'div',
      { className: 'flex flex-wrap gap-2' },
      project.tags.map(tag => React.createElement(
        'span',
        { key: tag, className: 'px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium' },
        tag
      ))
    )
  );

  return React.createElement(
    'section',
    { id: 'projects', className: 'py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300' },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4' },
      React.createElement(
        'div',
        { className: 'text-center mb-16 fade-in' },
        React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white' }, 'Featured Projects'),
        React.createElement('div', { className: 'w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6' }),
        React.createElement('p', { className: 'max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400' }, 'Selected industry and applied AI projects. Most systems were developed inside private company repositories, so the focus here is on problem, role, scale, and impact rather than public code links.')
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
        projects.map(project => React.createElement(ProjectCard, { key: project.title, ...project }))
      )
    )
  );
};
