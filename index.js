let domain = "https://dupancode.my.id/";

let databaseHtml = [
  {
    data: {
      id: "html0",
      artikel: "",
      link: "",
    },
  },
  {
    data: {
      id: "html1",
      artikel: "Apa Itu Internet",
      link: "html1.html",
      folder: "materi/",
    },
  },
  {
    data: {
      id: "html2",
      artikel: "Domain dan DNS Server",
      link: "domain-dan-dns-server.html",
      folder: "materi/",
    },
  },
  {
    data: {
      id: "html3",
      artikel: "Pengenalan Web Hosting",
      link: "pengenalan-web-hosting.html",
      folder: "materi/",
    },
  },
];

let databaseCss = [
  {
    data: {
      id: "css0",
      artikel: "",
      link: "",
    },
  },
  {
    data: {
      id: "css1",
      artikel: "Pengertian Struktur Dasar",
      link: "pengertian-struktur-dasar.html",
      folder: "materi/",
    },
  },
  {
    data: {
      id: "css2",
      artikel: "Pengertian Selector Dasar",
      link: "pengertian-selector-dasar.html",
      folder: "materi/",
    },
  },
  {
    data: {
      id: "css3",
      artikel: "mengenal Property dan Value",
      link: "mengenal-property-dan-value.html",
      folder: "materi/",
    },
  },
];
// variabel
let materiHtml = document.getElementById("html0");
let materiCss = document.getElementById("css0");
let materiJs = document.getElementById("js0");
let artikelHtml = "";
let artikelCss = "";

// buat artikel
for (let i = 1; i < databaseCss.length; i++) {
  artikelCss += "<a id='" + databaseCss[i].data.id + "'>" + databaseCss[i].data.artikel + "</a>" + "<br>";
}
for (let i = 1; i < databaseHtml.length; i++) {
  artikelHtml += "<a id='" + databaseHtml[i].data.id + "'>" + databaseHtml[i].data.artikel + "</a>" + "<br>";
}

// buat link artikel

const body = document.body;
body.onload = myFunction;
function myFunction() {
  if (materiHtml !== null && materiCss !== null) {
    materiHtml.innerHTML = artikelHtml;
    materiCss.innerHTML = artikelCss;
    for (var i = 1; i < databaseHtml.length; i++) {
      document.getElementById("html" + i).setAttribute("href", domain + databaseHtml[i].data.folder + databaseHtml[i].data.link);
    }
    for (var i = 1; i < databaseCss.length; i++) {
      document.getElementById("css" + i).setAttribute("href", domain + databaseCss[i].data.folder + databaseCss[i].data.link);
    }
  }
}
const button = document.querySelector("#menu-sidebar");
button.onclick = function (myTap) {
  var target = myTap.target;
  if (target.id === "btn-html") {
    materiHtml.style.display = "block";
    materiCss.style.display = "none";
  } else if (target.id === "btn-css") {
    materiCss.style.display = "block";
    materiHtml.style.display = "none";
  }
};
