import "./home.css";

export function renderHomePage() {
  const contentPath = document.querySelector("#content");

  const rightContentWrapper = document.createElement("div");
  rightContentWrapper.classList.add("right-content-wrapper");
  const headingTag = document.createElement("h1");
  headingTag.textContent = "Taste the rich flavour of high quality meals";
  const textUnderHeading = document.createElement("p");
  textUnderHeading.textContent =
    "We only use the five star quality for our menu, come and get the richness in every meals we serve. Our cooks have experience from the greatest restaurants from world";
  rightContentWrapper.appendChild(headingTag);
  rightContentWrapper.appendChild(textUnderHeading);
  contentPath.appendChild(rightContentWrapper);
}
