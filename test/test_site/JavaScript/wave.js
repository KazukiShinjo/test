document.addEventListener("DOMContentLoaded", function () {
  const path = document.getElementById("scroll-path");
  const path1 = document.getElementById("scroll-path1");
  const body = document.querySelector("body");
  // getBoundingClientRect():要素のサイズとビューポートに対する位置を取得
  const pathHeight = path.getBoundingClientRect().height;
  const pathHeight1 = path1.getBoundingClientRect().height;
  // getTotalLength():パスの全長を取得
  const pathLength = path.getTotalLength();
  const pathLength1 = path1.getTotalLength();

  // 初期設定: 全ての線を隠す
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;
  path1.style.strokeDasharray = pathLength1;
  path1.style.strokeDashoffset = pathLength1;

  body.addEventListener("scroll", function () {
    const pathRect = path.getBoundingClientRect();
    const pathRect1 = path1.getBoundingClientRect();

    const scrollTop = body.scrollTop;
    const scrollHeight = body.scrollHeight;
    const scrollFraction = scrollTop / scrollHeight;

    //クラスを作成した方がいい
    const startPosition = Math.ceil(pathRect.top) - window.innerHeight + Math.ceil(pathHeight / 4);
    const startPosition1 = Math.ceil(pathRect1.top) - window.innerHeight + Math.ceil(pathHeight1 / 4);

    console.log(
      Math.ceil(pathRect.top),
      Math.ceil(pathRect.height),
      startPosition,
      pathRect.top / pathRect.height,
      pathLength
    );

    // スクロール量に応じて線を描画
    path.style.strokeDashoffset = startPosition >= 0 ? pathLength : pathLength * (Math.min(1, (pathRect.top / pathRect.height)));
    path1.style.strokeDashoffset = startPosition1 >= 0 ? pathLength1 : pathLength1 * (Math.min(1, (pathRect1.top / pathRect1.height)));
  });
});