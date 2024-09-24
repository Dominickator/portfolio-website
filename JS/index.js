// Scroll to the about section on "Learn More" button click
document.getElementById("learnMoreBtn").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
  });
});

// Intersection Observer to fade in project cards when they enter the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        // Unobserve the element after applying the fade-in effect
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1, // Trigger when 10% of the card is visible
  }
);

// Apply the observer to each project card
document.querySelectorAll(".project-card").forEach((card) => {
  observer.observe(card);
});
