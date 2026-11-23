const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? 'Close' : 'Menu';
  });
}

const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
  const storedTheme = localStorage.getItem('portfolio-theme');
  if (storedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.textContent = 'Light mode';
    themeToggle.setAttribute('aria-pressed', 'true');
  }

  themeToggle.addEventListener('click', () => {
    const darkEnabled = document.body.classList.toggle('dark-theme');
    themeToggle.textContent = darkEnabled ? 'Light mode' : 'Dark mode';
    themeToggle.setAttribute('aria-pressed', String(darkEnabled));
    localStorage.setItem('portfolio-theme', darkEnabled ? 'dark' : 'light');
  });
}

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  const status = document.querySelector('#form-status');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = contactForm.elements.name;
    const email = contactForm.elements.email;
    const interest = contactForm.elements.interest;
    const consent = contactForm.elements.consent;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    name.setCustomValidity(name.value.trim() ? '' : 'Please enter your name.');
    email.setCustomValidity(emailPattern.test(email.value.trim()) ? '' : 'Please enter a valid email address.');
    interest.setCustomValidity(interest.value ? '' : 'Please select an inquiry type.');
    consent.setCustomValidity(consent.checked ? '' : 'Please confirm that I may respond.');

    if (!contactForm.reportValidity()) {
      status.textContent = 'Please complete the highlighted fields.';
      status.className = 'form-status form-status-error';
      return;
    }

    const firstName = name.value.trim().split(/\s+/)[0];
    status.textContent = `Thanks, ${firstName}! Your message is ready for Tristan to review.`;
    status.className = 'form-status form-status-success';
    contactForm.reset();
  });

  contactForm.querySelectorAll('input, select, textarea').forEach((field) => {
    field.addEventListener('input', () => field.setCustomValidity(''));
  });
}