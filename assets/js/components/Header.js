'use strict';

// Header Component
const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' }
  ];

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
        title: item.label,
        'aria-label': item.label,
        className: 'text-gray-700 hover:text-blue-600 transition-colors flex items-center justify-center'
      },
      item.image
        ? React.createElement('img', { src: item.image, alt: item.label, className: 'scholar-logo w-4 h-4' })
        : React.createElement('i', { className: item.icon })
    );
  };

  return React.createElement(
    'header',
    {
      className: `fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`
    },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 flex justify-between items-center' },
      React.createElement(
        'a',
        { href: '#hero', className: 'flex items-center gap-2' },
        React.createElement('div', { className: 'w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg' }, 'SE'),
        React.createElement(
          'div',
          null,
          React.createElement('h1', { className: 'text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600' }, 'Sadegh Etemad'),
          React.createElement('p', { className: 'text-xs text-gray-600 hidden sm:block' }, 'Senior AI/ML Engineer & Technical Lead')
        )
      ),
      React.createElement(
        'nav',
        { className: 'hidden md:flex items-center space-x-6' },
        navItems.map(item => React.createElement(
          'a',
          { key: item.href, href: item.href, className: 'text-gray-700 hover:text-blue-600 transition-colors relative group' },
          item.label,
          React.createElement('span', { className: 'absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full' })
        )),
        React.createElement(
          'div',
          { className: 'ml-auto hidden md:flex items-center space-x-5' },
          socialItems.map(item => React.createElement(SocialIcon, { key: item.label, ...item }))
        )
      ),
      React.createElement(
        'div',
        { className: 'md:hidden flex items-center' },
        React.createElement(
          'button',
          { onClick: () => setMenuOpen(!menuOpen), className: 'focus:outline-none bg-gray-200 p-2 rounded', 'aria-label': 'Toggle menu' },
          React.createElement('i', { className: menuOpen ? 'fas fa-times' : 'fas fa-bars', 'aria-hidden': 'true' })
        )
      ),
      menuOpen && React.createElement(
        'div',
        { className: 'absolute top-full left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 ease-in-out' },
        React.createElement(
          'div',
          { className: 'container mx-auto px-4 py-4 flex flex-col space-y-4' },
          navItems.map(item => React.createElement('a', { key: item.href, href: item.href, className: 'hover:text-blue-600 transition-colors p-2', onClick: () => setMenuOpen(false) }, item.label)),
          React.createElement(
            'div',
            { className: 'flex space-x-4 p-2 border-t border-gray-200 pt-4' },
            socialItems.map(item => React.createElement(SocialIcon, { key: item.label, ...item }))
          )
        )
      )
    )
  );
};
