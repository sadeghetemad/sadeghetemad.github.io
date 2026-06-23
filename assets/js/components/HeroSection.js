'use strict';

// Hero Section Component
const HeroSection = () => {
  const socialItems = [
    { href: 'https://github.com/sadeghetemad', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/sadegh-etemad/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
    { href: 'https://scholar.google.com/citations?user=oIMDgJsAAAAJ&hl=en', image: './assets/images/google-scholar.png', label: 'Google Scholar' },
    { href: './assets/Sadegh_Etemad_Resume.pdf', icon: 'far fa-file-pdf', label: 'Resume', download: true }
  ];

  const SocialIcon = (item) => {
    return React.createElement(
      'a',
      {
        key: item.label,
        href: item.href,
        target: item.download ? '_self' : '_blank',
        rel: item.download ? undefined : 'noopener noreferrer',
        download: item.download ? 'Sadegh_Etemad_Resume.pdf' : undefined,
        className: 'text-gray-700 hover:text-blue-600 transition-colors contact-link pulse flex items-center justify-center',
        title: item.label,
        'aria-label': item.label
      },
      item.image
        ? React.createElement('img', { src: item.image, alt: item.label, className: 'scholar-logo w-7 h-7' })
        : React.createElement('i', { className: `${item.icon} text-2xl` })
    );
  };

  return React.createElement(
    'section',
    { id: 'hero', className: 'min-h-screen flex items-center py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-100 transition-colors duration-300 relative overflow-hidden' },
    React.createElement(
      'div',
      { className: 'absolute inset-0 overflow-hidden pointer-events-none' },
      Array.from({ length: 20 }).map((_, i) => React.createElement('div', {
        key: i,
        className: `absolute rounded-full ${i % 2 === 0 ? 'bg-blue-500' : 'bg-indigo-500'} opacity-10`,
        style: {
          width: `${Math.random() * 100 + 50}px`,
          height: `${Math.random() * 100 + 50}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 20 + 10}s`,
          animationDelay: `${Math.random() * 5}s`
        }
      }))
    ),
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 relative z-10' },
      React.createElement(
        'div',
        { className: 'flex flex-col-reverse md:flex-row items-center justify-between gap-12' },
        React.createElement(
          'div',
          { className: 'w-full md:w-1/2 fade-in' },
          React.createElement(
            'h1',
            { className: 'text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 leading-tight' },
            React.createElement('span', { className: 'bg-gradient-blue-yellow bg-clip-text text-transparent block' }, 'Sadegh Etemad')
          ),
          React.createElement(
            'div',
            { className: 'h-14 mb-4 relative overflow-hidden title-animation-container' },
            React.createElement('div', { id: 'title-rotator', className: 'text-xl md:text-2xl font-bold text-gray-800' })
          ),
          React.createElement(
            'p',
            { className: 'text-lg text-gray-700 mb-6 max-w-2xl parallax text-justify', 'data-speed': '0.1' },
            'Senior AI/ML Engineer and Technical Lead with 8+ years of experience building production-grade AI systems. Specialized in LLMs, Agentic AI, Generative AI, Multimodal AI, and scalable machine learning platforms across healthcare, education, transportation, and digital products.'
          ),
          React.createElement(
            'div',
            { className: 'flex mt-8 space-x-6 stagger-item' },
            socialItems.map(item => React.createElement(SocialIcon, { key: item.label, ...item }))
          )
        ),
        React.createElement(
          'div',
          { className: 'w-full md:w-1/2 flex justify-center fade-in' },
          React.createElement(
            'div',
            { className: 'w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative rounded-full overflow-hidden border-4 border-white shadow-xl profile-image hover-3d' },
            React.createElement('img', {
              src: './assets/images/profile.jpg',
              alt: 'Sadegh Etemad',
              className: 'absolute inset-0 w-full h-full object-cover',
              onError: 'this.src="https://via.placeholder.com/400x400?text=Sadegh+Etemad"'
            })
          )
        )
      )
    )
  );
};
