// notation.js
// ============================================
const student = {
    name: 'muaf ahmed',
    age: 15,
    class: 'Twelve',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },
}

const marks = student.marks;
const math = student.marks.math;
const chemistry = student['marks']['chemistry'];

// mistake by someone
const subject = 'math';
const subjectMarks = student.marks[subject];

console.log(subjectMarks);


// ===================================================

/*
1. Write an arrow function that will take 3 parameters, 
   will multiply the parameters and will return the result

2. write the following sentence in three lines and print the result:
   I am a web developer. I love to code. I love to eat biryani.

3. Write an arrow function that will take 2 parameters: One parameter will
   come from you and the other parameter will be a default parameter,
   Add these two parameters and returnn the result. 

4. Write an arrow function where it will do the following:
    a) It will take an array where the array elements will be the name of your friends
    b) Check if the length of each element is even, push elements with even length to a new 
       array and return the result (print the result)

5.  Write a arrow function where it will do the following:
    a) Square each array element
    b) Calculate the sum of the squared elements
    c) return the average of the sum of the squared elements

6. Write an arrow function where it will do the following:
    a) It will take two array inputs
    b) Ccombine the two arrays and assign them in a new array
    c) Find the maximum number from the new array and return the result.
*/
