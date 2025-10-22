
const ProjectsSection = () => {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'max-w-4xl mx-auto px-6 py-12';
  section.innerHTML = `
    <h3 class="section-title">Projects</h3>
    <div class="grid md:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
      <div class="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
        <h4 class="font-semibold mb-2">Multimodal AI for Cancer Research</h4>
        <p class="text-sm">Integrating spatial transcriptomics, histopathology and fluxomics to discover biomarkers and predict tissue-level phenotypes.</p>
      </div>
      <div class="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
        <h4 class="font-semibold mb-2">ETA Prediction & Map Intelligence (Snapp!)</h4>
        <p class="text-sm">Large-scale traffic forecasting and ETA optimization using spatio-temporal models and feature engineering.</p>
      </div>
      <div class="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
        <h4 class="font-semibold mb-2">Algorithmic Trading & Market Forecasting</h4>
        <p class="text-sm">Time-series models and ML-based trading strategies used in production for market forecasting tasks.</p>
      </div>
    </div>
  `;
  return section;
}

export default ProjectsSection;
