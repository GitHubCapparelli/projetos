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
      tree: 'Tree View',
      insert: 'Insert Items',
      data: 'Data Sources',
      media: 'Media Library',
      settings: 'Settings'
  };

  document.getElementById('panelTitle').textContent = titleMap[panelType] || 'Panel';

  // You can update this dynamically
  if (titleMap[panelType] === 'Tree View') {
      document.getElementById('panelBody').innerHTML = `
<ul class="treeview list-unstyled ps-2">
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
    <i class="fas fa-caret-down me-1"></i>
    <i class="fas fa-file-alt me-1"></i> Screen1
    </span>
    <ul class="nested list-unstyled ps-3">
      <li><i class="fas fa-font me-1"></i> Label1</li>
      <li><i class="fas fa-hand-pointer me-1"></i> Button1</li>
    </ul>
  </li>
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
    <i class="fas fa-caret-right me-1"></i>
    <i class="fas fa-file-alt me-1"></i> Screen2
    </span>
    <ul class="nested list-unstyled ps-3 d-none">
      <li><i class="fas fa-image me-1"></i> Image1</li>
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


function toggleNode(el) {
  const caret = el.querySelector('.fa-caret-down, .fa-caret-right');
  const nextUL = el.nextElementSibling;

  // Toggle caret icon
  if (caret.classList.contains('fa-caret-down')) {
      caret.classList.remove('fa-caret-down');
      caret.classList.add('fa-caret-right');
  } else {
      caret.classList.remove('fa-caret-right');
      caret.classList.add('fa-caret-down');
  }

  // Toggle nested visibility
  nextUL.classList.toggle('d-none');
}
