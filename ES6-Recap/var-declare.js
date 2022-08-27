/**You must must know when to declare variables with const and when with let */
const name = 'ashik';
const id = 324;
const user = {
  name: 'Ashikur Rahman',
  id: 324,
};
/**create a string with the template string. In that dynamically set the value of variable declared above. Similarly, declare and object. Any dynamically put the values of two properties of the above onject into your template string. */
const templateString = `user name: ${user.name}; 
user id: ${user.id}`;
console.log(templateString);
/**declare an arrow function with one parameter. And the work of that function will be if you give any input and divide that input number by 5 and give the output */
const dividedByFive = (num) => num / 5;
console.log(dividedByFive(250));
/**write an arrow function with two parameters. add 2 to each input parameter and multiplies the sum by two.  */
const myFunc = (param1, param2) => {
  const twoAddedP1 = addTwo(param1);
  const twoAddedP2 = addTwo(param2);
  const multiplicationResult = twoAddedP1 * twoAddedP2;
  return multiplicationResult;
};
const addTwo = (num) => num + 2;
console.log(myFunc(2, 2));
/**arrow with two para and add then multiply */
const myFunc2 = (p1, p2) => (p1 + 2) * (p2 + 2);
console.log(myFunc2(2, 2));

/**now declare an arrow function with three parameters. the function will take three parameters and multiply those three parameters and return result. */

const multiplyThree = (a, b, c) => a * b * c;
console.log(multiplyThree(1, 2, 3));

//take an array of numbers. your task will be use the map on that array and multiply array elements by 5 and store them into a newArray;
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((num) => num * 5);
console.log(newArr);

/**get all odd numbers from an array using filter */
const oddNumbers = arr.filter((num) => num % 2 !== 0);
console.log(oddNumbers);

/**An array contains many objects. Find the object with find whose price is 50000 . */
const arrOfObj = [
  { product: 'laptop', price: 80000 },
  { product: 'mobile', price: 50000 },
  { product: 'camera', price: 50000 },
];
const priceMatch = arrOfObj.find((product) => product.price === 50000);
console.log(priceMatch);
