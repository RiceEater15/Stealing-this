document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const infoBoxes = document.querySelectorAll(".info-box");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  infoBoxes.forEach((box) => {
    box.style.opacity = 0;
    box.style.transform = "translateY(20px)";
    box.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(box);
  });

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
});
