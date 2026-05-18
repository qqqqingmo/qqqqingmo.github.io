const themeToggle = document.querySelector("[data-theme-toggle]");

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("homepage-theme", theme);
};

const getInitialTheme = () => {
  const saved = localStorage.getItem("homepage-theme");
  if (saved === "dark" || saved === "light") {
    return saved;
  }
  return "light";
};

if (themeToggle) {
  applyTheme(getInitialTheme());

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });
}
