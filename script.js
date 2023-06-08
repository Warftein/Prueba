<<<<<<< HEAD
window.addEventListener('DOMContentLoaded', function() {
  const buttonMenuToggle = document.querySelector('.button-menu-toggle');
  const isHomePage = window.location.pathname === '/';

  function showAlert() {
    alert('¡Hola, esta es una alerta desde javascript!');
  }

  if (isHomePage) {
    buttonMenuToggle.classList.remove('hide');
  } else {
    buttonMenuToggle.classList.add('hide');
  }

  document.querySelector(".button-menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
  });

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var href = link.getAttribute("href");
      if (href) {
        window.location.href = href;
      }
    });
  });
});
=======
window.addEventListener('DOMContentLoaded', function() {
  const buttonMenuToggle = document.querySelector('.button-menu-toggle');
  const isHomePage = window.location.pathname === '/';

  function showAlert() {
    alert('¡Hola, esta es una alerta desde javascript!');
  }

  if (isHomePage) {
    buttonMenuToggle.classList.remove('hide');
  } else {
    buttonMenuToggle.classList.add('hide');
  }

  document.querySelector(".button-menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
  });

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var href = link.getAttribute("href");
      if (href) {
        window.location.href = href;
      }
    });
  });
});
>>>>>>> f644ffa3aab41d6eb7fdb2413ff648c30c29a134
