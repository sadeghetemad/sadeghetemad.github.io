'use strict';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'system');

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const applyTheme = (t) => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', t === 'dark' || (t === 'system' && prefersDark));
    };
    applyTheme(theme);
    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => applyTheme('system');
      mq.addEventListener('change', listener);
      return () => mq.removeEventListener('change', listener);
    }
  }, [theme]);

  const cycleTheme = () => {
    const next = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system';
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  const themeIcon = theme === 'dark' ? 'fa-moon' : theme === 'light' ? 'fa-sun' : 'fa-circle-half-stroke';
  const themeLabel = theme === 'dark' ? 'Dark' : theme === 'light' ? 'Light' : 'System';

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' }
  ];

  const socialItems = [
    { href: 'https://github.com/sadeghetemad', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/sadegh-etemad/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
    { href: 'https://scholar.google.com/citations?user=oIMDgJsAAAAJ&hl=en', image: './assets/images/google-scholar.png', label: 'Google Scholar' },
    { href: './assets/Sadegh_Etemad_Resume.pdf', icon: 'far fa-file-pdf', label: 'CV', download: true }
  ];

  const SocialIcon = (item) => React.createElement(
    'a',
    {
      key: item.label,
      href: item.href,
      target: item.download ? '_self' : '_blank',
      rel: item.download ? undefined : 'noopener noreferrer',
      download: item.download ? 'Sadegh_Etemad_Resume.pdf' : undefined,
      title: item.label,
      'aria-label': item.label,
      className: 'w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200'
    },
    item.image
      ? React.createElement('img', { src: item.image, alt: item.label, className: 'scholar-logo w-4 h-4' })
      : React.createElement('i', { className: item.icon + ' text-sm' })
  );

  return React.createElement(
    'header',
    {
      className: 'fixed w-full z-50 transition-all duration-300 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 ' +
        (scrolled ? 'py-3 shadow-sm' : 'py-5')
    },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4' },
      React.createElement(
        'div',
        { className: 'flex items-center justify-between' },

        // Logo
        React.createElement(
          'a',
          { href: '#hero', className: 'flex items-center gap-3 group' },
          React.createElement(
            'div',
            { className: 'w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-blue-500/30 transition-shadow duration-300' },
            'SE'
          ),
          React.createElement(
            'div',
            { className: 'hidden sm:block' },
            React.createElement('p', { className: 'text-sm font-semibold text-gray-900 dark:text-white leading-tight' }, 'Sadegh Etemad'),
            React.createElement('p', { className: 'text-xs text-gray-400 dark:text-gray-500 leading-tight' }, 'Senior AI/ML Engineer')
          )
        ),

        // Desktop nav — pill-style
        React.createElement(
          'nav',
          { className: 'hidden md:flex items-center gap-1 bg-gray-100/80 dark:bg-gray-800/80 rounded-full px-2 py-1.5 backdrop-blur-sm' },
          navItems.map(item => React.createElement(
            'a',
            {
              key: item.href,
              href: item.href,
              className: 'px-4 py-1.5 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-none hover:shadow-sm'
            },
            item.label
          ))
        ),

        // Right-side actions
        React.createElement(
          'div',
          { className: 'hidden md:flex items-center gap-1' },
          // Social icons
          socialItems.map(item => React.createElement(SocialIcon, { key: item.label, ...item })),
          // Divider
          React.createElement('div', { className: 'w-px h-4 bg-gray-200 dark:bg-gray-700 mx-1' }),
          // Theme toggle
          React.createElement(
            'button',
            {
              onClick: cycleTheme,
              title: themeLabel,
              'aria-label': themeLabel,
              className: 'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200'
            },
            React.createElement('i', { className: 'fas ' + themeIcon + ' text-xs' }),
            React.createElement('span', { className: 'hidden lg:inline' }, themeLabel)
          )
        ),

        // Mobile controls
        React.createElement(
          'div',
          { className: 'md:hidden flex items-center gap-2' },
          React.createElement(
            'button',
            {
              onClick: cycleTheme,
              title: themeLabel,
              'aria-label': themeLabel,
              className: 'w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200'
            },
            React.createElement('i', { className: 'fas ' + themeIcon + ' text-sm' })
          ),
          React.createElement(
            'button',
            {
              onClick: () => setMenuOpen(!menuOpen),
              className: 'w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200',
              'aria-label': 'Toggle menu'
            },
            React.createElement('i', { className: (menuOpen ? 'fas fa-times' : 'fas fa-bars') + ' text-sm' })
          )
        )
      ),

      // Mobile menu
      menuOpen && React.createElement(
        'div',
        { className: 'md:hidden mt-3 p-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl' },
        React.createElement(
          'div',
          { className: 'flex flex-col gap-1' },
          navItems.map(item => React.createElement(
            'a',
            {
              key: item.href,
              href: item.href,
              className: 'px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
              onClick: () => setMenuOpen(false)
            },
            item.label
          )),
          React.createElement('div', { className: 'h-px bg-gray-100 dark:bg-gray-800 my-1' }),
          React.createElement(
            'div',
            { className: 'flex items-center gap-1 px-2' },
            socialItems.map(item => React.createElement(SocialIcon, { key: item.label, ...item }))
          )
        )
      )
    )
  );
};
