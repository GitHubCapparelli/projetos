import * as coreFuncs from './coreFunctions.js';
window.coreFuncs = coreFuncs;

var tela        = document.body.getAttribute('tela');
var foco        = '';

const dominio   = document.body.getAttribute('domain');
const building  = document.body.hasAttribute('building');

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

function initialize() {
  switch (dominio) {
    case 'paif'      : tela = 'paif';     break;
    case 'paif.tech' : tela = 'paifTech'; break;
    case 'paif.user' : tela = 'paifUser'; break;
    case 'projetos'  : tela = 'projetos'; break;
    case 'analise'   : tela = 'analise';  break;
  }
  foco = tela.startsWith('tela')  ? 'paifUserTelas' : tela;
  
  initializeHead();
  initializeBody();
  
  if (tela !== 'analise') 
    initializeEvents();

  const wasVisible = coreFuncs.storeGet('leftPanel_visible') === 'true';
  if (wasVisible) {
    const navItem = document.querySelector(`.nav-item[data-panel="tree"]`);
    if (navItem) {
      coreFuncs.showLeftPanel(navItem, foco);
    }
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
  link.href = objModel.favIco;

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
  appendStyles(objModel.sharedStyles);

  if (dominio.startsWith('paif')) {
    appendStyles(objModel.domainStyles[foco]);
  }
}

function initializeBody() {
  document.title = objModel.paifTags[tela];

  const sticky      = document.getElementById('stickyTop');
  const header      = document.getElementById('header');
  const rightPanel  = document.getElementById('rightPanel');
  const leftBar     = document.getElementById('leftBar');
  const footer      = document.getElementById('footer');
  const noAnimation = [sticky, rightPanel];
  noAnimation.forEach(el => el.classList.add('no-animation'));

  if (!header.hasChildNodes())        header.innerHTML      = objModel.headerHTML(tela);
  if (!leftBar.hasChildNodes())       leftBar.innerHTML     = objModel.sharedHTML.leftBar;

  if (tela !== 'analise') {
    if (!sticky.hasChildNodes())      sticky.innerHTML      = objModel.stickyHTML(tela);
    if (!rightPanel.hasChildNodes())  rightPanel.innerHTML  = objModel.sharedHTML.rightPanel;
    if (!footer.hasChildNodes())      footer.innerHTML      = objModel.footerHTML[foco];
  }

  if (tela === 'paifTech') {
    coreFuncs.setDarkMode(localStorage.getItem('theme'));
    initBoxes();
  } else {
    coreFuncs.setDarkMode('light');
  };

  if(building) 
    document.getElementById('pageContent').innerHTML = (tela === 'analise')
      ? objModel.sharedHTML.emAnalise
      : objModel.sharedHTML.emConstrucao;

  requestAnimationFrame(() => setTimeout(() => noAnimation.forEach(el => el.classList.remove('no-animation')), 50));
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
    .forEach(el => el.addEventListener('click', () => coreFuncs.toggleLeftPanel(el, foco)) );
  
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


