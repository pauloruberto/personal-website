var hamburger_open = 0;

document.addEventListener('DOMContentLoaded', function() {
  var page = window.location.pathname;

  if (page === '/about' || page === '/about.html') {
    var link1 = document.getElementById('link1');
    if (link1) link1.style.opacity = '0.25';
  } else if (page === '/' || page === '/index.html' || page === '/index') {
    var link3 = document.getElementById('link3');
    if (link3) link3.style.opacity = '0.25';
  }

  var hamburgerBtn = document.getElementById('hamburger-button');
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function() {
      var nav = document.getElementById('nav');
      var navLinks = document.querySelectorAll('.nav-link');
      var navLinksContainer = document.getElementById('nav-links');

      if (hamburger_open === 0) {
        var headline = document.getElementById('headline');
        var headline_height = headline ? headline.offsetHeight : 0;
        if (nav) nav.style.height = headline_height + 'px';
        navLinks.forEach(function(el) {
          el.style.visibility = 'visible';
          el.style.opacity = '1';
        });
        if (navLinksContainer) navLinksContainer.style.visibility = 'visible';
        hamburger_open = 1;
      } else {
        if (nav) nav.style.height = '70px';
        navLinks.forEach(function(el) {
          el.style.visibility = 'hidden';
          el.style.opacity = '0';
        });
        if (navLinksContainer) navLinksContainer.style.visibility = 'hidden';
        hamburger_open = 0;
      }
    });
  }
});

window.addEventListener('resize', function() {
  var width = window.innerWidth;

  if (width >= 640 && hamburger_open === 1) {
    var nav = document.getElementById('nav');
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(el) {
      el.style.transition = '0s';
    });
    if (nav) nav.style.height = '70px';
  }
});
