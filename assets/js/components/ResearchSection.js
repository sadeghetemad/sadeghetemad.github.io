'use strict';

// Research Section Component
const ResearchSection = () => {
  // Research Profile Links Component
  const ResearchProfileLinks = () => {
    const profiles = [
      {
        name: "Google Scholar",
        icon: "fas fa-graduation-cap",
        url: "https://scholar.google.com/citations?user=oIMDgJsAAAAJ&hl=enB1SRyKwAAAAJ",
        color: "bg-blue-600 dark:bg-blue-700"
      },
      {
        name: "ResearchGate",
        icon: "fab fa-researchgate",
        url: "https://www.researchgate.net/profile/Sadegh-Etemad-2",
        color: "bg-green-600 dark:bg-green-700"
      }
    ];

    return React.createElement(
      'div',
      { className: 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-8' },
      profiles.map((profile, index) => (
        React.createElement(
          'a',
          {
            key: index,
            href: profile.url,
            target: '_blank',
            rel: 'noopener noreferrer',
            className: `${profile.color} rounded-lg p-4 flex flex-col items-center justify-center text-white hover:opacity-90 transition-opacity shadow-md`
          },
          React.createElement('i', { className: `${profile.icon} text-3xl mb-2` }),
          React.createElement(
            'span',
            { className: 'text-sm font-medium' },
            profile.name
          )
        )
      ))
    );
  };

  return React.createElement(
    'section',
    {
      id: 'research',
      className: 'py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300'
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
          'Research & Publications'
        ),
        React.createElement(
          'div',
          { className: 'w-24 h-1.5 bg-gradient-to-r from-blue-600 via-yellow-500 to-indigo-600 dark:from-blue-400 dark:via-yellow-400 dark:to-indigo-400 mx-auto mb-6 rounded-full' }
        ),
        React.createElement(
          'p',
          { className: 'max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300' },
          'My research focuses on multimodal and data-efficient machine learning for computational biology, integrating deep learning, probabilistic modeling, and representation learning to uncover complex biological mechanisms and actionable insights.'
        )
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-12' },
        // Featured Publication - Static content
        React.createElement(
          'div',
          { className: 'col-span-full bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6 fade-in' },
          React.createElement(
            'h3',
            { className: 'text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center' },
            React.createElement('i', { className: 'fas fa-file-alt text-blue-500 mr-3' }),
            'Clustering of Urban Traffic Patterns by K-Means and Dynamic Time Warping: Case Study'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 dark:text-gray-400 text-sm mb-2' },
            'S Etemad, M Mosayebi'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 dark:text-gray-400 text-sm mb-4' },
            'International Conference on Artificial Intelligence and Smart Vehicle (ICAISV) - 2023'
          ),
          React.createElement(
            'div',
            { className: 'flex justify-between items-center mb-4' },
            React.createElement(
              'span',
              { className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium' },
              'Citations: -'
            ),
            React.createElement(
              'span',
              { className: 'text-gray-500 dark:text-gray-400 text-sm' },
              '2023'
            )
          ),
          React.createElement(
            'p',
            { className: 'text-gray-700 dark:text-gray-300 mb-4' },
            'This paper presents a K-Means and Dynamic Time Warping–based time series clustering method to identify similar urban traffic patterns from driver speed data, enabling speed estimation for missing segments and detection of key road segments for mapping applications.'
          ),
          React.createElement(
            'div',
            { className: 'mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end' },
            React.createElement(
              'a',
              {
                href: 'https://arxiv.org/abs/2309.09830',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm font-medium'
              },
              'Read Paper ',
              React.createElement('i', { className: 'fas fa-external-link-alt ml-1' })
            )
          )
        ),
        // Second publication
        React.createElement(
          'div',
          { className: 'col-span-full bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6 fade-in' },
          React.createElement(
            'h3',
            { className: 'text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center' },
            React.createElement('i', { className: 'fas fa-file-alt text-blue-500 mr-3' }),
            'SherVine: A graphical dependency modeling for shearlet transform and its application in image quality assessment'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 dark:text-gray-400 text-sm mb-2' },
            'S Etemad, M Amirmazlaghani'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 dark:text-gray-400 text-sm mb-4' },
            'Expert Systems with Applications'
          ),
          React.createElement(
            'div',
            { className: 'flex justify-between items-center mb-4' },
            React.createElement(
              'span',
              { className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium' },
              'Citations: 3'
            ),
            React.createElement(
              'span',
              { className: 'text-gray-500 dark:text-gray-400 text-sm' },
              '2023'
            )
          ),
          React.createElement(
            'p',
            { className: 'text-gray-700 dark:text-gray-300 mb-4' },
            'This work introduces SherVine, a probabilistic graphical model built on the vine copula framework to capture and analyze dependency structures in shearlet transform coefficients'
          ),
          React.createElement(
            'div',
            { className: 'mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end' },
            React.createElement(
              'a',
              {
                href: 'https://www.sciencedirect.com/science/article/abs/pii/S095741742300595X',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm font-medium'
              },
              'Read Paper ',
              React.createElement('i', { className: 'fas fa-external-link-alt ml-1' })
            )
          )
        ),
        // Third publication
        React.createElement(
          'div',
          { className: 'col-span-full bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6 fade-in' },
          React.createElement(
            'h3',
            { className: 'text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center' },
            React.createElement('i', { className: 'fas fa-file-alt text-blue-500 mr-3' }),
            'Color texture image retrieval based on Copula multivariate modeling in the Shearlet domain'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 dark:text-gray-400 text-sm mb-2' },
            'S Etemad, M Amirmazlaghani'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 dark:text-gray-400 text-sm mb-4' },
            'Engineering Applications of Artificial Intelligence'
          ),
          React.createElement(
            'div',
            { className: 'flex justify-between items-center mb-4' },
            React.createElement(
              'span',
              { className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium' },
              'Citations: 18'
            ),
            React.createElement(
              'span',
              { className: 'text-gray-500 dark:text-gray-400 text-sm' },
              '2021'
            )
          ),
          React.createElement(
            'p',
            { className: 'text-gray-700 dark:text-gray-300 mb-4' },
            'This paper proposes a color-texture image retrieval framework using the shearlet transform combined with a multivariate copula model to effectively represent and retrieve textured images across color channels.'
          ),
          React.createElement(
            'div',
            { className: 'mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end' },
            React.createElement(
              'a',
              {
                href: 'https://www.sciencedirect.com/science/article/abs/pii/S0952197621001032',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm font-medium'
              },
              'Read Paper ',
              React.createElement('i', { className: 'fas fa-external-link-alt ml-1' })
            )
          )
        ),
        // Fourth publication
        React.createElement(
          'div',
          { className: 'col-span-full bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6 fade-in' },
          React.createElement(
            'h3',
            { className: 'text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center' },
            React.createElement('i', { className: 'fas fa-file-alt text-blue-500 mr-3' }),
            'Customer Segmentation and Strategy Development Based on User Behavior Analysis, RFM Model and Data Mining Techniques: A Case Study'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 dark:text-gray-400 text-sm mb-2' },
            'S Etemad, M Tavakoli'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 dark:text-gray-400 text-sm mb-4' },
            'IEEE 15th International Conference on e-Business Engineering (ICEBE)'
          ),
          React.createElement(
            'div',
            { className: 'flex justify-between items-center mb-4' },
            React.createElement(
              'span',
              { className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium' },
              'Citations: 108'
            ),
            React.createElement(
              'span',
              { className: 'text-gray-500 dark:text-gray-400 text-sm' },
              '2018'
            )
          ),
          React.createElement(
            'p',
            { className: 'text-gray-700 dark:text-gray-300 mb-4' },
            'This paper introduces an enhanced **R+FM customer segmentation model** that adapts to business dynamics and clusters users via **K-Means**, applied to Digikala’s e-commerce data, showing improved purchase frequency and basket value compared to the company’s previous RFM-based quantile method.'
          ),
          React.createElement(
            'div',
            { className: 'mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end' },
            React.createElement(
              'a',
              {
                href: 'https://ieeexplore.ieee.org/abstract/document/8592638',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm font-medium'
              },
              'Read Paper ',
              React.createElement('i', { className: 'fas fa-external-link-alt ml-1' })
            )
          )
        ),
        // Fifth publication
        React.createElement(
          'div',
          { className: 'col-span-full bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6 fade-in' },
          React.createElement(
            'h3',
            { className: 'text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center' },
            React.createElement('i', { className: 'fas fa-file-alt text-blue-500 mr-3' }),
            'A new multiplicative watermark detector in the contourlet domain using t Location-Scale distribution'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 dark:text-gray-400 text-sm mb-2' },
            'S Etemad, M Amirmazlaghani'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 dark:text-gray-400 text-sm mb-4' },
            'Pattern Recognition'
          ),
          React.createElement(
            'div',
            { className: 'flex justify-between items-center mb-4' },
            React.createElement(
              'span',
              { className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium' },
              'Citations: 79'
            ),
            React.createElement(
              'span',
              { className: 'text-gray-500 dark:text-gray-400 text-sm' },
              '2018'
            )
          ),
          React.createElement(
            'p',
            { className: 'text-gray-700 dark:text-gray-300 mb-4' },
            'This paper presents a robust multiplicative digital watermarking scheme in the contourlet domain, where contourlet coefficients are modeled using a t-location scale distribution and an optimal likelihood ratio detector is analytically derived, demonstrating superior performance and robustness against various attacks.'
          ),
          React.createElement(
            'div',
            { className: 'mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end' },
            React.createElement(
              'a',
              {
                href: 'https://www.sciencedirect.com/science/article/abs/pii/S0031320317304922',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm font-medium'
              },
              'Read Paper ',
              React.createElement('i', { className: 'fas fa-external-link-alt ml-1' })
            )
          )
        ),
        // Research interests section
        React.createElement(
          'div',
          { className: 'col-span-full bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6 fade-in' },
          React.createElement(
            'h3',
            { className: 'text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center' },
            React.createElement('i', { className: 'fas fa-flask text-blue-500 mr-3' }),
            'Research Interests'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-700 dark:text-gray-300 mb-4' },
            'My research focuses on developing scalable and data-efficient machine learning systems that bridge multimodal learning, representation learning, and reinforcement learning. I aim to design interpretable AI models that integrate biological insights and real-world dynamics, enabling robust decision-making and knowledge discovery across domains such as computational biology, healthcare, and intelligent systems.'
          ),
          React.createElement(
            'div',
            { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 mt-6' },
            React.createElement(
              'div',
              { className: 'bg-gray-50 dark:bg-gray-800 p-4 rounded-lg' },
              React.createElement(
                'h4',
                { className: 'font-semibold text-gray-900 dark:text-white mb-2' },
                'Multimodal & Representation Learning'
              ),
              React.createElement(
                'ul',
                { className: 'list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1' },
                React.createElement('li', null, 'Deep representation learning for biological and behavioral data'),
                React.createElement('li', null, 'Self-supervised and contrastive multimodal learning'),
                React.createElement('li', null, 'Cross-domain feature fusion and alignment')
              )
            ),
            React.createElement(
              'div',
              { className: 'bg-gray-50 dark:bg-gray-800 p-4 rounded-lg' },
              React.createElement(
                'h4',
                { className: 'font-semibold text-gray-900 dark:text-white mb-2' },
                'Applied AI & Computational Biology'
              ),
              React.createElement(
                'ul',
                { className: 'list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1' },
                React.createElement('li', null, 'Spatial transcriptomics and metabolic modeling'),
                React.createElement('li', null, 'Graph-based learning for cell–cell communication and omics integration'),
                React.createElement('li', null, 'AI-driven data mining and intelligent healthcare systems')
              )
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'text-center mt-12' },
        React.createElement(
          'a',
          {
            href: 'https://scholar.google.com/citations?user=oIMDgJsAAAAJ&hl=enB1SRyKwAAAAJ&hl=en',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'btn bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 hover:bg-blue-700 text-white inline-flex items-center font-medium py-3 px-6 rounded-lg shadow-lg transition-all'
          },
          'View Google Scholar Profile ',
          React.createElement('i', { className: 'fas fa-external-link-alt ml-2' })
        )
      )
    )
  );
};
