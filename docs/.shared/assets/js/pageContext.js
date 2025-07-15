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
  techApres: `
<ul class="treeview list-unstyled p-0 m-0">
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder-open me-2"></i>Manual técnico
    </span>
    <ul class="nested list-unstyled ps-4">
      <li><a href="#"><i class="fas fa-file-alt me-2"></i>Introdução</a></li>
      <li><a href="#"><i class="fas fa-file-alt me-2"></i>Requerimentos e especificações</a></li>
      <li><a href="#"><i class="fas fa-file-alt me-2"></i>Arquitetura, escopo e restrições</a></li>
      <li>
        <span class="tree-toggle" onclick="toggleNode(this)">
          <i class="fas fa-folder me-2"></i>Casos de uso
        </span>
        <ul class="nested list-unstyled ps-4 d-none">
          <li><a href="#"><i class="fas fa-file-alt me-2"></i>Acompanhamento de atendimentos</li>
          <li><a href="#"><i class="fas fa-file-alt me-2"></i>Manutenção de acompanhamentos</a></li>
          <li><a href="#"><i class="fas fa-file-alt me-2"></i>Validação mensal</a></li>
          <li><a href="#"><i class="fas fa-file-alt me-2"></i>Registro de substituições</a></li>
          <li><a href="#"><i class="fas fa-file-alt me-2"></i>Processamento mensal de dados</a></li>
          <li><a href="#"><i class="fas fa-file-alt me-2"></i>Consolidação de dados mensais</a></li>
          <li><a href="#"><i class="fas fa-file-alt me-2"></i>Envio mensal de dados ao MDS</a></li>
        </ul>
      </li>
      <li>
        <span class="tree-toggle" onclick="toggleNode(this)">
          <i class="fas fa-folder me-2"></i>Código
        </span>
        <ul class="nested list-unstyled ps-4 d-none">
          <li>
            <span class="tree-toggle" onclick="toggleNode(this)">
              <i class="fas fa-folder me-2"></i>Ações do usuário
            </span>
            <ul class="nested list-unstyled ps-4 d-none">
              <li><a href="#"><i class="fas fa-file-alt me-2"></i>Tela Acompanhamentos</a></li>
              <li><a href="#"><i class="fas fa-file-alt me-2"></i>Tela Acompanhamento</a></li>
              <li><a href="#"><i class="fas fa-file-alt me-2"></i>Tela Validações</a></li>
              <li><a href="#"><i class="fas fa-file-alt me-2"></i>Tela Substituições</a></li>
              <li><a href="#"><i class="fas fa-file-alt me-2"></i>Tela RMA</a></li>
              <li><a href="#"><i class="fas fa-file-alt me-2"></i>Tela RMAs</a></li>
              <li><a href="#"><i class="fas fa-file-alt me-2"></i>Tela Outras</a></li>
            </ul>
          </li>
          <li>
            <span class="tree-toggle" onclick="toggleNode(this)">
              <i class="fas fa-folder me-2"></i>Ações do sistema
            </span>
            <ul class="nested list-unstyled ps-4 d-none">
              <li><a href="#"><i class="fas fa-file-alt me-2"></i>Configuração do ambiente e memória</a></li>
              <li><a href="#"><i class="fas fa-file-alt me-2"></i>Carga e edição dos dados</a></li>
              <li><a href="#"><i class="fas fa-file-alt me-2"></i>Validação e crítica dos dados</a></li>
              <li><a href="#"><i class="fas fa-file-alt me-2"></i>Funções de apoio e suporte</a></li>
              <li><a href="#"><i class="fas fa-file-alt me-2"></i>Funções administrativas</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <span class="tree-toggle" onclick="toggleNode(this)">
          <i class="fas fa-folder me-2"></i>Apêndices
        </span>
        <ul class="nested list-unstyled ps-4 d-none">
          <li><a href="#"><i class="fas fa-file-alt me-2"></i>Falhas conhecidas</a></li>
          <li><a href="#"><i class="fas fa-file-alt me-2"></i>Propostas de melhoria</a></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
<ul class="treeview list-unstyled p-0 m-0">
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder me-2"></i>Mais...
    </span>
    <ul class="nested list-unstyled ps-4 d-none">
      <li><a href="/projetos/"><i class="fas fa-file-alt me-2"></i>Outras soluções GERVIS</a></li>
    </ul>
  </li>
</ul>`,
  userApres: `
<ul class="treeview list-unstyled p-0 m-0">
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder-open me-2"></i>Manual do usuário
    </span>
    <ul class="nested list-unstyled ps-4">
      <li><a href="/projetos/PAIF/user"><i class="fas fa-file-alt me-2"></i>Introdução</a></li>
      <li>
        <span class="tree-toggle" onclick="toggleNode(this)">
          <i class="fas fa-folder me-2"></i>Telas
        </span>
        <ul class="nested list-unstyled ps-4 d-none">
          <li><a href="/projetos/PAIF/user/telas/telaAcompanhamentos.html"><i class="fas fa-file-alt me-2"></i>Acompanhamentos</li>
          <li><a href="/projetos/PAIF/user/telas/telaAcompanhamento.html"><i class="fas fa-file-alt me-2"></i>Acompanhamento</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaValidacoes.html"><i class="fas fa-file-alt me-2"></i>Validações</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaSubstituicoes.html"><i class="fas fa-file-alt me-2"></i>Substituições</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaRMA.html"><i class="fas fa-file-alt me-2"></i>RMA</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaRMAs.html"><i class="fas fa-file-alt me-2"></i>RMAs</a></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
<ul class="treeview list-unstyled p-0 m-0">
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder me-2"></i>Mais...
    </span>
    <ul class="nested list-unstyled ps-4 d-none">
      <li><a href="/projetos/"><i class="fas fa-file-alt me-2"></i>Outras soluções GERVIS</a></li>
    </ul>
  </li>
</ul>`,
  userTelas: `
<ul class="treeview list-unstyled p-0 m-0">
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder-open me-2"></i>Manual do usuário
    </span>
    <ul class="nested list-unstyled ps-4">
      <li><a href="/projetos/PAIF/user"><i class="fas fa-file-alt me-2"></i>Introdução</a></li>
      <li>
        <span class="tree-toggle" onclick="toggleNode(this)">
          <i class="fas fa-folder-open me-2"></i>Telas
        </span>
        <ul class="nested list-unstyled ps-4">
          <li><a href="/projetos/PAIF/user/telas/telaAcompanhamentos.html"><i class="fas fa-file-alt me-2"></i>Acompanhamentos</li>
          <li><a href="/projetos/PAIF/user/telas/telaAcompanhamento.html"><i class="fas fa-file-alt me-2"></i>Acompanhamento</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaValidacoes.html"><i class="fas fa-file-alt me-2"></i>Validações</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaSubstituicoes.html"><i class="fas fa-file-alt me-2"></i>Substituições</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaRMA.html"><i class="fas fa-file-alt me-2"></i>RMA</a></li>
          <li><a href="/projetos/PAIF/user/telas/telaRMAs.html"><i class="fas fa-file-alt me-2"></i>RMAs</a></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
<ul class="treeview list-unstyled p-0 m-0">
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder me-2"></i>Mais...
    </span>
    <ul class="nested list-unstyled ps-4 d-none">
      <li><a href="/projetos/"><i class="fas fa-file-alt me-2"></i>Outras soluções GERVIS</a></li>
    </ul>
  </li>
</ul>`,
  projetos: `
<ul class="treeview list-unstyled p-0 m-0">
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder me-2"></i>Dist. Territorial - Cadastro Único
    </span>
    <ul class="nested list-unstyled ps-4 d-none">
      <li><a href="#"><i class="fas fa-file-alt me-2"></i>Apresentação</a></li>
    </ul>
  </li>
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder me-2"></i>PAIF
    </span>
    <ul class="nested list-unstyled ps-4 d-none">
      <li><a href="/projetos/PAIF/"><i class="fas fa-file-alt me-2"></i>Apresentação</a></li>
      <li><a href="/projetos/PAIF/tech/"><i class="fas fa-file-alt me-2"></i>Manual técnico</a></li>
      <li><a href="/projetos/PAIF/user/"><i class="fas fa-file-alt me-2"></i>Manual do usuário</a></li>
    </ul>
  </li>
  <li>
    <span class="tree-toggle" onclick="toggleNode(this)">
      <i class="fas fa-folder me-2"></i>PAEFI
    </span>
    <ul class="nested list-unstyled ps-4 d-none">
      <li><a href="#"><i class="fas fa-file-alt me-2"></i>Proposta de implementação</a></li>
    </ul>
  </li>
</ul>`
};



const footerHTML = {
  techApres: ``,
  userApres: ``,
  userTelas: `<div class="footer-top">
<div class="footer-top-left">
    <h6>Links úteis</h6>
    <ul>
        <li><a href="https://sei.df.gov.br/sei/" target="_blank" rel="noopener noreferrer">SEI</a></li>
        <li><a href="https://sistemas2.df.gov.br/Prontuario/Home" target="_blank"
                rel="noopener noreferrer">SIDIS</a></li>
        <li><a href="https://sistemas2.df.gov.br/Prontuario/ProntuarioHome?filtro=AssistenciaSocial"
                target="_blank" rel="noopener noreferrer">Prontuário Assistencial</a></li>
        <li><a href="https://sistemas2.df.gov.br/PortalDeServicos/GaleriaSistemas" target="_blank"
                rel="noopener noreferrer">Outros sistemas</a></li>
    </ul>
    <ul class="mt-3">
        <li><a href="https://sedesgdf.sharepoint.com/sites/GERVIS" target="_blank"
                rel="noopener noreferrer">GERVIS (SharePoint)</a></li>
    </ul>
</div>
<div class="footer-top-left">
    <h6>SharePoint sites</h6>
    <ul>
        <li><a href="https://sedesgdf.sharepoint.com/sites/GERVIS" target="_blank"
                rel="noopener noreferrer">GERVIS</a>
        </li>
    </ul>
</div>
<div class="footer-top-right">
    <h6>-- Venha nos visitar --</h6>
    <a href="https://maps.app.goo.gl/4BTBZMGCMgPL3Kyg6" target="_blank" rel="noopener noreferrer">
        <img class="img-map" src="/projetos/.shared/assets/img/sedes/sedes-fachada.avif" alt="sedes-fachada"
            title="SEDES (515 Norte)">
        Google Maps
    </a>
</div>
</div>
<div class="footer-bottom">
<span class="footer-bottom-left">© 2025 SEDES/SUBSAS/GERVIS</span>
<span class="footer-bottom-right">v.1.0</span>
</div>`,
  projetos: ``
};

const constHTML = {
  leftBar: `
<div class="leftMenu">
    <div class="leftMenu-top">
        <div class="nav-item active" data-panel="tree" onclick="toggleLeftPanel(this)" title="Menu">
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>
</div>
<div id="leftPanel" class="leftPanel">
    <div class="leftPanel-header">
        <h6 id="leftPanel-title"></h6>
        <button class="btn btn-sm btn-hide" onclick="hideLeftPanel()">
            <i class="fas fa-times"></i>
        </button>
    </div>
    <div class="leftPanel-body" id="leftPanel-body"></div>
</div>`,

  rightPanel: `
<div class="rightPanel-header">
    <h6 id="rightPanel-title"></h6>
    <button class="btn btn-sm btn-hide" onclick="hideNote()">
        <i class="fas fa-times"></i>
    </button>
</div>
<div class="rightPanel-body" id="rightPanel-body"></div>
`
};



const template = {
  techApres: ``,
  userApres: ``,
  userTelas: ``,
  projetos: ``
};

