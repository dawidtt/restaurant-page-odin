import "./home.css";
import cookImgPath from "./../assets/img/cook.jpg";

export function renderHomePage() {
  const contentPath = document.querySelector("#content");
  const cookImg = document.createElement("img");
  cookImg.src = cookImgPath;
  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("content-wrapper");

  const rightContentWrapper = document.createElement("div");
  rightContentWrapper.classList.add("right-content-wrapper");
  const headingTag = document.createElement("h2");
  headingTag.textContent = "Taste the rich flavour of high quality meals";
  const textUnderHeading = document.createElement("p");
  textUnderHeading.classList.add("home-text");
  textUnderHeading.textContent =
    "We only use the five star quality for our menu, come and get the richness in every meals we serve. Our cooks have experience from the greatest restaurants from world";
  rightContentWrapper.appendChild(headingTag);
  rightContentWrapper.appendChild(textUnderHeading);

  contentWrapper.appendChild(cookImg);
  contentWrapper.appendChild(rightContentWrapper);
  contentPath.appendChild(contentWrapper);
}
