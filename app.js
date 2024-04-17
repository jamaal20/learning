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
let age_john = 30; // Declaring a constant 'age' with a numeric value

console.log('the name is: ', name1);
console.log('the age is --> ', age_john);
console.log(age_john);

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
                /*  Array example */
                let numbers = [1, 2, 3, 4, 5];
                console.log(numbers[2]); 

                 /* Data types */
                /* 1. Primitive Data Types
a. Numbers
JavaScript uses the `number` type to represent both integers and floating-point numbers. */
        // examples
        let integerNumber = 10;
        let floatNumber = 3.14;  
        console.log("let the number be : 10")
            
        let sum = 5 + 10;
        console.log(sum)

        let numberString = '42';let convertedNumber = Number(numberString);

        let message = 'Hello' + ' ' + 'world';
        console.log(message)

        let difference = 20 - 8;
        console.log(difference)
      
        let quotient = 15 / 3;
        console.log(quotient)
        
        let remainder = 10 % 3;
        console.log(remainder)

         numberString = '42';
         convertedNumber = Number(numberString); 

        console.log(convertedNumber)

        let product = 5 * 4;
        console.log(product) 

        let counter = 5;
        counter++;
        console.log(counter) 
        counter--;
        console.log(counter)

        let isEqual = 5 == '5'; 
        console.log(isEqual)

        let isNotEqual = 5 != '10';
        console.log(isNotEqual)

        let isStrictEqual = 5 === '5';
        console.log(isStrictEqual)

        let isStrictNotEqual = 5 !== '10';
        console.log(isStrictNotEqual)

        let isTrue = true
        let isFalse = false;
        let logicalAnd = isTrue && isFalse;
        console.log(logicalAnd);

        let logicalOr = isTrue || isFalse;
        console.log(logicalOr)

        let logicalNot = !isTrue;
        console.log(logicalNot)

        let age = 20;
        let allowed = (age <= 18) ? 'Allowed' : 'Not allowed';
        console.log('my result ---> :', age, allowed)

        let x = 10;
        x += 5;
        console.log(x)

         isEqual = 5 == '5';
        console.log(isEqual)

        let isGreaterThan = 10 > 5;
        console.log(isGreaterThan )


        let num = 10;
        if (num > 0){
            console.log('Number is positive');   
        }

        let temperature = 25;
        if (temperature < 30){
            console.log('It\'s hot outside');
        }else{
            console.log('It\'s moderate temperature');
        }

         hour = 14;
         if (hour < 12){
            console.log('Good morning');
         } else if (hour >= 12 && hour < 18){
            console.log('Good afternoon');
         }else{
            console.log('Good evening');
         }

         switch('0') {
            case '0':
                console.log('zero was logged.');
            break;
            case 1:
                console.log('this is a number');
            break;
            default: console.log('No match was found.');
         }
            