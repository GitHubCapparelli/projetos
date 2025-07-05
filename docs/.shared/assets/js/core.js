///////////////////////////////////////////////////////////////////

function toggleDarkMode() {
  const body = document.body;
  const themeIcon = document.querySelector('[data-panel="settings"] i');
  const currentTheme = body.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  body.setAttribute('data-bs-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Update icon
  if (newTheme === 'dark') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.setAttribute('data-bs-theme', savedTheme);
  }
});

///////////////////////////////////////////////////////////////////




