
const Header = () => {
  const header = document.createElement('header');
  header.className = 'fixed w-full bg-white dark:bg-gray-800 shadow z-50';
  header.innerHTML = `
  <div class="container flex justify-between items-center py-4">
    <h1 class="text-xl font-bold text-blue-600">Sadegh Etemad</h1>
    <nav class="space-x-5 text-sm font-medium">
      <a href="#about" class="hover:text-blue-600">About</a>
      <a href="#research" class="hover:text-blue-600">Research</a>
      <a href="#projects" class="hover:text-blue-600">Projects</a>
      <a href="#blog" class="hover:text-blue-600">Blog</a>
      <a href="#contact" class="hover:text-blue-600">Contact</a>
    </nav>
  </div>`;
  return header;
}

export default Header;
