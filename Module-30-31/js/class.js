// syntactic sugar
class Instructor {
    name;
    designation = 'Web Course Instructor'
    team = 'web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`Please create quiz for module ${module}`)
    }
}
const alauddin = new Instructor('Muaf', 'Dhaka');
console.log(alauddin);

alauddin.startSupportSession('9:00');
alauddin.createQuiz(60);

