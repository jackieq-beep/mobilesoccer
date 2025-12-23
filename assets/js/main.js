
(function(){
  // Year in footer (if present)
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var btn = document.querySelector('[data-menu]');
  var mobile = document.querySelector('[data-mobile]');
  if (btn && mobile) {
    btn.addEventListener('click', function(){
      var open = mobile.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close menu when clicking a link
    mobile.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        mobile.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Simple reveal on scroll
  var els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) e.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });
    els.forEach(function(el){ io.observe(el); });
  } else {
    els.forEach(function(el){ el.classList.add('is-visible'); });
  }

  // Contact form (client-side only demo)
  var form = document.querySelector('form[data-contact]');
  var note = document.querySelector('.form-note');
  if (form) {
    form.addEventListener('submit', function(ev){
      ev.preventDefault();
      if (note) note.textContent = "Thanks — message captured locally. Wire this to your form backend (Formspree/Netlify) when ready.";
      form.reset();
    });
  }
})();
