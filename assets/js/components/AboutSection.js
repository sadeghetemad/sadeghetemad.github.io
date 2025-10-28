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
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-12 items-center' },
        // Left Column: Text Content
        React.createElement(
          'div',
          { className: 'fade-in' },
          React.createElement(
            'p',
            { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify' },
            'I am Sadegh Etemad, a Machine Learning Researcher and Multimodal AI Engineer with over seven years of experience bridging academic research and large-scale industry applications. I hold a Ph.D. in Artificial Intelligence from Amirkabir University of Technology, where my work focused on statistical modeling and signal processing in computer vision. Over the years, I have combined a deep theoretical foundation with practical engineering experience, exploring how data, computation, and biology can converge to create intelligent systems that drive discovery and impact.'
          ),
          React.createElement(
            'p',
            { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify' },
            'Before joining academia in the UK, I worked at Snapp!, Iran’s leading ride-hailing and mobility platform. There, I led a team of data scientists and engineers developing ETA (Estimated Time of Arrival) prediction models and high-performance distributed systems that supported more than 5 million daily trips. My contributions included designing spatio-temporal ML pipelines, integrating real-time traffic and map data, and deploying large-scale machine learning models to improve ride allocation efficiency and travel time accuracy. This experience taught me how to scale AI solutions for dynamic, high-volume environments where precision and reliability directly impact user experience.'
          ),
          React.createElement(
            'p',
            { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify' },
            'Currently, I am a Research Associate at Teesside University, working on multimodal AI applications in biomedical research. My projects involve integrating spatial transcriptomics, single-cell imaging, and fluxomics data using deep learning and statistical modeling to uncover cellular behavior and disease mechanisms, particularly in cancer. My goal is to build intelligent systems that connect molecular data with visual and spatial context, accelerating discoveries in precision medicine and computational biology.'
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
                    'Thesis: Statistical Modeling of Shearlet Transform Coefficient in Image Processing Applications'
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
                    'Thesis: Using Reinforcement Learning to Manage Electricity Smart Micro-grid'
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
          React.createElement(
            'div',
            { className: 'space-y-4' },
            // Programming Languages
            React.createElement(
              'div',
              { className: 'mb-8' },
              React.createElement(
                'h4',
                { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                'Languages'
              ),
              React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3' },
                ['Python', 'R', 'Go', 'Matlab'].map(lang => (
                  React.createElement(
                    'span',
                    { 
                      key: lang,
                      className: 'px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium'
                    },
                    lang
                  )
                ))
              )
            ),
            // Tools and Frameworks
            React.createElement(
              'div',
              { className: 'mb-8' },
              React.createElement(
                'h4',
                { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                'Tools and Frameworks'
              ),
              React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3' },
                ['TensorFlow', 'PyTorch', 'Pyspark', 'Hugging Face', 'LangChain', 
                   'NumPy', 'Pandas', 'Scikit-learn', 'Scikit-Image', 'XGBoost/LightGBM', 
                   'FastAPI', 'Jupyter', 'Matplotlib', 'Seaborn', 'Plotly'].map(tool => (
                  React.createElement(
                    'span',
                    { 
                      key: tool,
                      className: 'px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium'
                    },
                    tool
                  )
                ))
              )
            ),
            // Engineering Tools & Frameworks
            React.createElement(
              'div',
              { className: 'mb-8' },
              React.createElement(
                'h4',
                { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                'Engineering Tools & Frameworks'
              ),
              React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3' },
                ['Docker', 'Kubernetes', 'Helm', 'Ansible', 'AWS', 'Airflow', 'MLFlow',
                   'Kedro', 'Seldon', 'Git', 'DVC' ,'Redis', 'Kafka', 'RabbitMQ', 
                   'Elastic Stack', 'PostgreSQL', 'MySQL', 'ClickHouse', 
                   'Prometheus', 'Grafana', 'Jaeger'].map(tool => (
                  React.createElement(
                    'span',
                    { 
                      key: tool,
                      className: 'px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full text-sm font-medium'
                    },
                    tool
                  )
                ))
              )
            ),
            // Engineering Expertise
            React.createElement(
              'div',
              { className: 'mb-8' },
              React.createElement(
                'h4',
                { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                'Engineering Expertise'
              ),
              React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3' },
                [
                  'Microservices Architecture', 'RESTful APIs', 'gRPC Communication',
                  'Concurrency', 'Database Optimization', 'High-Traffic Systems',
                  'CI/CD', 'Observability and Monitoring', 'Agile (Scrum)'
                ].map(area => (
                  React.createElement(
                    'span',
                    { 
                      key: area,
                      className: 'px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium'
                    },
                    area
                  )
                ))
              )
            ),
            // Research & Academic Skills Section
            React.createElement(
              'h3',
              { className: 'text-2xl font-semibold mb-6 mt-12 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700 pt-8' },
              'Research & Academic Skills'
            ),
            // Research Areas
            React.createElement(
              'div',
              { className: 'mb-8' },
              React.createElement(
                'h4',
                { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                'Research Areas'
              ),
              React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3' },
                [
                  'Machine Learning', 'Semi-Supervised Learning',
                  'Deep Learning', 'Large Language Models', 
                  'Graph Neural Network', 'Transfer Learning',
                  'Statistical Learning', 'Image Processing & Computer Vision',
                  'Multimodal Models'
                ].map(area => (
                  React.createElement(
                    'span',
                    { 
                      key: area,
                      className: 'px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm font-medium'
                    },
                    area
                  )
                ))
              )
            ),
            // Academic Skills
            React.createElement(
              'div',
              { className: 'mb-8' },
              React.createElement(
                'h4',
                { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                'Academic Skills'
              ),
              React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3' },
                [
                  'Scientific Writing', 'Literature Review', 'Research Methodology',
                  'Experiment Design', 'Data Visualization', 'Interdisciplinary Research'
                ].map(area => (
                  React.createElement(
                    'span',
                    { 
                      key: area,
                      className: 'px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-full text-sm font-medium'
                    },
                    area
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
                  'English (Fluent - B2)', 'Persian (Native)'
                ].map(area => (
                  React.createElement(
                    'span',
                    { 
                      key: area,
                      className: 'px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium'
                    },
                    area
                  )
                ))
              )
            ) 
          )
        )
      )
    )
  );
};
