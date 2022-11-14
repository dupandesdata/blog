document.getElementById("containerB").innerHTML = "Copyright 2022";

// Sertifikat
const mediaQuery = window.matchMedia('(max-width: 768px)');
const img = "<img class='sertifikat-img' src= '"
let skillHtml = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioQqurj_U9nI_WmZGnd-LHWkUVZCPqk3xbSQdER5ACDK9pKmIveaOh7HcCYUlktsk4N81VOfenrjGsDgvfSVB_oCAaZ6mcUGiyZiPChC30o0TzKZ5l_G9zkuJtRxgt4yLoTr5FF1Hz7rhdUcITNXsw6P79L2t3nTf6rCQFtIj1mS9IfsNfMLcZkIDoHA/s320/HTML_certificate%20%281%29.jpg"
let skillCss = ""
if (mediaQuery.matches) {
  document.querySelector('#imagesHtml-mobile').innerHTML = img + skillHtml + "'>" + "<p>HTML Dasar </p>"
}
else {
  document.querySelector('#imagesHtml').innerHTML = img + skillHtml + "'>" + "<p>HTML Dasar </p>"
  document.querySelector('#imagesCss').innerHTML = img + skillCss + "'>" + "<p>CSS Dasar </p>"
}

// Sidebar Home
const allButtons = document.querySelectorAll("button.dropbtn");
allButtons.forEach((btn) => {
  btn.onclick = () => {
    allButtons.forEach((btn_X) => {
      let divContent = btn_X.nextElementSibling;
      if (btn === btn_X) divContent.classList.toggle("show");
      else divContent.classList.remove("show");
    });
  };
});
