/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window or global context for "this"
* 2. implicit is binding in a function
* 3. explicit is using "call", "apply", or "bind" to get the "this context" from a different object
* 4. new is using a constructor function that will make a new object and sets "this" to that object's scope
*
* write out a code example of each explanation above
*/

// Principle 1
this.hey = "Hello";
console.log(this);
// code example for Window Binding



// Principle 2
function intro(){
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
}
const me = {
    name: "Michael Harris",
    age : 21,
    intro: intro
    // intro: function(){
    //     return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
    // }
}
const someone = {
    name: "John Doe",
    age: 33,
    intro: intro
}
me.intro();
someone.intro();
//could also declare funtion outside of object and invoke it using dot notation will work aswell
// code example for Implicit Binding



// Principle 3
function Car(attr){
    this.type = attr.type,
    this.seats = attr.seats,
    this.color = attr.color,
    this.make = attr.make
    this.carname = attr.carname,
    this.welcome = function(){
        return `I drive a ${this.color} ${this.make} ${this.name}, it seats ${this.seats}.`
    }
}

const civic = new Car({
    type: 'sedan',
    seats: 5,
    make: 'Honda',
    carname: 'Civic',
    color: 'grey',
})
const modelX = new Car({
    seats: 7,
    make: 'Telsa',
    color: 'blue',
    carname: 'Model X'
})
console.log(civic.welcome())
console.log(modelX.welcome())
// code example for New Binding



// Principle 4
function whatIDrive(name){
    return `${name} drives a ${this.seats} seated ${this.make} ${this.carname}`;
};

console.log(whatIDrive.call(modelX, 'Mark'))
console.log(whatIDrive.call(civic, 'Sam'))
// code example for Explicit Binding