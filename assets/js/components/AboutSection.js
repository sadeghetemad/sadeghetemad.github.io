'use strict';

const AboutSection = () => {
  const skillGroups = [
    {
      label: 'Core Expertise',
      items: ['LLMs & Generative AI', 'Agentic AI Systems', 'MLOps & Production ML', 'Machine Learning & Deep Learning', 'Multimodal AI']
    },
    {
      label: 'Leadership & Impact',
      items: ['Technical Team Leadership', 'AI Product Strategy & Roadmap', 'Architecture & System Design', 'Cross-functional Delivery', 'Technical Mentorship']
    },
    {
      label: 'Languages & Frameworks',
      items: ['Python', 'PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'LangChain', 'Scikit-learn', 'XGBoost', 'LightGBM', 'R', 'Go']
    },
    {
      label: 'Infrastructure & Cloud',
      items: ['Docker', 'Kubernetes', 'AWS', 'FastAPI', 'Apache Spark', 'Kafka', 'MLflow', 'Airflow', 'Kedro', 'DVC']
    },
    {
      label: 'Data & Storage',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Qdrant', 'ClickHouse', 'Cassandra', 'PySpark', 'Faiss']
    },
    {
      label: 'Spoken Languages',
      items: ['English (Fluent)', 'Persian (Native)']
    }
  ];

  return React.createElement(
    'section',
    { id: 'about', className: 'py-20 bg-white dark:bg-gray-900 transition-colors duration-300' },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4' },
      React.createElement(
        'div',
        { className: 'text-center mb-16 fade-in' },
        React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white' }, 'About Me'),
        React.createElement('div', { className: 'w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto' })
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-12 items-start' },

        // Left Column: Bio + Education
        React.createElement(
          'div',
          { className: 'fade-in' },
          React.createElement('p', { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify' },
            "I'm Sadegh Etemad, a Senior AI Engineer and AI Tech Lead with over 8 years of experience building and deploying production-grade AI systems across industry, healthcare, education, transportation, and large-scale digital platforms. My expertise spans Large Language Models (LLMs), Agentic AI, Generative AI, Multimodal AI, MLOps, and AI product development, with a strong focus on delivering reliable, scalable, and business-oriented solutions."
          ),
          React.createElement('p', { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify' },
            'Currently, I work as a Senior AI Engineer at CPI, developing AI-driven solutions using LLMs, Agentic AI, Generative AI, and advanced machine learning techniques. My work focuses on building intelligent agents, automating complex workflows, and delivering scalable AI systems that solve real-world industrial challenges while creating measurable business value.'
          ),
          React.createElement('p', { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify' },
            'Prior to CPI, I worked as a Senior AI Engineer at Teesside University, where I developed multimodal AI systems integrating medical imaging, spatial transcriptomics, and single-cell data. My work focused on scalable deep learning pipelines and multimodal representation learning for biomedical applications, bridging scientific innovation with practical deployment.'
          ),
          React.createElement('p', { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify' },
            "Previously, I led machine learning initiatives at Snapp!, Iran’s largest mobility platform, where I contributed to traffic prediction and ETA systems supporting millions of daily trips. I later joined Wallex-Edtech as AI Tech Lead, leading the development of LLM- and RAG-powered educational AI products and building scalable AI solutions for exam preparation, content generation, and personalized learning experiences."
          ),
          React.createElement('p', { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify' },
            'Across my career, I have specialized in transforming cutting-edge AI research into production-ready systems, leading technical teams, making high-impact engineering decisions, and delivering AI products that perform reliably under real-world scale, latency, and business constraints.'
          ),
          // Scholar callout
          React.createElement(
            'a',
            {
              href: 'https://scholar.google.com/citations?user=oIMDgJsAAAAJ&hl=en',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'flex items-center gap-3 mb-8 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors group'
            },
            React.createElement('img', { src: './assets/images/google-scholar.png', alt: 'Google Scholar', className: 'w-6 h-6 flex-shrink-0', style: { filter: 'grayscale(1) opacity(0.6)' } }),
            React.createElement(
              'div',
              null,
              React.createElement('p', { className: 'text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors' }, 'Academic Publications'),
              React.createElement('p', { className: 'text-xs text-gray-500 dark:text-gray-400' }, 'View my research papers on Google Scholar')
            ),
            React.createElement('i', { className: 'fas fa-arrow-right ml-auto text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors text-sm' })
          ),

        ),

        // Right Column: Education + Skills
        React.createElement(
          'div',
          { className: 'fade-in' },
          // Education
          React.createElement('h3', { className: 'text-xl font-semibold mb-3 text-gray-900 dark:text-white' }, 'Education'),
          React.createElement(
            'ul',
            { className: 'space-y-4 mb-10' },
            React.createElement(
              'li', { className: 'bg-gray-100 dark:bg-gray-800 p-3 rounded-lg' },
              React.createElement('div', { className: 'font-medium text-gray-900 dark:text-white' }, '🎓 Ph.D. in Computer Engineering – Artificial Intelligence, GPA: 3.64/4'),
              React.createElement('div', { className: 'text-sm italic mt-1 text-gray-600 dark:text-gray-400' }, 'Amirkabir University of Technology, Graduated in 2023')
            ),
            React.createElement(
              'li', { className: 'bg-gray-100 dark:bg-gray-800 p-3 rounded-lg' },
              React.createElement('div', { className: 'font-medium text-gray-900 dark:text-white' }, '🎓 MSc in Computer Engineering – Artificial Intelligence, GPA: 3.66/4'),
              React.createElement('div', { className: 'text-sm italic mt-1 text-gray-600 dark:text-gray-400' }, 'Iran University of Science and Technology, Graduated in 2015')
            ),
            React.createElement(
              'li', { className: 'bg-gray-100 dark:bg-gray-800 p-3 rounded-lg' },
              React.createElement('div', { className: 'font-medium text-gray-900 dark:text-white' }, '🎓 BS in Computer Engineering – Software, GPA: 3.7/4'),
              React.createElement('div', { className: 'text-sm italic mt-1 text-gray-600 dark:text-gray-400' }, 'Shahrood University of Technology, Graduated in 2013')
            )
          ),
          // Skills
          React.createElement('h3', { className: 'text-2xl font-semibold mb-6 text-gray-900 dark:text-white' }, 'Skills & Expertise'),
          React.createElement(
            'div',
            { className: 'space-y-6' },
            skillGroups.map(group =>
              React.createElement(
                'div',
                { key: group.label },
                React.createElement(
                  'p',
                  { className: 'text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2' },
                  group.label
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-2' },
                  group.items.map(item =>
                    React.createElement(
                      'span',
                      {
                        key: item,
                        className: 'px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium'
                      },
                      item
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};
