let longest_tea = "";
let teas = ["Herbal Tea", "Oolong Tea", "Masala Tea", "Green Tea"];

for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longest_tea.length) {
    longest_tea = teas[i];
  }
}

console.log(`The longest tea name is: ${longest_tea}`);
