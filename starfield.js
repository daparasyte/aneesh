// starfield.js

(function() {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');

  // Set canvas size to window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Handle window resize
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars(); // Reinitialize stars
  });

  // Star parameters
  const numStars = 100; // Adjust the number of stars
  const stars = [];

  // Star class
  function Star() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = 0.2 + Math.random() * 0.3; // Random speed for each star
    this.radius = 0.5 + Math.random() * 0.5; // Tiny dots
  }

  // Initialize stars
  function initStars() {
    stars.length = 0; // Clear existing stars
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }
  }

  // Draw stars
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];

      // Update star position
      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }

      // Draw the star
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Subtle stars
      ctx.fill();
    }

    requestAnimationFrame(drawStars);
  }

  // Start the animation
  initStars();
  drawStars();
})();
