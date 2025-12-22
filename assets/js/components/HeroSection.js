'use strict';

// Hero Section Component
const HeroSection = () => {
  return React.createElement(
    'section', 
    { 
      id: 'hero',
      className: 'min-h-screen flex items-center py-20 bg-gradient-to-br from-blue-50 via-amber-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 transition-colors duration-300 relative overflow-hidden'
    },
    // Background particles for dynamic effect - now with yellow particles too
    React.createElement(
      'div',
      { className: 'absolute inset-0 overflow-hidden pointer-events-none' },
      Array.from({ length: 20 }).map((_, i) => 
        React.createElement('div', {
          key: i,
          className: `absolute rounded-full ${i % 2 === 0 ? 'bg-blue-500 dark:bg-blue-400' : 'bg-yellow-500 dark:bg-yellow-400'} opacity-10`,
          style: {
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 20 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          },
        })
      )
    ),
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 relative z-10' },
      React.createElement(
        'div',
        { className: 'flex flex-col-reverse md:flex-row items-center justify-between gap-12' },
        // Text Content
        React.createElement(
          'div',
          { className: 'w-full md:w-1/2 fade-in' },
          React.createElement(
            'h1',
            { className: 'text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white leading-tight' },
            React.createElement('span', { className: 'bg-gradient-blue-yellow bg-clip-text text-transparent block' }, 'Sadegh Etemad')
          ),
          React.createElement(
            'div',
            { className: 'h-14 mb-4 relative overflow-hidden title-animation-container' },
            React.createElement('div', { 
              id: 'title-rotator',
              className: 'text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200',
            })
          ),
          React.createElement(
            'p',
            { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl parallax text-justify', 'data-speed': '0.1' },
            'Senior Machine Learning Engineer and AI Tech Lead with 7+ years of experience building and scaling production-grade AI systems across transportation, education, and data-driven platforms. Specialized in LLM-based systems, multimodal learning, and end-to-end ML infrastructure, with a strong track record of leading teams and delivering AI solutions that drive measurable business impact..'
          ),
          React.createElement(
            'div',
            { className: 'flex mt-8 space-x-6 stagger-item' },
            // GitHub
            React.createElement(
              'a', 
              { 
                href: 'https://github.com/sadeghetemad',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-github text-2xl' })
            ),
            // LinkedIn
            React.createElement(
              'a', 
              { 
                href: 'https://www.linkedin.com/in/sadegh-etemad/',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-linkedin text-2xl' })
            ),
            // ResearchGate
            React.createElement(
              'a', 
              { 
                href: 'https://www.researchgate.net/profile/Sadegh-Etemad-2',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-researchgate text-2xl' })
            ),
            // Google Scholar
            React.createElement(
              'a', 
              { 
                href: 'https://scholar.google.com/citations?user=oIMDgJsAAAAJ&hl=en',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fas fa-graduation-cap text-2xl' })
            ),
            // ORCID
            React.createElement(
              'a', 
              { 
                href: 'https://orcid.org/0000-0003-0665-7305',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-orcid text-2xl' })
            )
          )
        ),
        // Profile Image
        React.createElement(
          'div',
          { className: 'w-full md:w-1/2 flex justify-center fade-in' },
          React.createElement(
            'div',
            { 
              className: 'w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl profile-image hover-3d'
            },
            React.createElement(
              'img',
              { 
                src: './assets/images/profile.jpg',
                alt: 'Sadegh Etemad',
                className: 'absolute inset-0 w-full h-full object-cover',
                onError: 'this.src="https://via.placeholder.com/400x400?text=Sadegh+Etemad"'
              }
            )
          )
        )
      )
    )
  );
};
