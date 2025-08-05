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


  