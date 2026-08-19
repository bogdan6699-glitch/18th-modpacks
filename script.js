/* =========================================================
   CONFIGURARE
   Modifică doar valorile din această zonă pentru site-ul tău.
========================================================= */

const SITE_CONFIG = {
  discord: "https://discord.gg/EXEMPLU"
};

const MODPACKS = [
  {
    title: "18TH Essentials",
    shortTitle: "ESSENTIALS",
    version: "v1.0",
    category: "RAGE:MP · 18TH",
    description: "Pachetul principal al clanului 18TH, creat pentru o experiență completă și un aspect unitar în B-HOOD.",
    requirements: "RAGE:MP",
    size: "—",
    download: "https://example.com/modpack-1",
    images: [
      "assets/images/modpacks/mp1-1.jpg",
      "assets/images/modpacks/mp1-2.jpg",
      "assets/images/modpacks/mp1-3.jpg",
      "assets/images/modpacks/mp1-4.jpg",
      "assets/images/modpacks/mp1-3.jpg",
      "assets/images/modpacks/mp1-cover.svg"
    ]
  },
  {
    title: "18TH Visuals",
    shortTitle: "VISUALS",
    version: "v1.0",
    category: "RAGE:MP · 18TH",
    description: "Un modpack orientat spre partea vizuală, cu modificări gândite pentru o atmosferă mai plăcută în joc.",
    requirements: "RAGE:MP",
    size: "—",
    download: "https://example.com/modpack-2",
    images: [
      "assets/images/modpacks/mp2-1.svg",
      "assets/images/modpacks/mp2-2.svg",
      "assets/images/modpacks/mp2-3.svg",
      "assets/images/modpacks/mp2-cover.svg"
    ]
  },
  {
    title: "18TH Performance",
    shortTitle: "PERFORMANCE",
    version: "v1.0",
    category: "RAGE:MP · 18TH",
    description: "O variantă mai ușoară, destinată jucătorilor care vor să păstreze un gameplay fluent și un aspect curat.",
    requirements: "RAGE:MP",
    size: "—",
    download: "https://example.com/modpack-3",
    images: [
      "assets/images/modpacks/mp3-1.svg",
      "assets/images/modpacks/mp3-2.svg",
      "assets/images/modpacks/mp3-3.svg",
      "assets/images/modpacks/mp3-cover.svg"
    ]
  },
  {
    title: "18TH Street Edition",
    shortTitle: "STREET EDITION",
    version: "v1.0",
    category: "RAGE:MP · 18TH",
    description: "O ediție cu o identitate mai agresivă și urbană, pregătită pentru atmosfera clanului 18TH.",
    requirements: "RAGE:MP",
    size: "—",
    download: "https://example.com/modpack-4",
    images: [
      "assets/images/modpacks/mp4-1.svg",
      "assets/images/modpacks/mp4-2.svg",
      "assets/images/modpacks/mp4-3.svg",
      "assets/images/modpacks/mp4-cover.svg"
    ]
  }
];

/* =========================================================
   Elemente
========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const grid = $("#modpackGrid");
const modal = $("#modpackModal");
const modalImage = $("#modalImage");
const modalTitle = $("#modalTitle");
const modalMeta = $("#modalMeta");
const modalDescription = $("#modalDescription");
const modalSpecs = $("#modalSpecs");
const downloadBtn = $("#downloadBtn");
const galleryCount = $("#galleryCount");

let activePack = 0;
let activeImage = 0;

/* =========================================================
   Carduri modpack
========================================================= */

function renderModpacks() {
  grid.innerHTML = MODPACKS.map((pack, index) => `
    <article class="modpack-card reveal" data-index="${index}" tabindex="0">
      <div class="card-image">
        <img src="${pack.images[3]}" alt="${pack.title}" loading="lazy">
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="card-arrow">↗</span>
      </div>
      <div class="card-body">
        <div class="card-meta">${pack.category}</div>
        <h3>${pack.title}</h3>
        <p>${pack.description}</p>
        <div class="card-footer">
          <span class="version">${pack.version} · ${pack.size}</span>
          <span class="open-label">VEZI DETALII</span>
        </div>
      </div>
    </article>
  `).join("");

  $$(".modpack-card").forEach(card => {
    card.addEventListener("click", () => openModal(Number(card.dataset.index)));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") openModal(Number(card.dataset.index));
    });
  });

  setupReveal();
}

/* =========================================================
   Popup + galerie
========================================================= */

function openModal(index) {
  activePack = index;
  activeImage = 0;
  const pack = MODPACKS[index];

  modalTitle.textContent = pack.title;
  modalMeta.textContent = pack.category;
  modalDescription.textContent = pack.description;
  downloadBtn.href = pack.download;

  modalSpecs.innerHTML = `
    <span>${pack.version}</span>
    <span>${pack.requirements}</span>
    <span>${pack.size}</span>
  `;

  updateGallery();

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function updateGallery() {
  const images = MODPACKS[activePack].images;
  modalImage.src = images[activeImage];
  modalImage.alt = `${MODPACKS[activePack].title} — imagine ${activeImage + 1}`;
  galleryCount.textContent =
    `${String(activeImage + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;
}

function nextImage() {
  const images = MODPACKS[activePack].images;
  activeImage = (activeImage + 1) % images.length;
  updateGallery();
}

function prevImage() {
  const images = MODPACKS[activePack].images;
  activeImage = (activeImage - 1 + images.length) % images.length;
  updateGallery();
}

$("#modalClose").addEventListener("click", closeModal);
$("#modalBackdrop").addEventListener("click", closeModal);
$("#nextImage").addEventListener("click", nextImage);
$("#prevImage").addEventListener("click", prevImage);

document.addEventListener("keydown", e => {
  if (!modal.classList.contains("active")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
});

/* =========================================================
   Discord
========================================================= */

["discordTop", "discordMobile", "discordCta"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = SITE_CONFIG.discord;
});

/* =========================================================
   Header + meniu mobil
========================================================= */

window.addEventListener("scroll", () => {
  $("#header").classList.toggle("scrolled", window.scrollY > 30);
});

$("#menuBtn").addEventListener("click", () => {
  $("#mobileNav").classList.toggle("active");
});

$$(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => $("#mobileNav").classList.remove("active"));
});

/* =========================================================
   Reveal animations
========================================================= */

function setupReveal() {
  const elements = $$(".reveal:not(.reveal-ready)");
  elements.forEach(el => el.classList.add("reveal-ready"));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

/* =========================================================
   Loader + anul
========================================================= */

window.addEventListener("load", () => {
  setTimeout(() => $("#loader").classList.add("hide"), 1000);
});

$("#year").textContent = new Date().getFullYear();

renderModpacks();
setupReveal();
