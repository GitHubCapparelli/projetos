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
<ul class="treeview list-unstyled ps-1">
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder-open me-1"></i>Manual do usuário
    </span>
    <ul class="nested list-unstyled ps-2">
      <li><a href="/projetos/PAIF/user"><i class="fas fa-file-alt me-2"></i>Introdução</a></li>
      <li>
        <span class="tree-toggle" onclick="toggleNode(this)">
          <i class="fas fa-folder me-1"></i>Telas
        </span>
        <ul class="nested list-unstyled ps-3 d-none">
          <li><a href="/projetos/PAIF/user/telas/telaAcompanhamentos.html"><i class="fas fa-file-alt me-3"></i>Acompanhamentos</li>
          <li><a href="/projetos/PAIF/user/telas/telaAcompanhamento.html"><i class="fas fa-file-alt me-3"></i>Acompanhamento</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaValidacoes.html"><i class="fas fa-file-alt me-3"></i>Validações</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaSubstituicoes.html"><i class="fas fa-file-alt me-3"></i>Substituições</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaRMA.html"><i class="fas fa-file-alt me-3"></i>RMA</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaRMAs.html"><i class="fas fa-file-alt me-3"></i>RMAs</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder me-1"></i>Mais...
    </span>
    <ul class="nested list-unstyled ps-2 d-none">
      <li><a href="/projetos/"><i class="fas fa-file-alt me-2"></i>Outras soluções GERVIS</li>
    </ul>
  </li>
</ul>`,
  userTelas: `
<ul class="treeview list-unstyled ps-1">
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder-open me-1"></i>Manual do usuário
    </span>
    <ul class="nested list-unstyled ps-2">
      <li><a href="/projetos/PAIF/user"><i class="fas fa-file-alt me-2"></i>Introdução</a></li>
      <li>
        <span class="tree-toggle" onclick="toggleNode(this)">
          <i class="fas fa-folder-open me-2"></i>Telas
        </span>
        <ul class="nested list-unstyled ps-3">
          <li><a href="/projetos/PAIF/user/telas/telaAcompanhamentos.html"><i class="fas fa-file-alt me-3"></i>Acompanhamentos</li>
          <li><a href="/projetos/PAIF/user/telas/telaAcompanhamento.html"><i class="fas fa-file-alt me-3"></i>Acompanhamento</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaValidacoes.html"><i class="fas fa-file-alt me-3"></i>Validações</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaSubstituicoes.html"><i class="fas fa-file-alt me-3"></i>Substituições</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaRMA.html"><i class="fas fa-file-alt me-3"></i>RMA</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaRMAs.html"><i class="fas fa-file-alt me-3"></i>RMAs</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder me-1"></i>Mais...
    </span>
    <ul class="nested list-unstyled ps-2 d-none">
      <li><a href="/projetos/"><i class="fas fa-file-alt me-2"></i>Outras soluções GERVIS</li>
    </ul>
  </li>
</ul>`,
  projetos: `
<ul class="treeview list-unstyled ps-1">
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder me-1"></i>Dist. Territorial - Cadastro Único
    </span>
    <ul class="nested list-unstyled ps-2 d-none">
      <li><a href="#"><i class="fas fa-file-alt me-2"></i>Apresentação</li>
    </ul>
  </li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder me-1"></i>PAIF
    </span>
    <ul class="nested list-unstyled ps-2 d-none">
      <li><a href="/projetos/PAIF"><i class="fas fa-file-alt me-1"></i>Apresentação</li>
      <li><a href="/projetos/PAIF/tech"><i class="fas fa-file-alt me-2"></i>Manual técnico</li>
      <li><a href="/projetos/PAIF/user"><i class="fas fa-file-alt me-2"></i>Manual do usuário</a></li>
    </ul>
  </li>
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder me-1"></i>PAEFI
    </span>
    <ul class="nested list-unstyled ps-2 d-none">
      <li><a href="#"><i class="fas fa-file-alt me-2"></i>Proposta de implementação</li>
    </ul>
  </li>
</ul>`
};

