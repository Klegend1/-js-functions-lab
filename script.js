console.log('js:loaded')

/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (num1, num2) => {
    // num1 - number
    // num2 - number
    console.log(num1, num2)
    // goal - compare the two numbers and return the larger of the two numbers

    // ege-case - a constsideration that changes how we write our code 
    if ( num1 >= num2 ) {
        return num1;
    } else {
        return num2;
    }
}

// comment out working code 
// console.log('Exercise 1 Results;', maxOfTwoNumbers(3, 9), 'expectin: 9');


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/



// function declarationn - isAdult - 1 parameter - age (store a number)

function isAdult(age){
    // currwently the function returns
    // console.log(age, 6>= 18 )
    if( age >= 18 ) {
        return 'Adult'
    } else {
        return 'Minor'
    }
}

console.log('Exercise 2 Result:', isAdult(9));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(vowel){
    if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "0" || vowel === "u") {
        return "True"
     } else {
        return "False"
     }
    }    
    console.log('Exercise 3 Result:', isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain) {
    console.log()
    return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser (name, timeOfDay){
    if (timeOfDay = "morning") {
        return (`Goodmorning, ${name}!`)
    } else if (timeOfDay = "afternoon") {
        return (`Goodafternoon, ${name}!`)
    } else  if (timeOfDay = "evening") {
        return (`Good evening, ${name}!`)
    }
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));



/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(a, b, c) {
    if(a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else c;
    
}
    
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip (billAmount, tipPercentage) {
    let tipAmount = billAmount = (0.2*50);
    return tipAmount;
}


console.log('Exercise 7 Result:', calculateTip(50, 20));



/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature (Temperature, Scale) {
    let convertTemperature;
    if (scale === 'C') {
        console.log ('c' * 9/5) + 32;
    } else if (scale === 'F') {
        console.log ('F' - 32) * 5/9;
    } else {
        return "C"
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator(num1, num2, operation){
   if (operation === 'add') {
    return num1 + num2
   } else if (operation === 'subtract') {
    return num1 - num2
   } else if (operation === 'multiply') {
    return num1 * num2
   } else if (operation === 'divide') {
    return num1 / num2
   }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));


/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

function calculateGrade(score){
    if (score >=90) {
        return 'A';
    }   else if (score >=80) {
        return 'B';
    }   else if (score >=70) {
        return 'C';
    }   else if (score >=60) {
        return 'D';
    }   else if (score >=50) {
        return 'F';
    }
}

console.log('Exercise 10 Result:', calculateGrade(85));


/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre12'.

Complete the exercise in the space below:
*/

function createUsername (firstName, lastName) {
    let combined = firstName.length + lastName.length
    return(`${firstName.substring(0,3)}${lastName.substring(0,3)}${combined}`)
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));


/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

function numArgs (...args) {
    return numArgs.length;
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));
