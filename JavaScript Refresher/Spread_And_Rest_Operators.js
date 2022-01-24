const hobbies = ["Sports", "Cooking"];

// can pass arguments to narrow the range of slicing
// const coppiedArray = hobbies.slice();

// creates an array with one element
// const copiedArray = [hobbies];

// The spread operator is '...'
// It pulls out values from an array and adds into the array it is passed into
const copiedArray = [...hobbies];

hobbies.push("Reading");

console.log(hobbies);
console.log(copiedArray);


// The spread operator works on objects too
const person = {
    name: "Siva",
    age: 33,
    greet() {
        console.log("Hi, I am " + this.name)
    }
};

const coppiedPerson = {...person};
console.log(coppiedPerson);

//The Rest operator is the same as Spread operator, only it is used in the place of passing arguments
// The difference is the rest operator adds values into an array
const toArr = (...args) => {
    return args;
};
console.log(toArr(1,2,3,4,5,6,7));
