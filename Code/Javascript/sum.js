let myArray = [1, 4, 2, 3, 5, 6];
let anotherArray = [];

function sumfac(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

//Calling the function
console.log(sumfac(myArray));
