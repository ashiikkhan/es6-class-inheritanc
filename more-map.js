const numbers = [12, 23, 43, 54];

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
