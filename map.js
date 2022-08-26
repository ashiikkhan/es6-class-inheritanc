const numbers = [2, 3, 4, 5];

function getDoubles(numbers) {
  const output = [];
  for (const number of numbers) {
    const doubled = doubleIt(number);
    output.push(doubled);
  }
  console.log(output);
}
const doubleIt = (num) => num * 2;

getDoubles(numbers);

// same result with map function :
const doubledNumbers = numbers.map((numb) => numb * 2);
console.log(doubledNumbers);
