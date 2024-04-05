let name ="jamaal arun";
console.log(`Hello ${name}`);
const school = "universityof california, Berkely";
console.log(`school : ${school}`);
let year = 3;
year = year + 1;
console.log (`I am in year: ${year}`)

// this is a comment 
const personname = "john"
// const name = 30

/* Multiline comment */
/* 
this is a comment
this is a comment
*/

/* variable naming */
// snake case
let first_name = 'Jamal Aroon';
let person_first_name = 'Jamal Aroon';

console.log('This is snake casing: first_name');
console.log('This is snake casing: person_first_name');

// camel case
const firstName = 'Jamal Aroon';
const personFirstName = 'Jamal Aroon';

console.log('This is camel casing: firstName');
console.log('This is camel casing: personFirstName');

// pascal case
const FirstName = 'Jamal Aroon';
const PersonFirstName = 'Jamal Aroon';

console.log('This is Pascal casing: FirstName');
console.log('This is Pascal casing: PersonFirstName');


/* variables and expresions */
let name1 = 'John'; // Declaring a variable 'name' and assigning a string value
const age = 30; // Declaring a constant 'age' with a numeric value

console.log('the name is: ', name1);
console.log('the age is --> ', age);
console.log(age);

/* Control Structures: Conditionals and Loops */
let hour = 10;
if (hour < 12) {
console.log('Good morning!'); // Output: Good morning!
} else {
console.log('Good afternoon');
};

for (let i = 0; i < 5; i++) {
    console.log('my result',i); // Output: 0, 1, 2, 3, 4
    };
/* Functions and Scope */
    function greet(name) {
        console.log(`Hello, ${name}!`);
        }
        
        greet("jamaal")

        /*  Scope example */  
        // function checkScope() {
        //     if (true) {
        //     var varVariable = 'Inside if'; // var has function scope
        //     let letVariable = 'Inside if'; // let has block scope
        //     }
        //     console.log(varVariable); // Output: Inside if
        //     console.log(letVariable); // Throws ReferenceError: letVariable is not defined
        //     }
        //     checkScope()

            /* Objects and Arrays */
            //  Object example
            let person = {
                name: 'Alice',
                age: 25,
                hobbies: ['reading', 'painting']
                };

                console.log(person.name,person.age,person.hobbies);

    