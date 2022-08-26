const numbers = [2, 3, 4, 5, 6, 7];
const bigNums = numbers.filter((number) => number > 5);
console.log(bigNums);
const tinyNums = numbers.filter((number) => number < 5);
console.log(tinyNums);
const even = numbers.filter((number) => number % 2 === 0);
console.log(even);
const odd = numbers.filter((number) => number % 2 !== 0);
console.log(odd);

const products = [
  { id: 1, name: 'laptop', price: 10 },
  { id: 2, name: 'mobile', price: 20 },
  { id: 3, name: 'watch', price: 10 },
  { id: 4, name: 'camera', price: 20 },
];
const expensiveProducts = products.filter((product) => product.price > 15);
console.log(expensiveProducts);

// so filter returns a new filtered array which is created following the condition we give after arrow function sign
