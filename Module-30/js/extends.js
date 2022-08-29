class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Instructor extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'web team'
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`Please create quiz for module ${module}`)
    }
}

class Developer extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'dev team'
    constructor(name, location, teck) {
        super(name, location);
        this.teck = teck
    }
    developFeature(feature) {
        console.log(`Please develop the ${feature}`)
    }
    release(version) {
        console.log(`Please release the version ${version}`)
    }
}

class JobPlacement extends TeamMember {
    designation = 'Job Placement Commando'
    team = 'Job Placement'
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region
    }
    developFeature(feature) {
        console.log(`Please develop the ${feature}`)
    }
    release(version) {
        console.log(`Please release the version ${version}`)
    }
}

const muaf = new Developer('Juwayriya', 'Dhaka', 'React');
console.log(muaf);
muaf.provideFeedback();
