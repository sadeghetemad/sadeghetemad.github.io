
const AboutSection = () => {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'max-w-4xl mx-auto px-6 py-12';
  section.innerHTML = `
    <h3 class="section-title">About Me</h3>
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      I’m a Senior Data Scientist and AI Team Lead with over 7 years of experience developing scalable machine learning systems across multiple industries including transportation, finance, e-commerce, and biomedical research.
      Currently, I’m working at <strong>Teesside University</strong> on <strong>multimodal AI applications</strong> for cancer and precision medicine, combining spatial transcriptomics, histopathology, and fluxomics data.
    </p>
  `;
  return section;
}

export default AboutSection;
