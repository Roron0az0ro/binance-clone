function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function toggleMenu(menuType) {
  const menu = document.getElementById(menuType);
  menu.classList.toggle('show');
}
