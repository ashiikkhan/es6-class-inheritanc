/**Challenging practice problem:
 * take an array of objects; for example:
 * const people = [
 *  { name: "ashik", age: 26},
 *  { name: "noman", age: 26},
 *  { name: "mahmud", age: 26},
 * ]
 * find out the sum of the age of the persons;
 * use: for loop & array.reduce()
 */
//with for loop:
const people = [
  { name: 'ashik', age: 26 },
  { name: 'noman', age: 25 },
  { name: 'mahmud', age: 24 },
];

function getSumOfAges(arr) {
  let sumOfAges = 0;
  for (const object of arr) {
    const age = object.age;
    sumOfAges = sumOfAges + age;
  }
  return sumOfAges;
}
console.log(getSumOfAges(people));

//with array.reduce()

const sumOfAge = people.reduce((previous, current) => {
  const currentAge = current.age;
  return previous + currentAge;
}, 0);
console.log(sumOfAge);
//we will get the age property by the dot notation from the currentValue parameter which contains the object
