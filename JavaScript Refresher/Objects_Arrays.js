// Working with objects, properties and methods

const person = {
    name: "Siva",
    age: 33,
    // the greet method can also be declared as follows
    // greet: function() {
    //      console.log("Hi, i am " + this.name);
    // }
    greet() {
        console.log("Hi, i am " + this.name);
    }
};

console.log(person);
person.greet()


// Arrays and Array Methods
const hobbies = ["Sports", "Cooking"]; // possible to have other types like numbres, boolean, etc in the same array

for (let hobby of hobbies) {
    console.log(hobby);
}

// map funtion returns a new array everytime; does not modify the existing array

// const mappedArray = hobbies.map(hobby => {
//     return "Hobby: " + hobby
// });
const mappedArray = hobbies.map(hobby => "Hobby: " + hobby)

console.log(mappedArray);


// Arrays are refrence types i.e 'hobbies' points to the memory holdig the array
// the array can be modified without compromising the const declaration of 'hobbies'
hobbies.push("Reading books");

// After adding the new entry, the constant 'hobbies still points to the same memory holding the array
console.log(hobbies);
