//  Lucide Icons Initialization
// lucide.createIcons();

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const closeIcon = document.getElementById('close-icon');



menuIcon.addEventListener('click', () => {
  navLinks.classList.add('active');
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block'; // Show close icon
});

closeIcon.addEventListener('click', () => {
  navLinks.classList.remove('active');
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block'; // Show menu icon again
});

document.addEventListener("DOMContentLoaded", function () {
  const letsTalkBtn = document.getElementById("letsTalkBtn");
  const contactFormWrapper = document.getElementById("contactFormWrapper");
  const closeBtn = document.getElementById("closeBtn");

  letsTalkBtn.addEventListener("click", () => {
    contactFormWrapper.classList.remove("hidden");
    document.body.classList.add("no-scroll");
  });

  closeBtn.addEventListener("click", () => {
    contactFormWrapper.classList.add("hidden");
    document.body.classList.remove("no-scroll");
  });

  contactFormWrapper.addEventListener("click", (e) => {
    if (e.target === contactFormWrapper) {
      contactFormWrapper.classList.add("hidden");
      document.body.classList.remove("no-scroll");
    }
  });
});

const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 }); 

  cards.forEach(card => observer.observe(card));

  


document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.zoom-out');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          obs.unobserve(entry.target);
        } else {
        
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -10% 0px', 
      threshold: 0.12
    });

    targets.forEach(el => observer.observe(el));
  } else {
    
    targets.forEach(el => el.classList.add('visible'));
  }
});
