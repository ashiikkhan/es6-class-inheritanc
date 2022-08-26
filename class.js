//syntactice sugar:
class Instructor {
  name;
  designation = 'Web Course Instructor';
  team = 'web team';
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  startSupportSession(time) {
    // console.log(`start the support session  ${time}`);
  }
  createQuiz(module) {
    // console.log(`please create quiz ${module}`);
  }
}

const amir = new Instructor('amir', 'sylhet');
// console.log(amir);
amir.startSupportSession('9.00');
amir.createQuiz(20);

// example 2:
class Student {
  name;
  id;
  session = 2015;
  department = 'Social Work';
  university = 'SUST';
  result;
  constructor(name, id, result) {
    this.name = name;
    this.id = id;
    this.result = result;
  }
  doFieldWork(time, at) {
    console.log(
      `Students of ${this.department} do their field work in ${time} at ${at}`
    );
  }
}

const ashik = new Student('Ashikur Rahman', 2015233009, 3.0);
console.log(ashik);
ashik.doFieldWork('final semester', 'any GO or NGO.');
