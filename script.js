<script>
    // Toggle menu
    document.querySelector(".menu-toggle").onclick = () => {
      document.querySelector(".nav-links").classList.toggle("active");
    };

    // Smooth scroll
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
        document.querySelector(".nav-links").classList.remove("active");
      });
    });
  </script>
