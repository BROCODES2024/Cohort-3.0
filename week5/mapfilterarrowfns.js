//arrow functions
// app.get("/", (req, res) => {}); same as below
// app.get("/", function (req, res) {});

//given an array give an output such that every value in the array is multiplied by 2

const input = [1, 2, 3, 4, 5];

// function transform(i) {
//   return i * 2;
// }
// const ans = input.map(transform); same as below
const ans = input.map(function (i) {
  return i * 2;
});
console.log(ans);

//filtering
//given an array give all the even values
// function filterlogic(n) {
//   if (n % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
const ans2 = input.filter(function (n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans2);
