// Animate hamburger button and show/hide menu
export const handleResponsiveMenu = () => {
  const bars = document.querySelectorAll(".ham-bar");
  bars.forEach((bar) => bar.classList.toggle("change"));
  const menu = document.querySelector(".searchbar");
  if (window.innerWidth < 750 && menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
};
