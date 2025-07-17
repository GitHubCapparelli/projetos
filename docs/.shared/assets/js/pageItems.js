import * as html from './htmlSnippets.js';

////////////////////////////////////////////////////////////////////////////////////////////////////// 
/*
const namespaces = { // template
  projetos: ``,
  paif: ``,
  paifTech: ``,
  paifUser: ``,
  paifUserTelas: ``
};
*/
////////////////////////////////////////////////////////////////////////////////////////////////////// 

export const paifName = 'PAIF – Serviço de Proteção e Atendimento Integral à Família';
export const favIco   = '/projetos/.shared/assets/img/logo/gdf.png';

export const menuHTML = {
  projetos      : html.projetosMenu,
  paif          : html.paifMenu,
  paifTech      : html.paifTechMenu,
  paifUser      : html.paifUserMenu,
  paifUserTelas : html.paifUserMenu
};

export const footerHTML = {
  projetos      : html.projetosFooter,
  paif          : html.projetosFooter,
  paifTech      : html.paifTechFooter,
  paifUser      : html.paifUserFooter,
  paifUserTelas : html.paifUserFooter
};

export const sharedHTML = {
  leftBar       : html.sharedMenu,
  rightPanel    : html.sharedBox
  emConstrucao  : html.emConstrucao
};

export const sharedStyles = [
  '/projetos/.shared/assets/css/core.css',
  '/projetos/.shared/assets/css/bootstrap.css',
  '/projetos/.shared/assets/css/all.fontAwesome.min.css'
];

export const domainStyles = {
  paifTech      : ['/projetos/.shared/assets/css/tech.css'],
  paif          : ['/projetos/.shared/assets/css/paif.css'],
  paifUser      : ['/projetos/.shared/assets/css/paif.css'],
  paifUserTelas : ['/projetos/.shared/assets/css/paif.css']
  // projetos: ``, // core
};

export const paifTags = {
  telaAcompanhamentos   : 'Tela Acompanhamentos',
  telaAcompanhamento    : 'Tela Acompanhamento',
  telaValidacoes        : 'Tela Validações',
  telaSubstituicoes     : 'Tela Substituiçoes',
  telaRMA               : 'Tela RMA',
  telaRMAs              : 'Tela RMAs',
  projetos              : 'GERVIS - Projetos',
  paif                  : 'Projeto PAIF',
  paifTech              : 'Manual técnico',
  paifUser              : 'Manual do usuário'
}

export const paifTitles = {
  telaAcompanhamentos   : `-- ${paifTags.telaAcompanhamentos} : acompanhamento dos dados de atendimentos familiares --`,
  telaAcompanhamento    : `-- ${paifTags.telaAcompanhamento} : inclusão e/ou alteração dos dados de atendimentos familiares --`,
  telaValidacoes        : `-- ${paifTags.telaValidacoes} : validação mensal das informações cadastradas --`,
  telaSubstituicoes     : `-- ${paifTags.telaSubstituicoes} : registro de períodos de substituição da gerência da unidade assistencial --`,
  telaRMA               : `-- ${paifTags.telaRMA} : registro mensal de dados requeridos pelo MDS --`,
  telaRMAS              : `-- ${paifTags.telaRMAS} : consolidação dos registros mensais de dados enviados ao MDS --`,
  projetos              : `-- ${paifTags.projetos} --`,
  paif                  : `-- ${paifTags.paif} --`,
  paifTech              : `-- ${paifTags.paifTech} --`,
  paifUser              : `-- ${paifTags.paifUser} --`
}

////////////////////////////////////////////////////////////////////////////////////////////////////// 

export const stickyHTML = (focoAtual) => `
  <div class="stickyTop-titles">
    <h5 class="mb-0">${paifName}</h5>
    <h6 class="mb-0">${paifTitles[focoAtual]}</h6>
  </div>`;

export const headerHTML = (focoAtual) => `<div class="header-left">
      <img class="header-logo" src="/projetos/.shared/assets/img/logo/gdf.png" alt="logo">
      <div class="header-titles">
          <h6 class="mb-0">GDF/SEDES/SUBSAS/GERVIS</h6>
          <h5 class="mb-0">${paifName}</h5>
      </div>
  </div>
  <div class="header-right">
      <h5 class="mb-0">${paifTags[focoAtual]}</h5>
  </div>`;

////////////////////////////////////////////////////////////////////////////////////////////////////// 

