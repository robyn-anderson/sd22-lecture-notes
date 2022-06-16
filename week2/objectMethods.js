// Object Methods

/*
    Method is a function attached to an object as a property
*/

let dog = {
    name: 'lucy',
    color: 'black brindle',
    age: 3,

    speak: function() {
        console.log('Bark!')
    },
    
    sit() {
        console.log('sat down.')
    },

    getName() {
        console.log(`hello, my name is ${dog.name}`)
    },

    getName2() {
        console.log(`hello, my name is ${this.name}`) //looks within THIS object
    },

    getColor(color) { // the color will be passed in when this function is called (dog.getColor('pretty color')), so THIS is not needed for ${color}
        console.log(`hello, my name is ${this.name} and i'm ${color}`) //looks within THIS object
    },

    beQuiet: () => {
        console.log(`${this.age}`) // will return undefined

    }
}
dog.speak() // get 'Bark!'
dog.speak // nothing will happen
console.log (dog.speak) // [Function: speak]
dog.sit() // get 'sat down'
dog.getName()
dog.getName2()
dog.getColor('pretty color')
