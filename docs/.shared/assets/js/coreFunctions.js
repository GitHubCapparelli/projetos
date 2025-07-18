import * as pageItems  from './pageItems.js';
import * as notes from './notes.js';

window.pageItems = pageItems;
window.notes     = notes;

////////////////////////////////////////////////////////////////////////////////////////////////////// 
// dark mode 
export function setDarkMode(theme) {
  const savedTheme = storeGet('theme');
  if (savedTheme !== theme) {
    toggleDarkMode();
  }
}

export function toggleDarkMode() {
  const currentTheme = document.body.getAttribute('data-bs-theme');
  const newTheme     = currentTheme === 'dark' ? 'light' : 'dark';

  document.body.setAttribute('data-bs-theme', newTheme);
  storeSet('theme', newTheme);

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

export const storeGet = (key)        => localStorage.getItem(key);
export const storeSet = (key, value) => localStorage.setItem(key, value);

///////////////////////////////////////////////////////////////////
// left (menu) sidebar

export function showLeftPanel(el, menuKey) {
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  el.classList.add('active');

  document.getElementById('leftPanel-body').innerHTML = pageItems.menuHTML[menuKey];

  if (menuKey === 'paifUser') { 
    const folderTelas = document.getElementById('folderTelas');
    toggleNode(folderTelas);  
  }

  const panel = document.getElementById('leftPanel');
  panel.classList.add('show');
  document.body.classList.add('panel-open');
  storeSet('leftPanel_visible', true);
}

export function hideLeftPanel() {
  document.getElementById('leftPanel').classList.remove('show');
  document.body.classList.remove('panel-open');
  storeSet('leftPanel_visible', false);

  // Remove active state
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
}

export function toggleLeftPanel(el, menuKey) {
  const panel = document.getElementById('leftPanel');
  const isVisible = panel.classList.contains('show');

  if (isVisible) {
    hideLeftPanel();
  } else {
    showLeftPanel(el, menuKey);
  }
}

export function toggleNode(el) {
  const nested = el.nextElementSibling;
  if (nested && nested.classList.contains('nested')) {
    nested.classList.toggle('d-none');

    // Toggle folder icon
    const folderIcon = el.querySelector('.fas.fa-folder, .fas.fa-folder-open');
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
  document.getElementById('rightPanel-title').textContent = notes.noteTitle[key];
  document.getElementById('rightPanel-body').innerHTML    = notes.noteHTML[key];
}

export function hideNote() {
  document.getElementById('rightPanel').classList.remove('show');
}

///////////////////////////////////////////////////////////////////
