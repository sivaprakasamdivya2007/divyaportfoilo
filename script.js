const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
const links = navMenu.querySelectorAll('a');
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Toggle mobile menu
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Close mobile menu when clicking a nav link
links.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
    setActiveLink(link);
  });
});

// Set active class on clicked nav link
function setActiveLink(activeLink) {
  links.forEach(link => link.classList.remove('active'));
  activeLink.classList.add('active');
}

// Contact form submission simulation
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.style.color = 'green';
  formMessage.textContent = 'Sending your message...';

  setTimeout(() => {
    formMessage.textContent = 'Thank you for contacting me! I will get back soon.';
    form.reset();
  }, 1500);
});
