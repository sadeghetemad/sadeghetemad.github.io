'use strict';

// Projects Section Component
const ProjectsSection = () => {
const projects = [
          {
          title: 'NG-Dx Multimodal Cancer Diagnostics Platform',
          role: 'Senior AI Engineer',
          category: 'Healthcare AI / Platform Architecture',
          description: 'Designed the logical and physical architecture, data model, and end-to-end data flows for a next-generation cancer diagnostics platform. Developed the initial AWS-based prototype to support multimodal healthcare data integration and AI-driven diagnostics.',
          impact: ['Platform architecture design', 'AWS-based prototype', 'Multimodal healthcare data integration'],
          tags: ['AWS', 'Multimodal AI', 'Healthcare AI', 'Data Architecture', 'Cancer Diagnostics']
          },
          {
          title: 'Multimodal Cancer AI Research Platform',
          role: 'Senior Research Engineer',
          category: 'Biomedical AI / Multimodal Learning',
          description: 'Designed and implemented multimodal ML pipelines combining histopathology imaging, spatial transcriptomics, and metabolic data for cancer analysis. Built deep learning models and scalable single-cell processing workflows for biomedical decision-support problems.',
          impact: ['100k+ cells per study', 'Multimodal biomedical modeling', 'Explainable AI for clinical insight'],
          tags: ['PyTorch', 'Transformers', 'Spatial Transcriptomics', 'Histopathology', 'Explainable AI']
          },
          {
          title: 'Educational LLM & RAG Platform',
          role: 'AI Tech Lead',
          category: 'EdTech / LLM Systems',
          description: 'Led the design and development of LLM-powered educational systems for university entrance exam preparation, including RAG pipelines, multi-chain reasoning workflows, question answering, content generation, and personalized study materials.',
          impact: ['Tens of thousands of active users', 'Automated content generation', 'Personalized learning at scale'],
          tags: ['LLMs', 'RAG', 'LangChain', 'Vector Databases', 'Production AI']
          },
          {
          title: 'Large-Scale ETA & Traffic Prediction Platform',
          role: 'Senior Machine Learning Engineer | Technical Lead',
          category: 'Mobility AI / Spatiotemporal Forecasting',
          description: 'Owned ML architecture and technical direction for real-time traffic prediction and ETA systems serving millions of daily trips. Led model development, deployment, monitoring, and production incident resolution while mentoring a team of ML engineers.',
          impact: ['Millions of daily trips', '8–12% ETA accuracy improvement', '~20% inference latency reduction'],
          tags: ['Spatiotemporal Modeling', 'Time-Series ML', 'MLflow', 'Production ML', 'Technical Leadership']
          },
          {
          title: 'Financial Forecasting & Algorithmic Trading Systems',
          role: 'Machine Learning Engineer',
          category: 'FinTech / Time-Series ML',
          description: 'Designed and deployed machine learning systems for financial forecasting, trend detection, and algorithmic decision-making using deep learning and tree-based models on large-scale time-series data.',
          impact: ['Production forecasting systems', 'Automated decision pipelines', 'Large-scale time-series modeling'],
          tags: ['LSTM', 'XGBoost', 'Time-Series ML', 'Financial ML', 'Production ML']
          },
          {
          title: 'Customer Segmentation & Personalization Engine',
          role: 'Machine Learning Engineer',
          category: 'E-commerce / Personalization',
          description: 'Implemented customer segmentation and personalization pipelines using behavioral features, RFM analysis, and clustering models to support large-scale marketing, targeting, and customer engagement initiatives.',
          impact: ['Millions of users', 'ML-driven customer insights', 'Improved targeting efficiency'],
          tags: ['Recommendation Systems', 'Personalization', 'Clustering', 'RFM Analysis', 'Scikit-learn']
          }
];


  const ProjectCard = (project) => React.createElement(
    'div',
    { className: 'project-card bg-white rounded-xl shadow-md p-6 fade-in border border-gray-200' },
    React.createElement(
      'div',
      { className: 'flex items-start justify-between gap-4 mb-4' },
      React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'text-sm font-semibold text-blue-600 mb-1' }, project.category),
        React.createElement('h3', { className: 'text-xl font-bold text-gray-900 mb-2' }, project.title),
        React.createElement('p', { className: 'text-sm text-gray-500' }, `Role: ${project.role}`)
      ),
      React.createElement('i', { className: 'fas fa-diagram-project text-blue-500 text-2xl mt-1' })
    ),
    React.createElement('p', { className: 'text-gray-700 mb-5 text-justify leading-relaxed' }, project.description),
    React.createElement(
      'div',
      { className: 'mb-5' },
      React.createElement('h4', { className: 'text-sm font-semibold text-gray-900 mb-2' }, 'Key outcomes'),
      React.createElement(
        'ul',
        { className: 'space-y-1 text-sm text-gray-700' },
        project.impact.map(item => React.createElement(
          'li',
          { key: item, className: 'flex items-start' },
          React.createElement('span', { className: 'text-blue-500 mr-2' }, '•'),
          item
        ))
      )
    ),
    React.createElement(
      'div',
      { className: 'flex flex-wrap gap-2' },
      project.tags.map(tag => React.createElement(
        'span',
        { key: tag, className: 'px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100' },
        tag
      ))
    )
  );

  return React.createElement(
    'section',
    { id: 'projects', className: 'py-20 bg-white transition-colors duration-300' },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4' },
      React.createElement(
        'div',
        { className: 'text-center mb-16 fade-in' },
        React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold mb-4 text-gray-900' }, 'Featured Projects'),
        React.createElement('div', { className: 'w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 mx-auto mb-6 rounded-full' }),
        React.createElement('p', { className: 'max-w-3xl mx-auto text-lg text-gray-700' }, 'Selected industry and applied AI projects. Most systems were developed inside private company repositories, so the focus here is on problem, role, scale, and impact rather than public code links.')
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
        projects.map(project => React.createElement(ProjectCard, { key: project.title, ...project }))
      )
    )
  );
};
