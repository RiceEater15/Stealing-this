document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const dropdown = document.querySelector(".dropdown");

  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    if (dropdown.classList.contains("show")) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target) && !menuToggle.contains(event.target)) {
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
      e.preventDefault();
      const href = this.getAttribute("href");
      closeDropdown();
      window.location.href = href;
    });
  });

  // Add this new code to handle download buttons
  document.querySelectorAll('.download-btn').forEach((button) => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const downloadUrl = this.getAttribute('href');
      window.open(downloadUrl, '_blank');
    });
  });
});
