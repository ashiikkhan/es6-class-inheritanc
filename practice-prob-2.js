/**Practice problem 2:
 * take an array
 * return all elements which are divisible by 10.
 * and all elements should be in an array.
 * Filtering Process:
 */

//with function & for loop & if condition :
const arr = [20, 40, 55, 70, 75, 35, 60];

function divisibleByTen(arr) {
  const newFilterdArr = [];
  for (const number of arr) {
    if (number % 10 === 0) {
      newFilterdArr.push(number);
    }
  }
  return newFilterdArr;
}
console.log(divisibleByTen(arr));

//filter method use:
const numbersDivisibleByTen = arr.filter((number) => number % 10 === 0);
console.log(numbersDivisibleByTen);
//[ 20, 40, 70, 60 ]
//*****filter method returns an array */
