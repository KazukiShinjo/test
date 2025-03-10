document.addEventListener("DOMContentLoaded", function () {
  const path = document.getElementById("scroll-path");
  const pathHeight = path.getBoundingClientRect().height;
  const wave = document.querySelector(".wave");
  const pathLength = path.getTotalLength();
  const image = document.querySelector("#aboutus img");
  const body = document.querySelector("body");

  // 初期設定: 全ての線を隠す
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;

  body.addEventListener("scroll", function (event) {
    const pathRect = path.getBoundingClientRect();

    const scrollTop = body.scrollTop;
    const imageBottom = image.getBoundingClientRect().bottom;
    const scrollHeight = body.scrollHeight;
    // const scrollFraction =  path.getBoundingClientRect().height / path.getBoundingClientRect().top;
    const scrollFraction = scrollTop / scrollHeight;

    const startPosition = Math.ceil(pathRect.top) - window.innerHeight + Math.ceil(pathHeight / 4);

    // console.log(event);
    // console.log(body.scrollTop, body.scrollHeight);
    // console.log(body.scrollTop, body.getBoundingClientRect().y,path.scrollTop, 'fr', scrollFraction);
    // console.log(pathLength);
    console.log(
      Math.ceil(pathRect.top),
      Math.ceil(pathRect.height),
      startPosition,
      pathRect.top / pathRect.height
    );

    // スクロール量に応じて線を描画
    // path.style.strokeDashoffset = Math.max(0, pathLength * (1 - scrollFraction));
    setTimeout(() => {
      path.style.strokeDashoffset = startPosition >= 0 ? pathLength : pathLength * (Math.min(1, (pathRect.top / pathRect.height)));
    }, 300)
  });
});