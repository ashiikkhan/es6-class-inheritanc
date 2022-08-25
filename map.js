const numbers = [2, 3, 4, 5, 5];

function getDoubles(numbers) {
  const output = [];
  for (const number of numbers) {
    const doubled = doubleIt(number);
    output.push(doubled);
  }
  return output;
}
function doubleIt(number) {
  return number * 2;
}
const numbers2x = getDoubles(numbers);
console.log(numbers2x);
