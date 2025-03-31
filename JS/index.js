document.addEventListener("DOMContentLoaded", function () {
  // Scroll to the about section on "Learn More" button click
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function () {
      document.getElementById("about").scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  // Create floating shapes in the header
  createFloatingShapes();

  // Initialize GSAP ScrollTrigger
  initScrollAnimations();

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
      rootMargin: "50px", // Start the animation a bit before the element is visible
    }
  );

  // Apply the observer to each project card
  document.querySelectorAll(".project-card").forEach((card) => {
    observer.observe(card);
  });

  // Terminal typing animation
  animateTerminal();

  // Add tilt effect to project cards
  addTiltEffect();
});

// Create floating shapes in the background
function createFloatingShapes() {
  const floatingShapes = document.querySelector(".floating-shapes");
  if (!floatingShapes) return;

  const colors = [
    "var(--blue)",
    "var(--lavender)",
    "var(--mauve)",
    "var(--pink)",
    "var(--red)",
    "var(--peach)",
    "var(--yellow)",
    "var(--green)",
    "var(--teal)",
    "var(--sky)",
    "var(--sapphire)",
  ];

  for (let i = 0; i < 15; i++) {
    const shape = document.createElement("div");
    shape.classList.add("shape");

    // Random size, position, and color
    const size = Math.random() * 200 + 50;
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.left = `${Math.random() * 100}%`;
    shape.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    // Different animation durations and delays
    shape.style.animationDuration = `${Math.random() * 20 + 10}s`;
    shape.style.animationDelay = `${Math.random() * 5}s`;

    floatingShapes.appendChild(shape);
  }
}

// Initialize GSAP ScrollTrigger animations
function initScrollAnimations() {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    gsap.utils.toArray("section").forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => section.classList.add("visible"),
      });
    });

    // Add more GSAP animations here
  }
}

// Animate terminal typing effect
function animateTerminal() {
  const terminalText = document.querySelector(".terminal-text");
  const typingContainer = document.querySelector(".typing-container");
  if (!terminalText || !typingContainer) return;

  // In case we want to change the terminal text later
  const commands = [
    "npm run start-portfolio",
    "cd ./dominick-portfolio",
    'git commit -m "Update portfolio"',
    "node server.js",
  ];

  let currentCommand = 0;

  // You can implement a loop to cycle through different commands
  setInterval(() => {
    // Reset the animation by changing width
    terminalText.style.animation = "none";
    terminalText.style.width = "0";

    // Set new text and restart animation
    setTimeout(() => {
      currentCommand = (currentCommand + 1) % commands.length;
      terminalText.textContent = commands[currentCommand];

      // Force a reflow to restart the animation
      terminalText.offsetWidth;
      terminalText.style.animation = "typing 3s steps(40, end) forwards";
    }, 1000);
  }, 10000); // Change command every 10 seconds
}

// Add tilt effect to project cards
function addTiltEffect() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      // Calculate mouse position relative to the card
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate rotation values (-10 to 10 degrees)
      const xRotation = (y / rect.height - 0.5) * -10;
      const yRotation = (x / rect.width - 0.5) * 10;

      // Apply the transform
      this.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.02)`;
    });

    card.addEventListener("mouseleave", function () {
      // Reset transform on mouse leave
      this.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });
  });
}
