/*SCRIPT*/
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const menu = document.querySelector('nav ul');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { 
            nav.classList.add('menu-open');
        } else {
            nav.classList.remove('menu-open');
        }
    });

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', () => {
            document.querySelector('nav').classList.remove('menu-open');
        });
    });
});

document.querySelector('.logo a').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  