///////////////////////////////////////////////////////////////////

function openPanel(el) {
  // Set active state
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  el.classList.add('active');

  // Show panel
  const panel = document.getElementById('sidePanel');
  panel.classList.add('show');
  document.body.classList.add('panel-open');

  // Set panel title/content
  const panelType = el.getAttribute('data-panel');
  const titleMap = {
    tree: 'Conteúdo',
    insert: 'Insert Items',
    data: 'Data Sources',
    media: 'Media Library',
    settings: 'Settings'
  };

  document.getElementById('panelTitle').textContent = titleMap[panelType] || 'Panel';

  // You can update this dynamically
  if (titleMap[panelType] === 'Conteúdo') {
    document.getElementById('panelBody').innerHTML = `
<ul class="treeview list-unstyled ps-2">
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder-open me-1"></i>PAIF
    </span>
    <ul class="nested list-unstyled ps-3">
      <li><a href="/projetos/SAIF/"><i class="fas fa-file-alt me-1"></i>Apresentação</a></li>
      <li>
        <span class="tree-toggle" onclick="toggleNode(this)">
          <i class="fas fa-folder me-1"></i>Telas
        </span>
        <ul class="nested list-unstyled ps-3 d-none">
          <li><a href="/projetos/SAIF/pages/telaAcompanhamentos.html"><i class="fas fa-file-alt me-1"></i>Acompanhamentos</li>
          <li><a href="/projetos/SAIF/pages/telaAcompanhamento.html"><i class="fas fa-file-alt me-1"></i>Acompanhamento</a></li>
          <li><a href="/projetos/SAIF/pages/telaValidacoes.html"><i class="fas fa-file-alt me-1"></i>Validações</a></li>
          <li><a href="/projetos/SAIF/pages/telaSubstituicoes.html"><i class="fas fa-file-alt me-1"></i>Substituições</a></li>
          <li><a href="/projetos/SAIF/pages/telaRMA.html"><i class="fas fa-file-alt me-1"></i>RMA</a></li>
          <li><a href="/projetos/SAIF/pages/telaRMAs.html"><i class="fas fa-file-alt me-1"></i>RMAs</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder me-1"></i>Outros
    </span>
    <ul class="nested list-unstyled ps-3 d-none">
      <li><i class="fas fa-file-image me-1"></i>...</li>
    </ul>
  </li>
</ul>
`;
  } else {
    document.getElementById('panelBody').innerHTML = `<p>Contents for <strong>${titleMap[panelType]}</strong> go here.</p>`;
  }
}

function closePanel() {
  document.getElementById('sidePanel').classList.remove('show');
  document.body.classList.remove('panel-open');

  // Remove active state
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
}

function togglePanel(el) {
  const panel = document.getElementById('sidePanel');
  const isVisible = panel.classList.contains('show');

  if (isVisible) {
    // Panel open → close it
    closePanel();
  } else {
    // Panel closed → open with this button
    openPanel(el);
  }
}

//////////////////////////////////////////////////////////////////////////////////

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

window.addEventListener('scroll', () => {
  const header = document.getElementById('stickyHeader');
  const bannerHeight = document.querySelector('.main-banner').offsetHeight;

  if (window.scrollY > 60 ) { //bannerHeight) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
});

