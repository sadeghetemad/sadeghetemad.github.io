'use strict';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialItems = [
    { href: 'https://github.com/sadeghetemad', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/sadegh-etemad/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
    { href: 'https://scholar.google.com/citations?user=oIMDgJsAAAAJ&hl=en', image: './assets/images/google-scholar.png', label: 'Google Scholar' },
    { href: './assets/Sadegh_Etemad_Resume.pdf', icon: 'far fa-file-pdf', label: 'Resume', download: true }
  ];

  const SocialIcon = (item) => {
    const [hovered, setHovered] = React.useState(false);
    return React.createElement(
      'a',
      {
        key: item.label,
        href: item.href,
        target: item.download ? '_self' : '_blank',
        rel: item.download ? undefined : 'noopener noreferrer',
        download: item.download ? 'Sadegh_Etemad_Resume.pdf' : undefined,
        title: item.label,
        'aria-label': item.label,
        className: 'text-gray-500 hover:text-blue-400 transition-colors flex items-center justify-center',
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false)
      },
      item.image
        ? React.createElement('img', {
            src: item.image,
            alt: item.label,
            className: 'w-4 h-4',
            style: {
              filter: hovered
                ? 'invert(50%) sepia(90%) saturate(500%) hue-rotate(190deg) brightness(110%)'
                : 'brightness(0) invert(1) opacity(0.5)',
              transition: 'filter 0.2s ease'
            }
          })
        : React.createElement('i', { className: item.icon + ' text-lg' })
    );
  };

  return React.createElement(
    'footer',
    { className: 'bg-gray-900 border-t border-gray-800' },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4' },
      // Social icons
      React.createElement(
        'div',
        { className: 'flex items-center gap-5' },
        socialItems.map(item => React.createElement(SocialIcon, { key: item.label, ...item }))
      ),
      // Copyright
      React.createElement(
        'p',
        { className: 'text-xs text-gray-600' },
        `© ${currentYear} Sadegh Etemad`
      )
    )
  );
};
