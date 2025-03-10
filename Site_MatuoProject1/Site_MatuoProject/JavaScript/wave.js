document.addEventListener("DOMContentLoaded", function () {
  const path = document.getElementById("scroll-path");
  const path1 = document.getElementById("scroll-path1");
  const pathHeight = path.getBoundingClientRect().height;
  const pathHeight1 = path1.getBoundingClientRect().height;
  const wave = document.querySelector(".wave");
  const pathLength = path.getTotalLength();
  const pathLength1 = path1.getTotalLength();
  const image = document.querySelector("#aboutus img");
  const body = document.querySelector("body");

  // 初期設定: 全ての線を隠す
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;

  path1.style.strokeDasharray = pathLength1;
  path1.style.strokeDashoffset = pathLength1;

  body.addEventListener("scroll", function (event) {
    const pathRect = path.getBoundingClientRect();
    const pathRect1 = path1.getBoundingClientRect();

    const scrollTop = body.scrollTop;
    const scrollHeight = body.scrollHeight;
    // const scrollFraction =  path.getBoundingClientRect().height / path.getBoundingClientRect().top;
    const scrollFraction = scrollTop / scrollHeight;

    const startPosition = Math.ceil(pathRect.top) - window.innerHeight + Math.ceil(pathHeight / 4);
    const startPosition1 = Math.ceil(pathRect1.top) - window.innerHeight + Math.ceil(pathHeight1 / 4);

    // console.log(event);
    // console.log(body.scrollTop, body.scrollHeight);
    // console.log(body.scrollTop, body.getBoundingClientRect().y,path.scrollTop, 'fr', scrollFraction);
    // console.log(pathLength);
    console.log(
      Math.ceil(pathRect.top),
      Math.ceil(pathRect.height),
      startPosition,
      pathRect.top / pathRect.height,
      pathLength
    );

    // スクロール量に応じて線を描画
    // path.style.strokeDashoffset = Math.max(0, pathLength * (1 - scrollFraction));
    if (path.style.strokeDashoffset === 0) {
      path1.style.strokeDashoffset = startPosition1 >= 0 ? pathLength1 : pathLength1 * (Math.min(1, (pathRect1.top / pathRect1.height)));
    } else {
      path.style.strokeDashoffset = startPosition >= 0 ? pathLength : pathLength * (Math.min(1, (pathRect.top / pathRect.height)));
    }
    console.log(path.style.strokeDashoffset)
    // setTimeout(() => {
    // }, 300)
  });
});