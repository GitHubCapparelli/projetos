let sideExpanded = false;

function toogleMenu() {
  sideExpanded = !sideExpanded;
  const btn = document.getElementById('btnToogle');
  const bar = document.getElementById('sidebar');
  if (btn && bar) {
    if (sideExpanded) {
      bar.style.width = '200px';
      btn.className = 'menu-x fa-solid fa-x';
    } else {
      bar.style.width = '45px';
      btn.className = 'menu-bars fa-solid fa-bars';
    }
  }
}
