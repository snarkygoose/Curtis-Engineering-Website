// Curtis Engineering — shared site behaviour

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav__toggle');
  var list = document.querySelector('.nav__list');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var isOpen = list.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    list.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        list.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact / quote form
  // NOTE FOR DEVELOPER: this form currently only confirms submission in the
  // browser. Before launch, wire it up to a real endpoint (e.g. Formspree,
  // EmailJS, Netlify Forms, or a server-side mailer) so enquiries actually
  // reach the business's email address.
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = 'Thanks — your enquiry has been noted. (Form is not yet connected to email delivery — see code comments.)';
      status.classList.add('is-visible', 'success');
      form.reset();
    });
  }
});
