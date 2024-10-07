document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const dropdown = document.querySelector(".dropdown");

  menuToggle.addEventListener("click", function () {
    if (dropdown.classList.contains("show")) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !dropdown.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeDropdown();
    }
  });

  function openDropdown() {
    dropdown.style.display = "block";
    setTimeout(() => {
      dropdown.classList.add("show");
    }, 10);
  }

  function closeDropdown() {
    dropdown.classList.remove("show");
    setTimeout(() => {
      dropdown.style.display = "none";
    }, 300);
  }

  dropdown.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        closeDropdown();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }, 300);
        }
      } else {
        closeDropdown();
        window.location.href = href;
      }
    });
  });

  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });

  const sections = document.querySelectorAll(".legal-section");
  sections.forEach((section) => {
    section.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.02)";
      this.style.transition = "transform 0.3s ease";
    });
    section.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "c" || e.key === "u")) {
      e.preventDefault();
    }
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > document.documentElement.clientHeight) {
      document.body.style.backgroundColor = "#000000";
    } else {
      document.body.style.backgroundColor = "";
    }
  });
});
