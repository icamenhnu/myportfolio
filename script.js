document.addEventListener('DOMContentLoaded', () => {
  // Scroll spy for menu active link
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.menuitem a');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`.menuitem a[href="#${id}"]`);

      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // Burger menu toggle for mobile only
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
  });
});
