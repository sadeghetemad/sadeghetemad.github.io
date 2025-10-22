
const ResearchSection = () => {
  const section = document.createElement('section');
  section.id = 'research';
  section.className = 'bg-gray-100 dark:bg-gray-800 py-12';
  section.innerHTML = `
    <div class="container">
      <h3 class="section-title">Research</h3>
      <p class="text-gray-700 dark:text-gray-300 mb-4">
        My research focuses on <strong>spatial omics</strong> and <strong>multimodal AI</strong> for biomedical applications, with emphasis on integrating spatial transcriptomics, histopathology, and metabolic fluxomics to discover biomarkers and model cell–cell interactions.
      </p>
      <ul class="list-disc ml-6 text-gray-700 dark:text-gray-300">
        <li>Multimodal integration of imaging and omics data</li>
        <li>Explainable AI and transformer-based models for biomedical data</li>
        <li>Metabolic flux modelling and cell–cell communication analysis</li>
      </ul>
    </div>
  `;
  return section;
}

export default ResearchSection;
