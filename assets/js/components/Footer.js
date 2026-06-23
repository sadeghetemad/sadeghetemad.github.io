'use strict';

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' }
  ];
  const socialItems = [
    { href: 'https://github.com/sadeghetemad', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/sadegh-etemad/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
    { href: 'https://scholar.google.com/citations?user=oIMDgJsAAAAJ&hl=en', image: './assets/images/google-scholar.png', label: 'Scholar' },
    { href: './assets/Sadegh_Etemad_Resume.pdf', icon: 'far fa-file-pdf', label: 'Resume', download: true }
  ];

  const SocialCard = (item) => {
    return React.createElement(
      'a',
      {
        key: item.label,
        href: item.href,
        target: item.download ? '_self' : '_blank',
        rel: item.download ? undefined : 'noopener noreferrer',
        download: item.download ? 'Sadegh_Etemad_Resume.pdf' : undefined,
        className: 'bg-gray-800 p-3 rounded-lg hover:bg-blue-900 transition-colors flex flex-col items-center justify-center',
        title: item.label
      },
      item.image
        ? React.createElement('img', { src: item.image, alt: item.label, className: 'scholar-logo w-5 h-5 mb-2' })
        : React.createElement('i', { className: `${item.icon} text-xl mb-2` }),
      React.createElement('span', { className: 'text-xs' }, item.label)
    );
  };

  return React.createElement(
    'footer',
    { className: 'bg-gray-900 text-white py-12 relative overflow-hidden' },
    React.createElement('div', {
      className: 'absolute inset-0 opacity-5',
      style: {
        backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)',
        backgroundSize: '100px 100px'
      }
    }),
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 relative z-10' },
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-12 gap-8 items-start' },
        React.createElement(
          'div',
          { className: 'md:col-span-5' },
          React.createElement(
            'div',
            { className: 'flex items-center mb-4' },
            React.createElement('div', { className: 'w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg mr-3' }, 'SE'),
            React.createElement('h3', { className: 'text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400' }, 'Sadegh Etemad')
          ),
          React.createElement('p', { className: 'text-gray-400 mb-4 text-justify' }, 'Senior AI/ML Engineer & Technical Lead focused on production AI systems, LLM applications, multimodal AI, and scalable machine learning platforms.'),
          React.createElement('p', { className: 'text-gray-500 text-sm' }, `${currentYear} All Rights Reserved`)
        ),
        React.createElement(
          'div',
          { className: 'md:col-span-3' },
          React.createElement('h4', { className: 'text-lg font-semibold mb-4 text-gray-300 border-b border-gray-800 pb-2' }, 'Navigation'),
          React.createElement(
            'ul',
            { className: 'space-y-2' },
            navItems.map(item => React.createElement(
              'li',
              { key: item.href },
              React.createElement('a', { href: item.href, className: 'text-gray-400 hover:text-blue-400 transition-colors' }, item.label)
            ))
          )
        ),
        React.createElement(
          'div',
          { className: 'md:col-span-4' },
          React.createElement('h4', { className: 'text-lg font-semibold mb-4 text-gray-300 border-b border-gray-800 pb-2' }, 'Connect'),
          React.createElement(
            'div',
            { className: 'grid grid-cols-4 gap-4' },
            socialItems.map(item => React.createElement(SocialCard, { key: item.label, ...item }))
          )
        )
      ),
      React.createElement('div', { className: 'mt-10 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm' }, 'Designed and developed using React and Tailwind CSS')
    )
  );
};
