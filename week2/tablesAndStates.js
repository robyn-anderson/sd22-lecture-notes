// Lookup Tables

/*
    Lookup tables allow us to associate strings with a list of other values.

    It's quick & efficient.

    Ex: months {'January': ['Jan', 01, 1, 'I']}
*/

function getPoemTitle(authorUserSelect) {
    let poemTitlesByAuthor = {
        "Robert Frost": "Stopping by Woods on a Snowy Evening", "Shel Silverstein": "Falling Up", "Sylvia Plath": "The Bell Jar"
    }
    return poemTitlesByAuthor[authorUserSelect]
}
console.log(getPoemTitle('Robert Frost'))

function getSongName(userSelectMusician) {
    let songsNamesByMusician = {
        'Ben Howard': 'Under the Same Sun', 'Wolf Parade': 'Anything(?)', 'Sylvan Esso': 'Coffee(?)'
    }
    return songsNamesByMusician[userSelectMusician]
}
console.log(getSongName('Ben Howard'))

// State Machine

/*
    * State machine is a system with finite and defined states. 
    * States are just informative. 
    * The finformation is reliant upon logic in order to transition or be reassigned.
    * Cannot be in more than one state at a time.
Why Use a State Machine?
    * Clarity
    * Predictability
    * Fail-fast debugging
        * Many bugs are due to the system receiving unexpected input, or input that is inappropriate at the moment an "illegal state transition" error means something unexpected just happened
        * Without a state machine, the system may remain in an invalid state for some time this makes it harder to debug once something eventually does break
*/

let states = {
    red: ['green', 'yield'],
    yellow: ['red'],
    green: ['yellow'],
    yield: ['red'],
}
let currentState = 'green'

function enterState(nextState) {
    let validTransition = states[currentState]
    if (validTransition.includes(newState)) {
        console.log(validTransition.includes(nextState))
        console.log(currentState)
        currentState = nextState
        console.log(nextState)
    }
    else {
        throw `invalid state transition from ${currentState} to ${nextState}`
    }
}
enterState('yellow') // entering 'red' here would get an error because the current state is 'green' in the code above and green to red is not a valid transition