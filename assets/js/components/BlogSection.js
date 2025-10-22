
const BlogSection = () => {
  const section = document.createElement('section');
  section.id = 'blog';
  section.className = 'bg-gray-50 dark:bg-gray-900 py-12';
  section.innerHTML = `
    <div class="container">
      <h3 class="section-title">Blog</h3>
      <p class="text-gray-700 dark:text-gray-300">Placeholder for blog feeds (Medium / personal posts). You can connect this later to your Medium or RSS feed.</p>
    </div>
  `;
  return section;
}

export default BlogSection;
