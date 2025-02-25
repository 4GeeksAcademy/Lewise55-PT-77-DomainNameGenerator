import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  //changed the theme of the loop from domain names to cocktail names
  cocktailName();
};
// updated const's & elements
const cocktailName = () => {
  const colors = ['blue', 'white', 'black', 'green', 'red', 'pink', 'purple', 'gold', 'orange'];
  const flavors = ['sour', 'sweet', 'salted', 'tangy', 'spicy', 'sugar', 'chocolate', 'carmel', 'cherry', 'pineapple', 'watermelon'];
  const drinks = ['punch', 'margarita', 'martini', 'whisky', 'rum', 'long island', 'mule', 'wine', 'beer', 'cooler', 'spiked tea', 'champagne'];

  let cocktails = "";

  // changed from for to for of loop
  for(const color of colors) {
    for(const flavor of flavors) {
      for(const drink of drinks) {
        cocktails += `${color} ${flavor} ${drink}<br>`;
      }
    }
  }
  document.querySelector(".cocktail").innerHTML = cocktails;
  console.log(cocktails);
  
};