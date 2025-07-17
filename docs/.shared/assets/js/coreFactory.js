import * as coreFuncs from './coreFunctions.js';
window.coreFuncs = coreFuncs;

const dominio  = document.body.getAttribute('domain');
const tela     = document.body.getAttribute('tela');
const building = document.body.hasAttribute('building');

var focoAtual  = '';

///////////////////////////////////////////////////////////////////
// building shared components based on the user's option (use case ?)


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
      tela      = 'projetos';
      break;
    case 'paif'             : 
      focoAtual = 'paif';           
      tela      = 'paif';
      break;
    case 'paif.tech'        : 
      focoAtual = 'paifTech';       
      tela      = 'paifTech';
      break;
    case 'paif.user'        : 
      focoAtual = 'paifUser';       
      tela      = 'paifUser';
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
  document.title = (focoAtual === 'paifUserTelas')
                 ? pageItems.paifTags[tela].replace(/^tela/, '').trim() 
                 : pageItems.paifTags[focoAtual];

  document.getElementById('stickyTop').innerHTML  = pageItems.stickyHTML(focoAtual);
  document.getElementById('header').innerHTML     = pageItems.headerHTML(focoAtual);
  document.getElementById('footer').innerHTML     = pageItems.footerHTML[focoAtual];
  document.getElementById('rightPanel').innerHTML = pageItems.sharedHTML.rightPanel;
  document.getElementById('leftBar').innerHTML    = pageItems.sharedHTML.leftBar;

  if (focoAtual === 'paifTech') {
    coreFuncs.setDarkMode(localStorage.getItem('theme'));
    initBoxes();
  } else {
    coreFuncs.setDarkMode('light');
  };

  if(building) 
    document.getElementById('pageContent').innerHTML = pageItems.sharedHTML.emConstrucao;
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


