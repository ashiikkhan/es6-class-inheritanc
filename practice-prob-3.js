/**Practice problem 3:
 * take an array
 * return the first element which is divisible by 10.
 * Finding Process:
 */
//find the first number wich is divisible by ten with function & for loop and if condtion :
const arr = [25, 40, 55, 60, 10];
function divisibleByTen(arr) {
  let firstDivisible;
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (number % 10 === 0) {
      firstDivisible = number;
      break;
    }
  }
  return firstDivisible;
}
console.log(divisibleByTen(arr));
//40; here retuern will be 40 ;

//we can do the same thing with find method:
const firstDivisibleNumber = arr.find((number) => number % 10 === 0);
console.log(firstDivisibleNumber);
//40;
//find method return an single value not an array;
