// const images = document.querySelectorAll('img');
// document.addEventListener("DOMContentLoaded", function () {
//   let slides = document.querySelectorAll("#slider .slide");
//   let currentIndex = 0;

//   // 初期表示
//   slides[currentIndex].classList.add("active");

//   function nextSlide() {
//     slides[currentIndex].classList.remove("active");
//     slides[currentIndex].classList.add("prev"); // 前のスライドを左へ移動

//     currentIndex = (currentIndex + 1) % slides.length;

//     slides[currentIndex].classList.remove("next");
//     slides[currentIndex].classList.add("active");

//     // 次のスライドを準備
//     // let nextIndex = (currentIndex + 1) % slides.length;
//     // slides[nextIndex].classList.remove("prev");
//     // slides[nextIndex].classList.add("next");
//   }

//   // 3秒ごとにスライド
//   setInterval(nextSlide, 5000);
// });

document.addEventListener("DOMContentLoaded", function () {
  let homeHeight = document.getElementById("home").getBoundingClientRect().height;
  let slideIndex = 0;
  let slider = document.getElementById("slider");
  let slides = document.getElementsByClassName("mySlides");

  // homeの高さに各画像の高さなど設定
  slider.style.height = `${homeHeight}px`;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.height = `${homeHeight}px`;
    slides[i].querySelector("img").style.height = "100%";
    slides[i].querySelector("img").style.objectFit = "contain";
  }

  showSlides();
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
  }

  // 画面サイズの変更時に高さを再計算
  window.addEventListener("resize", function () {
    let newHomeHeight = document.getElementById("home").getBoundingClientRect().height;
    slider.style.height = `${newHomeHeight}px`;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.height = `${newHomeHeight}px`;
    }
  });
});