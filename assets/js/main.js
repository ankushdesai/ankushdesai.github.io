// Sidebar navigation and mobile toggle
document.addEventListener('DOMContentLoaded', function () {
  var sidebar = document.querySelector('.sidebar');
  var toggle = document.querySelector('.sidebar-toggle');
  var overlay = document.querySelector('.sidebar-overlay');

  // Mobile sidebar toggle
  if (toggle && sidebar && overlay) {
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
    });

    overlay.addEventListener('click', function () {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });

    // Close sidebar when a nav link is clicked (mobile)
    sidebar.querySelectorAll('.sidebar-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight current page in sidebar nav
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
