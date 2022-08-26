/**practice problem 4:
 * take an array;
 * add all the elements and give the output result ;
 * use: for loop & array.reduce:
 *
 */
const arr = [1, 2, 3, 4, 5, 6];

function getSum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum = sum + num;
    //0 = 0 + 1;
    //1 = 1 + 2;
    //3 = 3 + 3;
  }
  return sum;
}
console.log(getSum(arr));

//if we use array.reduce() nethod:  simply we need:
// .reduce(accumulatorFunction, initialValue)
//accumulator function takes two parameters;
const sum = arr.reduce(
  (previousNum, currentNum) => previousNum + currentNum,
  0
);
console.log(sum);
// .reduct() method retuns a single value
