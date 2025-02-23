document.addEventListener("DOMContentLoaded", function () {
  const text1 = document.querySelector(".overlay-text1");
  const aboutusSection = document.getElementById("aboutus");
  const homeHeight = aboutusSection.offsetHeight;
  const body = document.querySelector("body");
  console.log(body);

  body.addEventListener("scroll", function () {
    const aboutusTop = aboutus.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const fadeStart = 310;
    const fadeEnd = -190;

    //   let opacity = (aboutusTop - fadeEnd) / (fadeStart - fadeEnd);

    //   // opacity の範囲を 0～1 に制限
    //   opacity = Math.max(0, Math.min(1, opacity));

    //   console.log(homeHeight, scrollY, opacity, aboutusTop);
    //   text1.style.opacity = opacity;

    //aboutus が画面の中央付近に来たらフェードイン
    if (aboutusTop < 310 && aboutusTop > -170) {
      text1.style.opacity = 1;
    } else {
      text1.style.opacity = 0;
    }
  });
});
