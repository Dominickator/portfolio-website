document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.5 // Adjust this value based on when you want the animation to start
    });
  
    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });
  });
  