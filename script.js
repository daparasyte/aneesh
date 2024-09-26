// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  // Change icon
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('dark-theme')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// Form Submission Handler
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Handle form submission (e.g., send data to server or use an email service)
  alert('Thank you for your message!');
  contactForm.reset();
});
