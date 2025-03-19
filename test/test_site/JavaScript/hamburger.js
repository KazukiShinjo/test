document.addEventListener("DOMContentLoaded", function () {
  function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('nav').classList.toggle('in');

    const isMenuOpen = document.getElementById('nav').classList.contains('in');
    document.getElementById('line1').style.background = isMenuOpen ? "black" : "";
    document.getElementById('line2').style.background = isMenuOpen ? "black" : "";
  };
  document.getElementById('hamburger').addEventListener('click', function () {
    hamburger();
  });

  const links = document.querySelectorAll('#nav a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      if (document.getElementById('nav').classList.contains('in')) {
        hamburger();
      }
    });
  });

  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const image = document.querySelector("#aboutus img");
  const body = document.querySelector("body");
  body.addEventListener("scroll", function () {
    const imageBottom = image.getBoundingClientRect().bottom;
    const viewportHeight = body.innerHeight;

    if (imageBottom < 60.5) {
      line1.style.background = "black";
      line2.style.background = "black";
    } else {
      line1.style.background = "#ffffff";
      line2.style.background = "#ffffff";
    }
  })
});