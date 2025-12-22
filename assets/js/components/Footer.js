'use strict';

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return React.createElement(
    'footer',
    { className: 'bg-gray-900 text-white py-12 relative overflow-hidden' },
    // Background pattern
    React.createElement(
      'div',
      { 
        className: 'absolute inset-0 opacity-5',
        style: {
          backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)',
          backgroundSize: '100px 100px'
        }
      }
    ),
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 relative z-10' },
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-12 gap-8 items-start' },
        // Logo and Copyright
        React.createElement(
          'div',
          { className: 'md:col-span-4' },
          React.createElement(
            'div',
            { className: 'flex items-center mb-4' },
            React.createElement(
              'div',
              { 
                className: 'w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-yellow-500 flex items-center justify-center text-white font-bold text-lg mr-3'
              },
              'SE'
            ),
            React.createElement(
              'h3',
              { className: 'text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400' },
              'Sadegh Etemad'
            )
          ),
          React.createElement(
            'p',
            { className: 'text-gray-400 mb-4 text-justify' },
            'Senior ML Engineer & AI Tech Lead focused on scalable, reliable AI systems in production.'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 text-sm' },
            ` ${currentYear} All Rights Reserved`
          )
        ),
        // Navigation
        React.createElement(
          'div',
          { className: 'md:col-span-3' },
          React.createElement(
            'h4',
            { className: 'text-lg font-semibold mb-4 text-gray-300 border-b border-gray-800 pb-2' },
            'Navigation'
          ),
          React.createElement(
            'ul',
            { className: 'space-y-2' },
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { 
                  href: '#about',
                  className: 'text-gray-400 hover:text-white transition-colors inline-flex items-center'
                },
                React.createElement('i', { className: 'fas fa-chevron-right text-xs mr-2 text-yellow-400' }),
                'About'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { 
                  href: '#experience',
                  className: 'text-gray-400 hover:text-white transition-colors inline-flex items-center'
                },
                React.createElement('i', { className: 'fas fa-chevron-right text-xs mr-2 text-blue-400' }),
                'Experience'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { 
                  href: '#research',
                  className: 'text-gray-400 hover:text-white transition-colors inline-flex items-center'
                },
                React.createElement('i', { className: 'fas fa-chevron-right text-xs mr-2 text-blue-400' }),
                'Research'
              )
            )
            // Contact link removed as requested
          )
        ),
        // Connect
        React.createElement(
          'div',
          { className: 'md:col-span-5' },
          React.createElement(
            'h4',
            { className: 'text-lg font-semibold mb-4 text-gray-300 border-b border-gray-800 pb-2' },
            'Connect'
          ),
          React.createElement(
            'div',
            { className: 'grid grid-cols-3 gap-4' },
            // GitHub
            React.createElement(
              'a', 
              { 
                href: 'https://github.com/sadeghetemad',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-blue-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-github text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'GitHub')
            ),
            // LinkedIn
            React.createElement(
              'a', 
              { 
                href: 'https://www.linkedin.com/in/sadegh-etemad/',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-blue-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-linkedin text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'LinkedIn')
            ),
            // ResearchGate
            React.createElement(
              'a', 
              { 
                href: 'https://www.researchgate.net/profile/Sadegh-Etemad-2',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-blue-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-researchgate text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'Research')
            ),
            // Google Scholar
            React.createElement(
              'a', 
              { 
                href: 'https://scholar.google.com/citations?user=oIMDgJsAAAAJ&hl=en',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-yellow-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fas fa-graduation-cap text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'Scholar')
            ),
            // ORCID
            React.createElement(
              'a', 
              { 
                href: 'https://orcid.org/0000-0003-0665-7305',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-blue-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-orcid text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'ORCID')
            )        
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'mt-10 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm' },
        'Designed and developed with  using React, Tailwind CSS, and Framer Motion'
      )
    )
  );
};
