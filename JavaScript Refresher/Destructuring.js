// Destructuring is the way we pull out values in an object/array without using  the '.' operator

const person = {
    name: "Siva",
    age: 33,
    greet() {
        console.log("Hi, I am " + this.name)
    }
};

// Regular approach
// const printName = (personData) => {
//     console.log(personData.name);
// };

// Destructuring the object
const printName = ({ name }) => {
    console.log(name);
};

// the argument names must match property names in the object
const { name, age } = person;
console.log(name, age);

printName(person);

// Destructuring the Array
// pulls out values always in the order of the index, first to Last
const hobbies = ["Sports", "Cooking", "Reading"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);