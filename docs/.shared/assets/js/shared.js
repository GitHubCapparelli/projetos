///////////////////////////////////////////////////////////////////
// Dark mode 
function setDarkMode(theme) {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme !== theme) {
    toggleDarkMode());
  }
}

function toggleDarkMode() {
  const currentTheme = document.body.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.body.setAttribute('data-bs-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  const themeIcon = document.querySelector('[data-panel="settings"] i');
  if (themeIcon) {
    if (newTheme === 'dark') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }
}

///////////////////////////////////////////////////////////////////
// left (menu) sidebar

function openPanel(el) {
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  el.classList.add('active');

  document.getElementById('leftPanel-body').innerHTML = menuHTML[menuKey];

  const panel = document.getElementById('leftPanel');
  panel.classList.add('show');
  document.body.classList.add('panel-open');
}

function closePanel() {
  document.getElementById('leftPanel').classList.remove('show');
  document.body.classList.remove('panel-open');

  // Remove active state
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
}

function togglePanel(el) {
  const panel = document.getElementById('leftPanel');
  const isVisible = panel.classList.contains('show');

  if (isVisible) {
    closePanel();
  } else {
    openPanel(el);
  }
}

//////////////////////////////////////////////////////////////////////////////////
// left (sidebar) menu tree-view

function toggleNode(el) {
  const icon = el.querySelector('i');
  const folderIcon = el.querySelector('.fas.fa-folder, .fas.fa-folder-open');
  const nested = el.nextElementSibling;

  if (nested && nested.classList.contains('nested')) {
    nested.classList.toggle('d-none');

    // Toggle folder icon
    if (folderIcon) {
      if (folderIcon.classList.contains('fa-folder')) {
        folderIcon.classList.remove('fa-folder');
        folderIcon.classList.add('fa-folder-open');
      } else {
        folderIcon.classList.remove('fa-folder-open');
        folderIcon.classList.add('fa-folder');
      }
    }
  }
}

///////////////////////////////////////////////////////////////////
// event listeners
// 
// stick header on scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('stickyTop');

  if (window.scrollY > 60 ) { 
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
});

//////////////////////////////////////////////////////////////////////
// right (notes) side box
function showNote(el) {
  const panel = document.getElementById('rightPanel');
  panel.classList.add('show');

  const key = el.getAttribute('noteKey');
  document.getElementById('rightPanel-title').textContent = noteTitle[key];
  document.getElementById('rightPanel-body').innerHTML    = noteHTML[key];
}

function hideNote() {
  document.getElementById('rightPanel').classList.remove('show');
}

//////////////////////////////////////////////////////////////////////
// init
window.addEventListener('DOMContentLoaded', () => {
  switch (document.body.getAttribute('domain')) {
    case 'user'       : menuKey = 'userApres';  setDarkMode('light'); break;
    case 'user.telas' : menuKey = 'userTelas';  setDarkMode('light'); break;
    case 'tech'       : menuKey = 'techApres';  setDarkMode(localStorage.getItem('theme')); break;
    case 'projetos'   : menuKey = 'projetos';   setDarkMode('light'); break;
    default:            menuKey = '';           setDarkMode('light'); break;
  };
});

///////////////////////////////////////////////////////////////////

