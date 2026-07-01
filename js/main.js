// Mobile menu toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  }

  toggle.addEventListener('click', function () {
    setOpen(menu.hidden);
  });

  // Close the menu after tapping a link
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });
})();
