const z = document.querySelectorAll("#skill, #html, #css, #js");
for (let a = 0; a < z.length; a++) {
  z[0].onclick = function (myTap) {
    var target = myTap.target;
    if (target.id === "btn-html") {
      z[1].style.display = "block";
    } else if (target.id === "btn-css") {
      z[2].style.display = "block";
    } else if (target.id === "btn-js") {
      z[3].style.display = "block";
    } else if (target.id === "close-html") {
      z[1].style.display = "none";
    } else if (target.id === "close-css") {
      z[2].style.display = "none";
    } else if (target.id === "close-js") {
      z[3].style.display = "none";
    }
  };
}
