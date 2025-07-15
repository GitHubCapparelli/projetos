import * as pageItems from './pageItems.js';
import * as coreFuncs from './coreFunctions.js';

///////////////////////////////////////////////////////////////////

function initialize(domain) {
  switch (domain) {
    case 'tech':
      pageItems.menuKey = 'techApres';
      coreFuncs.initBoxes();
      coreFuncs.setDarkMode(localStorage.getItem('theme'));
      break;

    case 'user':
      pageItems.menuKey = 'userApres';
      coreFuncs.setDarkMode('light');
      break;

    case 'user.telas':
      pageItems.menuKey = 'userTelas';
      document.getElementById('leftBar').innerHTML    = pageItems.constHTML.leftBar;
      document.getElementById('rightPanel').innerHTML = pageItems.constHTML.rightPanel;
      document.getElementById('footer').innerHTML     = pageItems.footerHTML[pageItems.menuKey];

      const tela = document.body.getAttribute('tela');
      document.getElementById('stickyTop').innerHTML  = getStickyHTML(tela);
      document.getElementById('header').innerHTML     = getHeaderHTML(tela);

      coreFuncs.setDarkMode('light');
      break;

    case 'projetos':
      pageItems.menuKey = 'projetos';
      coreFuncs.setDarkMode('light');
      break;

    default:
      pageItems.menuKey = '';
      coreFuncs.setDarkMode('light');
      break;
  };
}

//////////////////////////////////////////////////////////////////////

export function getStickyHTML(tela) {
  return `<div class="stickyTop-titles">
            <h5 class="mb-0">${pageItems.paifName}</h5>
            <h6 class="mb-0">${pageItems.paifTitles[tela]}</h6>
          </div>`;
}

export function getHeaderHTML(tela) {
  return `<div class="header-left">
              <img class="header-logo" src="/projetos/.shared/assets/img/logo/gdf.png" alt="logo">
              <div class="header-titles">
                  <h6 class="mb-0">GDF/SEDES/SUBSAS/GERVIS</h6>
                  <h5 class="mb-0">${pageItems.paifName}</h5>
              </div>
          </div>
          <div class="header-right">
              <h5 class="mb-0">${pageItems.paifTag[tela]}</h5>
          </div>`;
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

///////////////////////////////////////////////////////////////////
// initializing...

window.addEventListener('DOMContentLoaded', () => {
  initialize(document.body.getAttribute('domain'));
});
