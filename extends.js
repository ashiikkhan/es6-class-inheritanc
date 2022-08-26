/**@title: Extends: */
class TeamMember {
  name;
  team = 'web team';
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  provideFeedBack() {
    console.log(`${this.name}, thank you for your feedback.`);
  }
}

class Instructor extends TeamMember {
  designation = 'Web Course Instructor';
  team = 'web team';
  constructor(name, location) {
    super(name, location);
  }
  startSupportSession(time) {
    console.log(`start the support session  ${time}`);
  }
  createQuiz(module) {
    console.log(`please create quiz ${module}`);
  }
}

class Developer extends TeamMember {
  designation = 'Web Course Instructor';
  tech;
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  developFeature(feature) {
    console.log(`develop this  ${feature}`);
  }
  releaseVersion(version) {
    console.log(`please release the ${version}`);
  }
}

const ashik = new Developer('Md. Ashikur Rahman', 'Sylhet', 'MERN');
console.log(ashik);
ashik.developFeature('react feacture');
ashik.releaseVersion('V6');
ashik.provideFeedBack();
