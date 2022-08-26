/**@find() method:
 * find returns a number not an array.
 */
const numbers = [10, 15, 20, 24, 28, 35, 36, 40, 42];

const divisibleByFive = numbers.find((num) => num % 5 === 0);
console.log(divisibleByFive);
//10
//here we find onlu 10 but we have 15 , 20, etc which is divisible by 5 but we only get 10 from the find method so we undestand that it returns just the first matched number
/**if we need all divisible numbers by five we should use filter method  */
const divisibleByFiveAll = numbers.filter((num) => num % 5 === 0);
console.log(divisibleByFiveAll);
//[ 10, 15, 20, 35, 40 ]

const products = [
  { id: 1, name: 'laptop', price: 10 },
  { id: 2, name: 'mobile', price: 20 },
  { id: 3, name: 'watch', price: 10 },
  { id: 4, name: 'camera', price: 20 },
];
