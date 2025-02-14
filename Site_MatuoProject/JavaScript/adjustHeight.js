function adjustHeroHeight() {
  const header = document.querySelector("header");
  const home = document.getElementById("home");

  const headerHeight = header.offsetHeight;
  home.style.height = `calc(100vh - ${headerHeight}px)`;
  console.log(headerHeight)
}

window.addEventListener("load", adjustHeroHeight);
window.addEventListener("resize", adjustHeroHeight);