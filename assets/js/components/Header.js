'use strict';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');
  const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'system');

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
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

  React.useEffect(() => {
    const ids = ['about', 'experience', 'projects'];
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-20% 0px -60% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, []);

  const cycleTheme = () => {
    const next = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system';
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  const themeIcon = theme === 'dark' ? 'fa-moon' : theme === 'light' ? 'fa-sun' : 'fa-circle-half-stroke';
  const themeLabel = theme === 'dark' ? 'Dark' : theme === 'light' ? 'Light' : 'System';

  const navItems = [
    { label: 'About',      href: '#about',      id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects',   href: '#projects',   id: 'projects' }
  ];

  return React.createElement(
    'header',
    {
      className: 'fixed w-full z-50 transition-all duration-500 ' +
        (scrolled
          ? 'py-3 shadow-sm border-b header-glass'
          : 'py-5 bg-transparent border-b border-transparent')
    },
    React.createElement(
      'div',
      { className: 'container mx-auto px-6' },
      React.createElement(
        'div',
        { className: 'flex items-center justify-between' },

        // Logo
        React.createElement(
          'a',
          { href: '#hero', className: 'flex items-center gap-3 group flex-shrink-0' },
          React.createElement(
            'div',
            { className: 'w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-all duration-200' },
            'SE'
          ),
          React.createElement(
            'div',
            { className: 'hidden sm:block' },
            React.createElement('p', { className: 'text-sm font-semibold text-gray-900 dark:text-white leading-tight' }, 'Sadegh Etemad'),
            React.createElement('p', { className: 'text-xs text-gray-400 dark:text-gray-500 leading-tight' }, 'Senior AI Engineer')
          )
        ),

        // Desktop nav
        React.createElement(
          'nav',
          { className: 'hidden md:flex items-center gap-8' },
          navItems.map(item => {
            const isActive = activeSection === item.id;
            return React.createElement(
              'a',
              {
                key: item.href,
                href: item.href,
                className: 'relative pb-1 text-sm font-medium transition-colors duration-200 ' +
                  (isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white')
              },
              item.label,
              React.createElement('span', {
                className: 'absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300',
                style: { width: isActive ? '100%' : '0%' }
              })
            );
          })
        ),

        // Right actions
        React.createElement(
          'div',
          { className: 'hidden md:flex items-center gap-3' },
          React.createElement(
            'a',
            {
              href: './assets/Sadegh_Etemad_Resume.pdf',
              download: 'Sadegh_Etemad_Resume.pdf',
              title: 'Download CV',
              'aria-label': 'Download CV',
              className: 'w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200'
            },
            React.createElement('i', { className: 'far fa-file-pdf text-sm' })
          ),
          React.createElement(
            'button',
            {
              onClick: cycleTheme,
              title: themeLabel,
              'aria-label': themeLabel,
              className: 'w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200'
            },
            React.createElement('i', { className: 'fas ' + themeIcon + ' text-sm' })
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
              'aria-label': themeLabel,
              className: 'w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200'
            },
            React.createElement('i', { className: 'fas ' + themeIcon + ' text-sm' })
          ),
          React.createElement(
            'button',
            {
              onClick: () => setMenuOpen(!menuOpen),
              'aria-label': 'Toggle menu',
              className: 'w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200'
            },
            React.createElement('i', { className: 'fas ' + (menuOpen ? 'fa-times' : 'fa-bars') + ' text-sm' })
          )
        )
      ),

      // Mobile menu
      menuOpen && React.createElement(
        'div',
        { className: 'md:hidden mt-3 p-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-2xl' },
        React.createElement(
          'div',
          { className: 'flex flex-col gap-1' },
          navItems.map(item => {
            const isActive = activeSection === item.id;
            return React.createElement(
              'a',
              {
                key: item.href,
                href: item.href,
                className: 'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ' +
                  (isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'),
                onClick: () => setMenuOpen(false)
              },
              isActive && React.createElement('span', {
                className: 'w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0'
              }),
              item.label
            );
          }),
          React.createElement('div', { className: 'h-px bg-gray-100 dark:bg-gray-800 my-2' }),
          React.createElement(
            'a',
            {
              href: './assets/Sadegh_Etemad_Resume.pdf',
              download: 'Sadegh_Etemad_Resume.pdf',
              className: 'flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors'
            },
            React.createElement('i', { className: 'far fa-arrow-alt-circle-down text-xs' }),
            'Download CV'
          )
        )
      )
    )
  );
};
