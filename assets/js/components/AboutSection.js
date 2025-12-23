'use strict';

// About Section Component
const AboutSection = () => {
  return React.createElement(
    'section',
    {
      id: 'about',
      className: 'py-20 bg-white dark:bg-gray-900 transition-colors duration-300'
    },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4' },
      React.createElement(
        'div',
        { className: 'text-center mb-16 fade-in' },
        React.createElement(
          'h2',
          { className: 'text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white' },
          'About Me'
        ),
        React.createElement(
          'div',
          { className: 'w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto' }
        )
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-12 items-start' },
        // Left Column: Text Content
        React.createElement(
          'div',
          { className: 'fade-in' },
         React.createElement(
            'p',
            { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify' },
            'I’m Sadegh Etemad, a Senior Machine Learning Engineer and hands-on AI Tech Lead with over 7 years of experience building, deploying, and owning production-grade ML and AI systems at scale. My background combines strong ML fundamentals with practical engineering, focused on shipping systems that are reliable, observable, and maintainable in real-world environments.'
          ),
          React.createElement(
            'p',
            { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify' },
            'Previously, at Snapp! (Iran’s largest ride-hailing and mobility platform), I led and scaled a Map ML team while remaining hands-on in model development and production debugging. I owned key technical decisions for traffic prediction and ETA systems supporting millions of daily trips, designing spatio-temporal ML pipelines, integrating real-time traffic and map signals, and deploying low-latency ML services where accuracy and reliability directly impact user experience and operational efficiency.'
          ),
          React.createElement(
            'p',
            { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify' },
            'More recently, I led the development of LLM-based and RAG-powered systems in the education domain, building AI features for large-scale exam preparation. This included designing retrieval pipelines over structured textbook content, multi-chain prompt architectures for question answering and content generation, and collaborating closely with engineering teams to productionize AI capabilities for real users.'
          ),
          React.createElement(
            'p',
            { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify' },
            'I currently work as a Senior Research Engineer at Teesside University, applying an industry mindset to multimodal AI in biomedical applications. I build deep learning pipelines that integrate imaging, spatial transcriptomics, and single-cell data, with a focus on scalable ML system design and multimodal representation learning that can move beyond prototypes toward real-world deployment.'
          ),
          React.createElement(
            'p',
            { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify' },
            'Across roles, I specialize in bridging research-level models with production constraints, leading teams, owning high-stakes technical decisions, and delivering AI systems that perform under real-world scale, latency, and reliability requirements.'
          ),
          React.createElement(
            'div',
            { className: 'grid grid-cols-1 lg:grid-cols-2 gap-6' },
            React.createElement(
              'div',
              { className: 'fade-in' },
              React.createElement(
                'h3',
                { className: 'text-xl font-semibold mb-3 text-gray-900 dark:text-white' },
                'Education'
              ),
              React.createElement(
                'ul',
                { className: 'space-y-4' },
                    React.createElement(
                  'li',
                  { className: 'bg-gray-100 dark:bg-gray-800 p-3 rounded-lg' },
                  React.createElement(
                    'div',
                    { className: 'font-medium' },
                    '🎓 Ph.D. in Computer Engineering - Artificial Intelligence, GPA: 3.64/4'
                  ),
                  React.createElement(
                    'div',
                    { className: 'text-sm italic mt-1' },
                    'Amirkabir University of Technology, Graduated in 2023'
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'bg-gray-100 dark:bg-gray-800 p-3 rounded-lg' },
                  React.createElement(
                    'div',
                    { className: 'font-medium' },
                    '🎓 MSc in Computer Engineering - Artificial Intelligence, GPA: 3.66/4'
                  ),
                  React.createElement(
                    'div',
                    { className: 'text-sm italic mt-1' },
                    'Iran University of Science and Technology, Graduated in 2015'
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'bg-gray-100 dark:bg-gray-800 p-3 rounded-lg' },
                  React.createElement(
                    'div',
                    { className: 'font-medium' },
                    '🎓 BS in Computer Engineering - Software, GPA: 3.7/4'
                  ),
                  React.createElement(
                    'div',
                    { className: 'text-sm italic mt-1' },
                    'Shahrood University of Technology, Graduated in 2013'
                  )
                )
              )
            )
          )
        ),
     // Right Column: Skills
            React.createElement(
              'div',
              { className: 'space-y-8 fade-in' },
              React.createElement(
                'h3',
                { className: 'text-2xl font-semibold mb-6 text-gray-900 dark:text-white' },
                'Technical Skills'
              ),

              // Programming & Software Engineering
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement(
                  'h4',
                  { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                  'Programming & Software Engineering'
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-3' },
                  [
                    'Python (Expert)',
                    'R',
                    'Go (Familiar)',
                    'Object-Oriented Design',
                    'Modular Architecture',
                    'Production-Grade ML Systems'
                  ].map(item => (
                    React.createElement(
                      'span',
                      {
                        key: item,
                        className:
                          'px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium'
                      },
                      item
                    )
                  ))
                )
              ),

              // Machine Learning & Modeling
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement(
                  'h4',
                  { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                  'Machine Learning & Modeling'
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-3' },
                  [
                    'Classical Machine Learning',
                    'Deep Learning',
                    'Transformer Architectures',
                    'Foundation Models',
                    'LLMs and RAG',
                    'Self-Supervised Learning',
                    'Representation Learning',
                    'Generative Models',
                    'Graph Neural Networks (GNNs)',
                    'Time-Series Modeling',
                    'Spatiotemporal Modeling'
                  ].map(item => (
                    React.createElement(
                      'span',
                      {
                        key: item,
                        className:
                          'px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium'
                      },
                      item
                    )
                  ))
                )
              ),

              // ML & Modeling Libraries
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement(
                  'h4',
                  { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                  'ML & Modeling Libraries'
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-3' },
                  [
                    'Scikit-learn',
                    'XGBoost',
                    'LightGBM',
                    'Statsmodels',
                    'Optuna'
                  ].map(lib => (
                    React.createElement(
                      'span',
                      {
                        key: lib,
                        className:
                          'px-3 py-1 bg-rose-200 text-rose-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-full text-sm font-medium'
                      },
                      lib
                    )
                  ))
                )
              ),

              // Deep Learning & Foundation Models
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement(
                  'h4',
                  { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                  'Deep Learning & Foundation Models'
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-3' },
                  [
                    'PyTorch',
                    'TensorFlow',
                    'Hugging Face Transformers',
                    'LangChain'
                  ].map(tool => (
                    React.createElement(
                      'span',
                      {
                        key: tool,
                        className:
                          'px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full text-sm font-medium'
                      },
                      tool
                    )
                  ))
                )
              ),

              // Data Processing & Distributed Computing
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement(
                  'h4',
                  { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                  'Data Processing & Distributed Computing'
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-3' },
                  [
                    'NumPy',
                    'Pandas',
                    'SciPy',
                    'Polars',
                    'PySpark'
                  ].map(tool => (
                    React.createElement(
                      'span',
                      {
                        key: tool,
                        className:
                          'px-3 py-1 bg-sky-100 text-sky-800 dark:bg-cyan-900 dark:text-cyan-200 rounded-full text-sm font-medium'
                      },
                      tool
                    )
                  ))
                )
              ),

              // Explainability & Visualization
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement(
                  'h4',
                  { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                  'Explainability & Visualization'
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-3' },
                  [
                    'SHAP',
                    'Matplotlib',
                    'Seaborn',
                    'Plotly'
                  ].map(tool => (
                    React.createElement(
                      'span',
                      {
                        key: tool,
                        className:
                          'px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm font-medium'
                      },
                      tool
                    )
                  ))
                )
              ),

              // End-to-End ML Systems & Pipelines
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement(
                  'h4',
                  { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                  'End-to-End ML Systems & Pipelines'
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-3' },
                  [
                    'Apache Spark',
                    'FastAPI',
                    'Seldon',
                    'TensorFlow Serving',
                    'TorchServe',
                    'Redis',
                    'Feast'
                  ].map(tool => (
                    React.createElement(
                      'span',
                      {
                        key: tool,
                        className:
                          'px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium'
                      },
                      tool
                    )
                  ))
                )
              ),

              // ML Pipelines & Reproducibility
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement(
                  'h4',
                  { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                  'ML Pipelines & Reproducibility'
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-3' },
                  [
                    'Airflow',
                    'Kedro',
                    'MLflow',
                    'DVC'
                  ].map(tool => (
                    React.createElement(
                      'span',
                      {
                        key: tool,
                        className:
                          'px-3 py-1 bg-fuchsia-100 text-fuchsia-800 dark:bg-rose-900 dark:text-rose-200 rounded-full text-sm font-medium'
                      },
                      tool
                    )
                  ))
                )
              ),

              // Data Storage & Databases
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement(
                  'h4',
                  { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                  'Data Storage & Databases'
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-3' },
                  [
                    'PostgreSQL',
                    'MySQL',
                    'ClickHouse',
                    'Cassandra',
                    'MongoDB',
                    'Faiss',
                    'Qdrant',
                    'Redis'
                  ].map(db => (
                    React.createElement(
                      'span',
                      {
                        key: db,
                        className:
                          'px-3 py-1 bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200 rounded-full text-sm font-medium'
                      },
                      db
                    )
                  ))
                )
              ),

              // Streaming, Cloud & Infrastructure
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement(
                  'h4',
                  { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                  'Streaming, Cloud & Infrastructure'
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-3' },
                  [
                    'Kafka',
                    'RabbitMQ',
                    'Redis Streams',
                    'Docker',
                    'Kubernetes',
                    'AWS',
                    'Argo CD'
                  ].map(tool => (
                    React.createElement(
                      'span',
                      {
                        key: tool,
                        className:
                          'px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 rounded-full text-sm font-medium'
                      },
                      tool
                    )
                  ))
                )
              ),

              // Monitoring & Technical Leadership
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement(
                  'h4',
                  { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                  'Monitoring & Technical Leadership'
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-3' },
                  [
                    'Prometheus',
                    'Grafana',
                    'OpenTelemetry',
                    'Jaeger',
                    'Architecture Decision-Making',
                    'Production Incident Ownership',
                    'Technical Mentorship'
                  ].map(item => (
                    React.createElement(
                      'span',
                      {
                        key: item,
                        className:
                          'px-3 py-1 bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 rounded-full text-sm font-medium'
                      },
                      item
                    )
                  ))
                )
              ),

              // Languages
              React.createElement(
                'div',
                null,
                React.createElement(
                  'h4',
                  { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                  'Languages'
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-3' },
                  [
                    'English (Fluent - C1)', 'Persian (Native)'
                  ].map(area => (
                    React.createElement(
                      'span',
                      { 
                        key: area,
                        className: 'px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium'
                      },
                      area
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
