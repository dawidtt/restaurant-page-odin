import "./about.css";
export function renderAboutPage() {
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");
  const aboutHeading = document.createElement("h2");
  aboutHeading.textContent = "About Us";
  const aboutText = document.createElement("p");
  aboutText.textContent =
    "Welcome to Buonanotte, where we serve up the best of two worlds – delicious burgers and mouthwatering pizza! Whether you're craving a juicy, handcrafted burger or a cheesy, freshly baked pizza, we've got something for everyone. Our commitment to quality ingredients and a relaxed, friendly atmosphere makes us the perfect spot for family dinners, casual meetups, or a quick bite. Come in hungry, leave happy!";
  aboutContainer.appendChild(aboutHeading);
  aboutContainer.appendChild(aboutText);
  const contentPath = document.querySelector("#content");
  contentPath.appendChild(aboutContainer);
}
