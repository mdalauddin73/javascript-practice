const student = [{
    name: 'Muaf Ahmed',
    Class: 'XI',
    Position: 2,
    College: 'Mapale Leaf',
    marks: {
        math: 90,
        chemestry: 70,
        physics: {
            firstSemester: 90,
            secondSemester: 95,
            thirdSemester: 70
        }
    }
}]

const physicsMarks = student?.marks?.physics;
console.log(physicsMarks);