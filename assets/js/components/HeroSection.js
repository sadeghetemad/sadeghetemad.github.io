
const HeroSection = () => {
  const section = document.createElement('section');
  section.className = 'pt-32 pb-16 text-center';
  section.id = 'hero';
  section.innerHTML = `
    <div class="container">
      <img src="./assets/images/profile.jpg" alt="Sadegh Etemad" class="mx-auto w-40 h-40 rounded-full profile-round mb-6" />
      <h2 class="text-3xl font-bold mb-2">Senior Data Scientist & Machine Learning Engineer</h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Multimodal AI · Deep Learning · Biomedical Research · Computational Modeling
      </p>
      <div class="mt-4 flex justify-center space-x-6 text-blue-600">
        <a href="https://www.linkedin.com/in/sadegh-etemad-76147983/" target="_blank"><i class="fab fa-linkedin fa-lg"></i></a>
        <a href="https://github.com/sadeghetemad" target="_blank"><i class="fab fa-github fa-lg"></i></a>
        <a href="https://scholar.google.com/citations?user=oIMDgJsAAAAJ&hl=en" target="_blank"><i class="fas fa-graduation-cap fa-lg"></i></a>
        <a href="https://research.tees.ac.uk/en/persons/sadegh-etemad" target="_blank"><i class="fas fa-university fa-lg"></i></a>
      </div>
    </div>`;
  return section;
}

export default HeroSection;
