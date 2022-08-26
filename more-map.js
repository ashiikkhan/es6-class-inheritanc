const numbers = [12, 24, 45, 51];

//divide all number elements of the numbers array by 3
//and put them to a new array.
//generally we do:
let output = [];
for (const number of numbers) {
  const result = number / 3;
  output.push(result);
}
console.log(output);

//with normal function :
function divideByThree(numbers) {
  let output = [];
  for (let i = 0; i < numbers.length; i++) {
    const result = numbers[i] / 3;
    output.push(result);
  }
  console.log(output);
}
divideByThree(numbers);

//with map function we can do this :
const newArr = numbers.map((numb) => numb / 3);
console.log(newArr);

//more examples:
const friends = ['ashik', 'noman', 'mahmud', 'zubo', 'muja'];
const nameLengths = friends.map((friend) => friend.length);
console.log(nameLengths);
const firsLetter = friends.map((friend) => friend[0]);
console.log(firsLetter);
const sliced = friends.map((friend) => friend.slice(0, 3));
console.log(sliced);

//array ob objets;
const products = [
  { id: 1, name: 'laptop', price: 1 },
  { id: 2, name: 'mobile', price: 2 },
  { id: 3, name: 'watch', price: 1 },
  { id: 4, name: 'camera', price: 2 },
];
const items = products.map((product) => product.name);
console.log(items);
