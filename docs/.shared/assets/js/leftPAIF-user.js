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
  document.getElementById('panelBody').innerHTML = `
<ul class="treeview list-unstyled ps-2">
  <li><a href="/projetos/PAIF/user"><i class="fas fa-file-alt me-1"></i>Apresentação</a></li>
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder-open me-1"></i>Telas
    </span>
    <ul class="nested list-unstyled ps-3">
      <li><a href="/projetos/PAIF/pages/telas/telaAcompanhamentos.html"><i class="fas fa-file-alt me-1"></i>Acompanhamentos</li>
      <li><a href="/projetos/PAIF/pages/telas/telaAcompanhamento.html"><i class="fas fa-file-alt me-1"></i>Acompanhamento</a></li>
      <li><a href="/projetos/PAIF/pages/telas/telaValidacoes.html"><i class="fas fa-file-alt me-1"></i>Validações</a></li>
      <li><a href="/projetos/PAIF/pages/telas/telaSubstituicoes.html"><i class="fas fa-file-alt me-1"></i>Substituições</a></li>
      <li><a href="/projetos/PAIF/pages/telas/telaRMA.html"><i class="fas fa-file-alt me-1"></i>RMA</a></li>
      <li><a href="/projetos/PAIF/pages/telas/telaRMAs.html"><i class="fas fa-file-alt me-1"></i>RMAs</a></li>
    </ul>
  </li>
</ul>
`;
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

  if (window.scrollY > 60 ) { 
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
});

