
      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });

      // Navbar scroll effect
      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          document.querySelector(".navbar").style.background =
            "rgba(0, 0, 0, 0.95)";
        } else {
          document.querySelector(".navbar").style.background =
            "rgba(0, 0, 0, 0.9)";
          document.querySelector(".navbar").style.position = "fixed !important";
          document.querySelector(".navbar").style.top = "0";
          document.querySelector(".navbar").style.width = "100%";
          document.querySelector(".navbar").style.zIndex = "1000";       }
      });
    
      // Scroll Animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll(".reveal").forEach((el) => {
        observer.observe(el);
      });

      // Mobile Menu
      const navbar = document.querySelector(".navbar");
      let lastScroll = 0;

      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
          navbar.style.top = "-100px";
        } else {
          navbar.style.top = "0";
        }
        lastScroll = currentScroll;
      });
      // Hamburger Menu Toggle
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");

      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
      });

      // Close menu when clicking a link
      document.querySelectorAll(".nav-links a").forEach((n) =>
        n.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navLinks.classList.remove("active");
        })
      );

      // Close menu when scrolling
      window.addEventListener("scroll", () => {
        if (window.innerWidth <= 768) {
          hamburger.classList.remove("active");
          navLinks.classList.remove("active");
        }
      });
   

      //////////////email form submission
      const form = document.querySelector(".contact-form");

      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
    
        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          form.reset();
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      });