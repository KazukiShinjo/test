//スクロール状態。0で一番上、1で一番下
var scrollPos = 0;
//スクロールできる = 画面から隠れてる範囲
var scrollRange;
var line;
var strokeLength;
var ankerPoint = [960, 0, 960, 950, 800, 950, 800, 850, 900, 850, 900, 2000];

//スクロールの値を取得
$(function () {
  $(window).scroll(function () {
    scrollRange = $(document.body).height() - $(this).outerHeight();
    scrollPos = $(this).scrollTop() / scrollRange;
    line.style.strokeDashoffset = strokeLength - strokeLength * scrollPos;
    line.style.visibility = 'visible';
  });
});

window.onload = function () {
  //パスを定義
  line = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  line.setAttribute('d', 'M 960, 0 L ' + ankerPoint.join(','));
  line.setAttribute('fill', 'none')
  line.setAttribute('stroke', '#00eeff');
  strokeLength = line.getTotalLength();
  line.style.strokeDasharray = strokeLength + ' ' + strokeLength;
  line.style.storkeDashoffset = strokeLength;
  line.style.visibility = 'hidden';
  $('#scroll-line').append(line);
}
