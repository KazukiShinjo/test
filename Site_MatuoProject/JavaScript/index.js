const images = document.querySelectorAll('img');
document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll("#slider .slide");
  let currentIndex = 0;

  // 初期表示
  slides[currentIndex].classList.add("active");

  function nextSlide() {
    slides[currentIndex].classList.remove("active");
    slides[currentIndex].classList.add("prev"); // 前のスライドを左へ移動

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.remove("next");
    slides[currentIndex].classList.add("active");

    // 次のスライドを準備
    let nextIndex = (currentIndex + 1) % slides.length;
    slides[nextIndex].classList.remove("prev");
    slides[nextIndex].classList.add("next");
  }

  // 3秒ごとにスライド
  setInterval(nextSlide, 5000);
});

// Topボタン
//要素を取得
const button = document.querySelector('.js-backToTop');

//クリックイベント
button.addEventListener('click', () => {
  //ページ上部へスムーススクロール
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});

//スクロールイベント
window.addEventListener('scroll', () => {
  //スクロール量を判定して要素にクラスを付与
  if (window.scrollY > 100) {
    button.classList.add('is-active');
  } else {
    button.classList.remove('is-active');
  }
});