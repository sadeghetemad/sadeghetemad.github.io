
const ContactSection = () => {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'max-w-4xl mx-auto px-6 py-12';
  section.innerHTML = `
    <h3 class="section-title">Contact</h3>
    <p class="text-gray-700 dark:text-gray-300 mb-2"><i class="fa fa-envelope mr-2"></i> <a href="mailto:Sadegh.Etemad@gmail.com">Sadegh.Etemad@gmail.com</a></p>
    <p class="text-gray-700 dark:text-gray-300 mb-2"><i class="fa fa-map-marker-alt mr-2"></i> Middlesbrough, United Kingdom</p>
    <p class="text-gray-700 dark:text-gray-300"><i class="fa fa-phone mr-2"></i> +44 7960 158628</p>
  `;
  return section;
}

export default ContactSection;
