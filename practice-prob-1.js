/** Practice Problem 1:
 * You have an array with odd numbers.
 * Convert the array into an array with even numbers.
 * Use: for loop & array.map()
 */
const oddArr = [1, 3, 5, 7, 9];
//with simple for loop:
const evenArr = [];
for (let i = 0; i < oddArr.length; i++) {
  const oddNums = oddArr[i];
  const convertInEven = oddNums + 1;
  evenArr.push(convertInEven);
}
console.log(evenArr);

//with function & for loop :
function convertIntoEven(oddArr) {
  const evenArr = [];
  for (const oddNum of oddArr) {
    const convertInEven = oddNum + 1;
    evenArr.push(convertInEven);
  }
  return evenArr;
}
console.log(convertIntoEven(oddArr));

//map method:
const evenArrByMap = oddArr.map((oddNum) => oddNum + 1);
console.log(evenArrByMap);
