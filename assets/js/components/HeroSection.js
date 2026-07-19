'use strict';

const HeroSection = () => {
  const socialItems = [
    { href: 'https://github.com/sadeghetemad', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/sadegh-etemad/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
    { href: 'https://scholar.google.com/citations?user=oIMDgJsAAAAJ&hl=en', image: './assets/images/google-scholar.png', label: 'Google Scholar' },
    { href: './assets/Sadegh_Etemad_Resume.pdf', icon: 'far fa-file-pdf', label: 'Resume', download: true }
  ];

  const SocialIcon = (item) => React.createElement(
    'a',
    {
      key: item.label,
      href: item.href,
      target: item.download ? '_self' : '_blank',
      rel: item.download ? undefined : 'noopener noreferrer',
      download: item.download ? 'Sadegh_Etemad_Resume.pdf' : undefined,
      className: 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors contact-link flex items-center justify-center' + (item.download ? ' gap-1.5' : ''),
      title: item.label,
      'aria-label': item.label
    },
    item.image
      ? React.createElement('img', { src: item.image, alt: item.label, className: 'scholar-logo w-7 h-7' })
      : React.createElement('i', { className: item.icon + ' text-2xl' }),
    item.download
      ? React.createElement('span', { className: 'text-xs font-medium leading-none' }, 'Jul 2026')
      : null
  );

  return React.createElement(
    'section',
    {
      id: 'hero',
      className: 'min-h-screen flex items-center py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 relative overflow-hidden'
    },
    // Background blobs
    React.createElement(
      'div',
      { className: 'absolute inset-0 overflow-hidden pointer-events-none' },
      React.createElement('div', {
        className: 'absolute top-1/4 left-1/4 w-96 h-96 rounded-full',
        style: { background: 'rgba(96,165,250,0.18)', filter: 'blur(80px)' }
      }),
      React.createElement('div', {
        className: 'absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full',
        style: { background: 'rgba(129,140,248,0.18)', filter: 'blur(80px)' }
      })
    ),
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 relative z-10' },
      React.createElement(
        'div',
        { className: 'flex flex-col-reverse md:flex-row items-center justify-between gap-12' },
        // Text content
        React.createElement(
          'div',
          { className: 'w-full md:w-1/2 fade-in' },
          React.createElement(
            'h1',
            { className: 'text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight' },
            React.createElement('span', { className: 'bg-gradient-blue-yellow bg-clip-text text-transparent block' }, 'Sadegh Etemad')
          ),
          React.createElement(
            'div',
            { className: 'h-14 mb-4 relative overflow-hidden title-animation-container' },
            React.createElement('div', { id: 'title-rotator', className: 'text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200' })
          ),
          React.createElement(
            'p',
            { className: 'text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl parallax text-justify', 'data-speed': '0.1' },
            'Senior AI/ML Engineer and Technical Lead with 8+ years of experience building production-grade AI systems. Specialized in LLMs, Agentic AI, Generative AI, Multimodal AI, and scalable machine learning platforms across healthcare, education, transportation, and digital products.'
          ),
          React.createElement(
            'div',
            { className: 'flex mt-8 space-x-6 stagger-item' },
            socialItems.map(item => React.createElement(SocialIcon, { key: item.label, ...item }))
          )
        ),
        // Profile image
        React.createElement(
          'div',
          { className: 'w-full md:w-1/2 flex justify-center fade-in' },
          React.createElement(
            'div',
            { className: 'w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl profile-image hover-3d' },
            React.createElement('img', {
              src: './assets/images/profile.jpg',
              alt: 'Sadegh Etemad',
              className: 'absolute inset-0 w-full h-full object-cover'
            })
          )
        )
      )
    )
  );
};
