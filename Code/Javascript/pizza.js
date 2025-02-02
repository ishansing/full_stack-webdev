let numofGuests = 4;
let pizzaSize;

if (numofGuests <= 2) {
  pizzaSize = "small";
} else if (numofGuests <= 4) {
  pizzaSize = "medium";
} else if (numofGuests <= 6) {
  pizzaSize = "large";
} else {
  pizzaSize = "extra large";
}

console.log(pizzaSize);
