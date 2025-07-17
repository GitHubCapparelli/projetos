import * as coreFuncs from './coreFunctions.js';
window.coreFuncs = coreFuncs;

const dominio  = document.body.getAttribute('domain');
const tela     = document.body.getAttribute('tela');
const building = document.body.hasAttribute('building');

var focoAtual  = '';

///////////////////////////////////////////////////////////////////
// building shared components based on the user's option (use case ?)

function getStickyHTML() {
  return `<div class="stickyTop-titles">
            <h5 class="mb-0">${pageItems.paifName}</h5>
            <h6 class="mb-0">${pageItems.paifTitles[tela]}</h6>
          </div>`;
}

function getHeaderHTML() {
  return `<div class="header-left">
              <img class="header-logo" src="/projetos/.shared/assets/img/logo/gdf.png" alt="logo">
              <div class="header-titles">
                  <h6 class="mb-0">GDF/SEDES/SUBSAS/GERVIS</h6>
                  <h5 class="mb-0">${pageItems.paifName}</h5>
              </div>
          </div>
          <div class="header-right">
              <h5 class="mb-0">${pageItems.paifTags[tela]}</h5>
          </div>`;
}

function getBuildingHTML() {
  return `<div class="building">
            <div class="icon">🚧</div>
            <h1>Página em Construção </h1>
            <p>Estamos trabalhando para trazer algo incrível para você.</p>
            <p>Volte em breve!</p>
            <a onclick="window.history.back();"><i class="fa-solid fa-arrow-left"></i>  Voltar</a>
        </div>`;
}

///////////////////////////////////////////////////////////////////

// dynamic toggle handler for boxes (single accordion 'components')
function initBoxes() {
  document.querySelectorAll('.box-header').forEach(header => {
    const selector = header.getAttribute('data-bs-target');
    const collapser = document.querySelector(selector);

    const toggleBtn = header.querySelector('.toggle-btn');
    const copyBtn = header.querySelector('.copy-btn');
    const body = collapser.querySelector('.box-body') || collapser;

    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapser, { toggle: false });

    // toggle on header click
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

    // copy button
    // navigator.clipboard.writeText requires HTTPS or localhost in most browsers.
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
// helper functions

function formatTitle() {
  return (tela) ? tela.replace(/^tela/, '') : dominio;
}

///////////////////////////////////////////////////////////////////

function initialize() {
  initializeVars();

  initializeHead();
  initializeBody();
  initializeEvents();
}

function initializeVars() {
  switch (dominio) {
    case 'projetos'         : 
      focoAtual = 'projetos';
      telas     = 'projetos';
      break;
    case 'paif'             : 
      focoAtual = 'paif';           
      telas     = 'paif';
      break;
    case 'paif.tech'        : 
      focoAtual = 'paifTech';       
      telas     = 'paifTech';
      break;
    case 'paif.user'        : 
      focoAtual = 'paifUser';       
      telas     = 'paifUser';
      break;
    case 'paif.user.telas'  : 
      focoAtual = 'paifUserTelas';  
      break;
    default                 : 
      focoAtual = '';               
      break;
  }
}

function initializeHead() {
  const head = document.head;
  document.documentElement.classList.add('js-enabled');

  // favicon
  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    head.appendChild(link);
  }
  link.href = pageItems.favIco;

  // stylesheets
  const appendStyles = (list) => {
    list.forEach(href => {
      const link = document.createElement('link');
      link.rel   = 'stylesheet';
      link.type  = 'text/css';
      link.href  = href;
      head.appendChild(link);
    });
  };

  appendStyles(pageItems.sharedStyles);

  if (pageItems.domainStyles[focoAtual]) {
    appendStyles(pageItems.domainStyles[focoAtual]);
  }
}

function initializeBody() {
  document.title = (dominio === 'projetos') 
                 ? 'GERVIS - Soluções' 
                 : `PAIF - ${formatTitle()}`;

  document.getElementById('stickyTop').innerHTML  = getStickyHTML();
  document.getElementById('header').innerHTML     = getHeaderHTML();

  document.getElementById('leftBar').innerHTML    = pageItems.sharedHTML.leftBar;
  document.getElementById('rightPanel').innerHTML = pageItems.sharedHTML.rightPanel;
  document.getElementById('footer').innerHTML     = pageItems.footerHTML[focoAtual];

  if (focoAtual === 'paifTech') {
    coreFuncs.setDarkMode(localStorage.getItem('theme'));
    initBoxes();
  } else {
    coreFuncs.setDarkMode('light');
  };

  if(building) 
    document.getElementById('pageContent').innerHTML = getBuildingHTML();
}

function initializeEvents() {
  // sticky header on scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('stickyTop');
    if (window.scrollY > 60 ) { header.classList.add('show'); 
    } else {                    header.classList.remove('show'); }
  });

  // left panel
  document.querySelectorAll('.nav-item[data-panel="tree"]')
    .forEach(el => el.addEventListener('click', () => coreFuncs.toggleLeftPanel(el, focoAtual)) );
  
  document.querySelectorAll('.leftPanel .btn-hide')
    .forEach(el => el.addEventListener('click', coreFuncs.hideLeftPanel));

  // menu tree
  document.getElementById('leftPanel-body').addEventListener('click', (event) => {
    const toggle      = event.target.closest('.tree-toggle');
    if (!toggle) throw new Error('Expected .tree-toggle element not found on click event.');

    const siblingList = toggle.nextElementSibling;
    if (siblingList && siblingList.classList.contains('nested')) {
      siblingList.classList.toggle('d-none');

      const icon = toggle.querySelector('i.fas');
      if (!icon) throw new Error('Expected i.fas element not found.');

      icon.classList.toggle('fa-folder');
      icon.classList.toggle('fa-folder-open');
    }
  });

  // right panel
  document.querySelectorAll('.note')
    .forEach(el => el.addEventListener('click', () => coreFuncs.showNote(el)));
  
  document.querySelectorAll('.rightPanel .btn-hide')
    .forEach(el => el.addEventListener('click', coreFuncs.hideNote));
}

//////////////////////////////////////////////////////////////////////

// initializing...
window.addEventListener('DOMContentLoaded', initialize);

///////////////////////////////////////////////////////////////////


