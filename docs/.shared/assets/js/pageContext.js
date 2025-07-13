// dynamic variables
var menuKey = '';

// constants
const noteTitle = {
  test: 'Teste',
  test2: 'Teste 2'
};
const noteHTML = {
  test: `<h1>Teste</h1>`,
  test2: `<h1>Teste 2</h1>`
};

const menuHTML = {
  techApres: `Not implemented`,
  userApres: `
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
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder-open me-1"></i>Veja também
    </span>
    <ul class="nested list-unstyled ps-3">
      <li><a href="/projetos"><i class="fas fa-file-alt me-1"></i>Outras soluções GERVIS</li>
    </ul>
  </li>
</ul>`,
  userTelas: `
<ul class="treeview list-unstyled ps-2">
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder-open me-1"></i>Manual do usuário
    </span>
    <ul class="nested list-unstyled ps-3">
      <li><a href="/projetos/SAIF/"><i class="fas fa-file-alt me-1"></i>Apresentação</a></li>
      <li>
        <span class="tree-toggle" onclick="toggleNode(this)">
          <i class="fas fa-folder-open me-1"></i>Telas
        </span>
        <ul class="nested list-unstyled ps-3">
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
      <i class="fas fa-folder me-1"></i>Mais...
    </span>
    <ul class="nested list-unstyled ps-3 d-none">
      <li><i class="fas fa-file-image me-1"></i>...</li>
    </ul>
  </li>
</ul>`,
  projetos: `
<ul class="treeview list-unstyled ps-2">
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder-open me-1"></i>PAIF
    </span>
    <ul class="nested list-unstyled ps-3">
      <li><a href="/projetos/PAIF/tech"><i class="fas fa-file-alt me-1"></i>Manual técnico</li>
      <li><a href="/projetos/PAIF/user"><i class="fas fa-file-alt me-1"></i>Manual do usuário</a></li>
    </ul>
  </li>
</ul>`
};

