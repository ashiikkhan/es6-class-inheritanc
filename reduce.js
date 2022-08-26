/**reduce method:
 * .reduce(accumulatorFunction, initial value);
 *  accumulatorFunction use two parameters
 */
const numbers = [1, 2, 3, 4, 5];
//example 1
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);
//example 2
const total2 = numbers.reduce((previous, current) => {
  console.log(previous, current);
  return previous + current;
}, 0);
console.log(total2);

// example 3
const student = {
  name: 'John Peter',
  class: 10,
  roll: 1,
  marks: {
    math: 80,
    eng: 90,
  },
};
const studentClass = student.class;
console.log(studentClass);
const engMark = student.marks.eng;
//or we can
const mathMark = student['marks']['math'];
console.log(engMark, mathMark);
