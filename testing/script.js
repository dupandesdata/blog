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
