// Phone menu drawer: the toggle opens and closes the header nav.
(function () {
  var header = document.querySelector('.site-header');
  var button = header && header.querySelector('.menu-toggle');
  if (!button) return;

  function setOpen(open) {
    if (open) header.setAttribute('data-open', '');
    else header.removeAttribute('data-open');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  }

  button.addEventListener('click', function () {
    setOpen(!header.hasAttribute('data-open'));
  });

  // Close after following a link (anchors on the home page) or pressing Escape.
  header.querySelector('.site-nav').addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.hasAttribute('data-open')) {
      setOpen(false);
      button.focus();
    }
  });
})();
