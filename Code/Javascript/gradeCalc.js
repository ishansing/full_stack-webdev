//90 >= A
//80 >= B
//70 >= C
//50 >= D
// F
function calculateGrade(mark) {
  if (mark >= 90) {
    return "A";
  } else if (mark >= 80) {
    return "B";
  } else if (mark >= 70) {
    return "C";
  } else if (mark >= 50) {
    return "D";
  } else {
    return "F";
  }
}

console.log(calculateGrade(76));
