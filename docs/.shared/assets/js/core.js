let sideExpanded = false;

function toogleMenu() {
  sideExpanded = !sideExpanded;
  const btn = document.getElementById('btnToogle');
  const bar = document.getElementById('sidebar');
  const bdy = document.getElementById('sideBody');
  if (btn && bar) {
    if (sideExpanded) {
      bar.style.width   = '200px';
      btn.className     = 'menu-x fa-solid fa-x';
      bdy.style.display = 'block';
    } else {
      bar.style.width   = '35px';
      btn.className     = 'menu-bars fa-solid fa-bars';
      bdy.style.display = 'none';
    }
  }
}
 