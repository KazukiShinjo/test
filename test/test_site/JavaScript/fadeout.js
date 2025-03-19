// intersectionObserverで後ほど記載
document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".overlay-text");
  const homeSection = document.getElementById("home");
  const homeHeight = homeSection.offsetHeight;
  const body = document.querySelector("body");

  body.addEventListener("scroll", function () {
    const scrollY = body.scrollTop;
    // スクロール量に応じて opacity を変化させる（0～1の範囲）
    let opacity = 1 - (scrollY / 150);

    // opacity の範囲を 0～1 に制限
    opacity = Math.max(0, Math.min(1, opacity));

    text.style.opacity = opacity;
  });
});
