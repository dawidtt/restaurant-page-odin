import "./menu.css";
export function renderMenuPage() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  const pizzaContainer = document.createElement("div");
  pizzaContainer.classList.add("food-class-container");
  const pizzaHeading = document.createElement("h3");
  pizzaHeading.textContent = "Pizza";
  const pizzaNames = document.createElement("div");

  const pizzaNamesArray = [
    "Margherita",
    "Capricciosa",
    "Hawaii",
    "Primavera",
    "Vesuvio",
  ];
  const pizzaPrices = ["5$", "7$", "8$", "5$", "10$"];
  for (let i = 0; i < 5; i++) {
    const dishContainer = document.createElement("div");
    dishContainer.classList.add("dish-container");
    const dishName = document.createElement("p");
    dishName.textContent = pizzaNamesArray[i];
    dishName.classList.add("dish-name");
    const price = document.createElement("p");
    price.textContent = pizzaPrices[i];
    price.classList.add("price");
    dishContainer.appendChild(dishName);
    dishContainer.appendChild(price);
    pizzaNames.appendChild(dishContainer);
  }
  pizzaContainer.appendChild(pizzaHeading);
  pizzaContainer.appendChild(pizzaNames);

  const burgerContainer = document.createElement("div");
  burgerContainer.classList.add("food-class-container");
  const burgerHeading = document.createElement("h3");
  burgerHeading.textContent = "Burger";
  const burgerNames = document.createElement("div");

  const burgerNamesArray = [
    "Uniburger",
    "Boogie’s Burgers",
    "The Burgernator",
    "Nuburger",
    "Darrell’s",
  ];
  const burgerPrices = ["15$", "17$", "12$", "13$", "10$"];
  for (let i = 0; i < 5; i++) {
    const dishContainer = document.createElement("div");
    dishContainer.classList.add("dish-container");
    const dishName = document.createElement("p");
    dishName.textContent = burgerNamesArray[i];
    dishName.classList.add("dish-name");
    const price = document.createElement("p");
    price.textContent = burgerPrices[i];
    price.classList.add("price");
    dishContainer.appendChild(dishName);
    dishContainer.appendChild(price);
    burgerNames.appendChild(dishContainer);
  }
  burgerContainer.appendChild(burgerHeading);
  burgerContainer.appendChild(burgerNames);

  const contentPath = document.querySelector("#content");
  menuContainer.appendChild(pizzaContainer);
  menuContainer.appendChild(burgerContainer);
  contentPath.appendChild(menuContainer);
}
