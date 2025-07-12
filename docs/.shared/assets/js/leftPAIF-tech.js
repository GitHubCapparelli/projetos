///////////////////////////////////////////////////////////////////

function openPanel(el) {
  // Set active state
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  el.classList.add('active');

  // Show panel
  const panel = document.getElementById('leftPanel');
  panel.classList.add('show');
  document.body.classList.add('panel-open');

  document.getElementById('leftPanel-body').innerHTML = `
<ul class="treeview list-unstyled ps-2">
  <li><a href="/projetos/PAIF/tech"><i class="fas fa-file-alt me-1"></i>Apresentação</a></li>
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder-open me-1"></i>Funcionalidades
    </span>
    <ul class="nested list-unstyled ps-3">
      <li><a href="#"><i class="fas fa-file-alt me-1"></i>...</li>
    </ul>
  </li>
</ul>
`;
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

