import "./template.css";
import * as home from "./home/home.js";

(function () {
  function clearContent(e) {
    homeBtn.classList.remove("btn-shadow");
    menuBtn.classList.remove("btn-shadow");
    aboutBtn.classList.remove("btn-shadow");

    const content = document.querySelector("#content");
    content.innerHTML = "";
    e.srcElement.classList.add("btn-shadow");
  }
  const homeBtn = document.querySelector("#home");
  const menuBtn = document.querySelector("#menu");
  const aboutBtn = document.querySelector("#about");

  home.renderHomePage();
  homeBtn.classList.add("btn-shadow");
  homeBtn.addEventListener("click", clearContent);
  homeBtn.addEventListener("click", home.renderHomePage);
  menuBtn.addEventListener("click", clearContent);
  menuBtn.addEventListener("click", home.renderHomePage);
  aboutBtn.addEventListener("click", clearContent);
  aboutBtn.addEventListener("click", home.renderHomePage);
})();
