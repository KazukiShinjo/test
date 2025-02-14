document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  console.log(scrollTopBtn)
  console.log('スクロール', window.scrollY)

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollTopBtn.style.opacity = '1';
      scrollTopBtn.style.visibility = 'visible';
    } else {
      scrollTopBtn.style.opacity = '0';
      scrollTopBtn.style.visibility = 'hidden';
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    console.log('click')
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
