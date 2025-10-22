
import Header from './components/Header.js';
import HeroSection from './components/HeroSection.js';
import AboutSection from './components/AboutSection.js';
import ResearchSection from './components/ResearchSection.js';
import ProjectsSection from './components/ProjectsSection.js';
import BlogSection from './components/BlogSection.js';
import SocialSection from './components/SocialSection.js';
import ContactSection from './components/ContactSection.js';
import Footer from './components/Footer.js';

const root = document.getElementById('root');

// Build layout
const header = Header();
root.appendChild(header);

const main = document.createElement('main');
main.appendChild(HeroSection());
main.appendChild(AboutSection());
main.appendChild(ResearchSection());
main.appendChild(ProjectsSection());
main.appendChild(BlogSection());
main.appendChild(SocialSection());
main.appendChild(ContactSection());
main.appendChild(Footer());
root.appendChild(main);

// Dark mode toggle (simple)
const toggle = document.createElement('button');
toggle.className = 'fixed bottom-6 right-6 bg-white dark:bg-gray-700 p-3 rounded-full shadow';
toggle.innerHTML = '<i class="fas fa-moon"></i>';
toggle.onclick = () => {
  document.documentElement.classList.toggle('dark');
  // persist
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
};
document.body.appendChild(toggle);

// Initialize theme from localStorage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
