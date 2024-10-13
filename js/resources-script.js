document.addEventListener("DOMContentLoaded", function () {
  const esignIcon = document.getElementById("esign-icon");
  const scarletIcon = document.getElementById("scarlet-icon");
  const ipaIcon = document.getElementById("ipa-icon");
  const popup = document.getElementById("popup");
  const closePopup = document.querySelector(".close-popup");
  const popupTitle = document.getElementById("popup-title");
  const popupLinks = document.getElementById("popup-links");
  const toggleBtn = document.querySelector(".toggle-btn");
  const additionalInfo = document.querySelector(".additional-info");
  const menuToggle = document.querySelector(".menu-toggle");
  const dropdown = document.querySelector(".dropdown");

  const esignLinks = [
    { text: "esign latest: china continent", url: "https://api.aurorasigner.xyz/install/IXqhKd" },
    { text: "esign backup: sunshine insurance", url: "https://api.khoindvn.eu.org/4OftbN" },
    { text: "Esign backup: Henan Provisional", url: "https://api.khoindvn.eu.org/fU8Gs6" },
    { text: "Esign backup: Shanghai Longcheer", url: "https://api.khoindvn.eu.org/mSmLpE" },
    { text: "Esign backup: Shaanxi Heavy Duty", url: "https://api.khoindvn.eu.org/ZPsfm8" },
    { text: "Esign backup: Migu Digital", url: "https://api.khoindvn.eu.org/yuqF7B" },
  ];

  const scarletLinks = [
    { text: "scarlet latest: sunshine insurance install", url: "https://install.appcenter.ms/users/lucfer_xo/apps/scarlet-xo-2/distribution_groups/xo" },
    { text: "Scarlet backup: China Citic", url: "https://install.appcenter.ms/users/lucfer_xo/apps/scarlet-xo-1/distribution_groups/xo" },
    { text: "Scarlet backup: Henan Provisional", url: "https://install.appcenter.ms/users/lucferxotop1/apps/scarlet-4/distribution_groups/scarlet" },
    { text: "Scarlet backup:", url: "#" },
    { text: "Scarlet backup:", url: "#" },
    { text: "Scarlet backup:", url: "#" },
  ];

  const ipaOptions = {
    "ESign IPA": [
      { text: "Download ESign IPA", url: "https://example.com/esign-ipa" },
    ],
    "Scarlet IPA": [
      { text: "Download Scarlet IPA", url: "https://example.com/scarlet-ipa" },
    ],
    "Spotify IPA": [
      { text: "Download Spotify IPA", url: "https://example.com/spotify-ipa" },
    ],
    "Delta IPA": [
      { text: "Download Delta IPA", url: "https://example.com/delta-ipa" },
    ],
    "PyonCord/Bunny IPA": [
      { text: "Download PyonCord/Bunny IPA", url: "https://example.com/pyoncord-ipa" },
    ],
  };

  function showPopup(title, links) {
    popupTitle.textContent = title;
    popupLinks.innerHTML = "";
    links.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.className = "popup-link";
      a.textContent = link.text;
      popupLinks.appendChild(a);
    });
    popup.style.display = "block";
  }

  function hidePopup() {
    popup.style.display = "none";
  }

  esignIcon.addEventListener("click", () =>
    showPopup("E-Sign Install Links", esignLinks),
  );
  scarletIcon.addEventListener("click", () =>
    showPopup("Scarlet Install Links", scarletLinks),
  );
  ipaIcon.addEventListener("click", () =>
    showPopup("Other IPA Links", [
      { text: "Download Spotify IPA", url: ipaOptions["Spotify IPA"][0].url },
      { text: "Download Delta IPA", url: ipaOptions["Delta IPA"][0].url },
      { text: "Download PyonCord/Bunny IPA", url: ipaOptions["PyonCord/Bunny IPA"][0].url },
    ]),
  );
  closePopup.addEventListener("click", hidePopup);

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      hidePopup();
    }
  });

  popup
    .querySelector(".popup-content")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hidePopup();
    }
  });

  toggleBtn.addEventListener("click", function () {
    additionalInfo.classList.toggle("show");
    toggleBtn.textContent = additionalInfo.classList.contains("show")
      ? "Hide Description"
      : "Show Description";
  });

  const esignBackupIcons = [
    { img: "Esign.png", name: "China Citic" },
    { img: "Esign.png", name: "Henan Provisional" },
    { img: "Esign.png", name: "Shanghai Longcheer" },
    { img: "Esign.png", name: "Shaanxi Heavy Duty" },
    { img: "Esign.png", name: "Migu Digital" },
  ];

  const scarletBackupIcons = [
    { img: "Scarlet.jpeg", name: "China Citic" },
    { img: "Scarlet.jpeg", name: "Henan Provisional" },
    { img: "Scarlet.jpeg", name: "Not in use" },
    { img: "Scarlet.jpeg", name: "Not in use" },
    { img: "Scarlet.jpeg", name: "Not in use" },
  ];

  function updateBackupIcons(container, icons) {
    const backupIconsDiv = container.querySelector(".backup-icons");
    const startIndex = parseInt(container.dataset.currentIndex) || 0;
    backupIconsDiv.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % icons.length;
      const icon = icons[index];
      const iconElement = document.createElement("div");
      iconElement.className = "backup-icon";
      iconElement.innerHTML = `
                <img src="${icon.img}" alt="Backup ${index + 1}">
                <p>${icon.name}</p>
            `;
      backupIconsDiv.appendChild(iconElement);
    }
  }

  function nextBackupIcons(container, icons) {
    let currentIndex = parseInt(container.dataset.currentIndex) || 0;
    currentIndex = (currentIndex + 1) % icons.length;
    container.dataset.currentIndex = currentIndex;
    updateBackupIcons(container, icons);
  }

  function prevBackupIcons(container, icons) {
    let currentIndex = parseInt(container.dataset.currentIndex) || 0;
    currentIndex = (currentIndex - 1 + icons.length) % icons.length;
    container.dataset.currentIndex = currentIndex;
    updateBackupIcons(container, icons);
  }

  document.querySelectorAll(".esign-container").forEach((container, index) => {
    const icons = index === 0 ? esignBackupIcons : scarletBackupIcons;
    updateBackupIcons(container, icons);
    const nextButton = container.querySelector(".arrow.right");
    const prevButton = container.querySelector(".arrow.left");
    nextButton.addEventListener("click", () =>
      nextBackupIcons(container, icons),
    );
    prevButton.addEventListener("click", () =>
      prevBackupIcons(container, icons),
    );
  });

  // Menu toggle functionality
  menuToggle.addEventListener("click", function () {
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

  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight) {
      document.body.style.backgroundColor = "#000000";
    } else {
            document.body.style.backgroundColor = "#ffffff";
    }
  });

  // Smooth scrolling
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});