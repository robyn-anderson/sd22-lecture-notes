// APIE
/*
    Object-oriented languages are built on core principles:

        * Encapsulation 
            of an object's data & behavior by exposing an interface

        * Inheritance 
            of a common behavior, from a parent class that shares methods

        * Abraction 
            of complexity, by hiding implementation details

        * Polymorphism 
            of behavior, by responding to messages by name and argument type

    Objects are data structures that hold state and behavior together.
    
    When considering how to name objects, properties, and methods, use the following mental model.

        * Objects 
        are nouns, and represent things in the program

        * Methods 
        are verbs, and represent actions the objects do

        * Properties 
        are adjectives, they describe the object as a noun

        * Classes 
        are categories, something that describes a type of thing, not a thing itself
*/

// Encapsulation

//! This goes out of encapsulation:
const fido = {
    name: 'Fido',
    color: 'brown',
}
console.log(`Hello! My name is ${fido.name} and I am ${fido.color}`)

// This is within encapsulation:
const lucy = {
    name: 'Lucy',
    color: 'brindle',

    describe() {
        return `Hello! My name is ${this.name} and I am ${this.color}`
    }
}
console.log(lucy.describe())