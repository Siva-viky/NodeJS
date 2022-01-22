var userName = 'Siva';
console.log(userName);

let age = 33;
var hasHobbies = true;

// functions can be called anywhere when defined as a pure function.
// But when stored in a const(examples follow), it cannot be called before definition
var person = summarizePerson(userName, age, hasHobbies);
console.log(person);

function summarizePerson(userName, age, hasHobbies) {
    var hobbies = "has hobbies";
    if (hasHobbies != true) {
        hobbies = "does not have hobbies";
    }
    return (userName + "is " + age + " years old and " + hobbies);
}

// Arrow functions and variations

// const summarizeUser = function (userName, age, hasHobbies) {
//     var hobbies = "has hobbies";
//     if (hasHobbies != true) {
//         hobbies = "does not have hobbies";
//     }
//     return (userName + "is " + age + " years old and " + hobbies);
// };

const summarizeUser = (userName, age, hasHobbies) => {
    var hobbies = "has hobbies";
    if (hasHobbies != true) {
        hobbies = "does not have hobbies";
    }
    return (userName + "is " + age + " years old and " + hobbies);
};
var summary = summarizeUser(userName, age, false);
console.log(summary);

const add = (a,b) => {
    return a + b;
};
console.log(add(3,4));

const addNumbers = (a, b) => a + b;
console.log(addNumbers(23, 76));