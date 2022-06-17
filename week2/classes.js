// Classes

/*
    Classes are templates or blueprints for creating objects.

    The encapsulate data with code. JS is a prototype-based language that also has access to object oriented principles.

    Classes are considered special functions and therefore can be defined as:
        * Class declaratiion
        * Class Expression
*/
// You COULD do this, but it's repetitive:

let paul = {
    name: 'Paul',
    subject: 'SD',
    isTenured: true,
    isPlyglot: true,
}

let matt = {
    name: 'matt',
    subject: 'SD',
    isTenured: true,
    isPlyglot: true,
}

// Using CLASSES is much more efficient:

// Class Declaration

class Teacher {
    // Class method for creating and intiating a class object
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name
        this.subject = subject
        this.tenure = tenure
        this.isPolyglot = isPolyglot
    }
    // Class body
}
// Creating new instance of Teacher class
let pNiemczyk = new Teacher('Paul', 'software dev', '2022', true) // creates a copy of the Teacher object with all this info in it
console.log(pNiemczyk) // shows the object with all the key:value pairs
console.log(pNiemczyk.name) // displays the value of 'name" in object 'pNiemczyk'
pNiemczyk.subject = 'SD' // reassigns our class instance (new object made using class) subject property (value of 'subject')

// Class Expression

/*
    It is possible to update the definition at a later date ... not sure what this means!
*/

let TeacherExpression = class {
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name
        this.subject = subject
        this.tenure = tenure
        this.isPolyglot = isPolyglot
    }
}

let dave = new TeacherExpression('Dave', 'SD Assistant', true, true) // creates a copy of the TeacherExpression object with all this info in it
console.log(dave) // creates a copy of the Teacher object with all this info in it

// Class Methods

/*
    Class methods are functions that live inside of a class that can be re-used on any class instance.
*/

class Bike {
    constructor(make, model, year, color) {
        this.make = make
        this.model = model
        this.year = year
        this.color = color
    }
    greetBike() {
        return `Welcome to your ${this.year} ${this.make} ${this.model}. It\'s ${this.color}.`
    }
    greetRider(rider) {
        return `Hello, ${rider}, your ${this.make} is looking nice and clean!`
    }
    modifyMake(make) {
        this.make = make // will reassign the value of make based on info passed to function
    }
}
let waltsBike = new Bike('Scott', 'Genius', 2019, 'orange')
console.log(waltsBike) // but will not include the result of running the greetBike function
console.log(waltsBike.greetBike()) // to see the result of the greetBike function, it has to be called
console.log(waltsBike.greetRider('Walt')) // to see the result of the greetBike function, it has to be called and information has to be passed into it ('Walt')
waltsBike.modifyMake('Trek') // use the modifyMake function to modify the make in the waltsBike object using the information passed in ('Trek')
console.log(waltsBike)

// Validating Classes

class Circle {
    constructor(radius) {
        if (typeof radius === 'number') { //! this if/else is validating the data entered when new instances are being created
            this.radius = radius
        } else {
            throw 'your parameter needs to be a number'
        }
    
    }
    area() {
        return (Math.PI * (this.radius ** 2)).toFixed(2)
    }
    circumference () {
        return (2 * Math.PI * this.radius).toFixed(2)
    }

}


let circleOne = new Circle(3)

// 'instanceof' will check if an object is an instance of a class and return true or false
console.log(circleOne instanceof Circle)
console.log(circleOne.area())
console.log(circleOne.circumference())
// let circle1 = new Circle('q') // will get the 'throw' error


// Factory Functions

/*
    Factory functions accept data that needs to be processed in some way prior to creating a  new instance of a class.

        In the example below, 'diameter' is being received, but we need the 'radius' to create our new class instance.
        So the function 'circleFromDiameter' accepts 'diameter'
        Then it returns the equivalent of 'new Circle(2.5)' by first dividing 'diameter' by 2
*/

function circleFromDiameter(diameter) {
    return new Circle(diameter/2)
}
let newCircle = circleFromDiameter(5) // see notes above

console.log(newCircle) // result is: Circle { radius: 2.5 }


// Static Factory Methods

/*
    Does not require instantiation with a 'new' operator
    * The factory function is in the global namespace
    * The factory method is in the class namespace so it's more clear that it is meant to create one of this class of objects
*/

class CircleWithStaticFactoryFx {
    
    static createCircleUsingDiameterInfo(diameter) {
        return new CircleWithStaticFactoryFx(diameter/2);
    }
    
    constructor(radius) {
        if (typeof radius === 'number') { //! this if/else is validating the data entered when new instances are being created
            this.radius = radius
        } else {
            throw 'your parameter needs to be a number'
        }
    
    }
    area() {
        return (Math.PI * (this.radius ** 2)).toFixed(2)
    }
    circumference () {
        return (2 * Math.PI * this.radius).toFixed(2)
    }
}

let aNewCircle = CircleWithStaticFactoryFx.createCircleUsingDiameterInfo(20)
console.log(aNewCircle.radius)

// Inheritance
// Extends

/*
    Extends creates a class that is a child of another class (parent class).

    class Bike {
    constructor(make, model, year, color) {
        this.make = make
        this.model = model
        this.year = year
        this.color = color
    }
    greetBike() {
        return `Welcome to your ${this.year} ${this.make} ${this.model}. It\'s ${this.color}.`
    }
    greetRider(rider) {
        return `Hello, ${rider}, your ${this.make} is looking nice and clean!`
    }
    modifyMake(make) {
        this.make = make // will reassign the value of make based on info passed to function
    }
}
*/
class BikeWithOptions extends Bike {  // adding an "Options" extension to the "Bike" class made earlier in these notes and included in the comments right above for reference
    constructor(make, model, year, color, frontSuspension, rearSuspension, fork, pedals) {
        super(make, model, year, color) // ! mandatory to bring down parameters from parent class using 'super'
        this.frontSuspension = frontSuspension
        this.rearSuspension = rearSuspension
        this.fork = fork
        this.pedals = pedals
    }
    hasWarranty(currentYear) {
        let result = currentYear - this.year
        return result >= 5
            ? `Your ${this.model} is out of warranty`
            : `Your ${this.model} is still within warranty.`
    }
}
let robynsBike = new BikeWithOptions('Scott', 'Genius', 2019, 'white', 150, 150, 'not sure actually...', 'good pedals')
console.log(robynsBike)
console.log(robynsBike.hasWarranty(2022))

// 

class DateFormatter extends Date {
    getFormattedDate() {
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ]
        return `${this.getDate()} - ${months[this.getMonth()]} - ${this.getFullYear()}`
    }
}
console.log(new DateFormatter('June 17, 2022').getFormattedDate())