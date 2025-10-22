
const SocialSection = () => {
  const section = document.createElement('section');
  section.className = 'max-w-4xl mx-auto px-6 py-8';
  section.innerHTML = `
    <div class="flex justify-center gap-6">
      <a href="https://www.linkedin.com/in/sadegh-etemad-76147983/" target="_blank" class="text-blue-600"><i class="fab fa-linkedin fa-2x"></i></a>
      <a href="https://github.com/sadeghetemad" target="_blank" class="text-gray-800 dark:text-gray-200"><i class="fab fa-github fa-2x"></i></a>
      <a href="https://scholar.google.com/citations?user=oIMDgJsAAAAJ&hl=en" target="_blank" class="text-gray-800 dark:text-gray-200"><i class="fas fa-graduation-cap fa-2x"></i></a>
    </div>
  `;
  return section;
}

export default SocialSection;
