import * as pageItems from './pageItems.js';

///////////////////////////////////////////////////////////////////
// Dark mode 
export function setDarkMode(theme) {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme !== theme) {
    toggleDarkMode();
  }
}

export function toggleDarkMode() {
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

export function showLeftPanel(el) {
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  el.classList.add('active');

  document.getElementById('leftPanel-body').innerHTML = menuHTML[menuKey];

  const panel = document.getElementById('leftPanel');
  panel.classList.add('show');
  document.body.classList.add('panel-open');
}

export function hideLeftPanel() {
  document.getElementById('leftPanel').classList.remove('show');
  document.body.classList.remove('panel-open');

  // Remove active state
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
}

export function toggleLeftPanel(el) {
  const panel = document.getElementById('leftPanel');
  const isVisible = panel.classList.contains('show');

  if (isVisible) {
    hideLeftPanel();
  } else {
    showLeftPanel(el);
  }
}

//////////////////////////////////////////////////////////////////////////////////
// left (sidebar) menu tree-view

export function toggleNode(el) {
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

//////////////////////////////////////////////////////////////////////
// right (notes) side box
export function showNote(el) {
  const panel = document.getElementById('rightPanel');
  panel.classList.add('show');

  const key = el.getAttribute('noteKey');
  document.getElementById('rightPanel-title').textContent = noteTitle[key];
  document.getElementById('rightPanel-body').innerHTML    = noteHTML[key];
}

export function hideNote() {
  document.getElementById('rightPanel').classList.remove('show');
}

///////////////////////////////////////////////////////////////////

export function initBoxes() {
  document.querySelectorAll('.box-header').forEach(header => {
    const selector  = header.getAttribute('data-bs-target');
    const collapser = document.querySelector(selector);

    const toggleBtn = header.querySelector('.toggle-btn');
    const copyBtn   = header.querySelector('.copy-btn');
    const body      = collapser.querySelector('.box-body') || collapser;

    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapser, { toggle: false });

    // Toggle on header click
    header.addEventListener('click', () => {
      bsCollapse.toggle();
    });

    collapser.addEventListener('show.bs.collapse', () => {
      toggleBtn?.classList.replace('fa-plus', 'fa-minus');
      header.classList.remove('collapsed');
    });

    collapser.addEventListener('hide.bs.collapse', () => {
      toggleBtn?.classList.replace('fa-minus', 'fa-plus');
      header.classList.add('collapsed');
    });

    // Initial state
    if (collapser.classList.contains('show')) {
      toggleBtn?.classList.replace('fa-plus', 'fa-minus');
      header.classList.remove('collapsed');
    } else {
      toggleBtn?.classList.replace('fa-minus', 'fa-plus');
      header.classList.add('collapsed');
    }

    // Copy button
    copyBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      navigator.clipboard.writeText(body.innerText.trim()).then(() => {
        copyBtn.classList.replace('fa-clipboard', 'fa-check');

        const bgColor = body.style.backgroundColor;
        const sdColor = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary').trim();
        body.style.backgroundColor = sdColor;
        
        setTimeout(() => {
          copyBtn.classList.replace('fa-check', 'fa-clipboard');
          body.style.backgroundColor = bgColor;
        }, 500);
      }).catch(() => {
        alert('Copy failed');
      });
    });
  });
};

///////////////////////////////////////////////////////////////////
