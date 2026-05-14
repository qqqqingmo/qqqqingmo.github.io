const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const revealItems = Array.from(document.querySelectorAll(".reveal"));
let ticking = false;

const setHeaderState = () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
};

const setActiveLink = () => {
  const offset = window.scrollY + header.offsetHeight + 120;
  let currentId = sections[0]?.id;

  sections.forEach((section) => {
    if (section.offsetTop <= offset) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
};

const onScroll = () => {
  setHeaderState();

  if (!ticking) {
    window.requestAnimationFrame(() => {
      setActiveLink();
      ticking = false;
    });
    ticking = true;
  }
};

const closeMenu = () => {
  navMenu.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
};

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.12,
  },
);

revealItems.forEach((item) => revealObserver.observe(item));
setHeaderState();
setActiveLink();
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("hashchange", setActiveLink);
