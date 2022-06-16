// Objects

/*
    Objects are containers for values in JS Object Notation Format (JSON)
    * exists as a string
    * has properties and methods
    *  .property
    *  .method()
    * has .this keyword
*/

// ? Object Literal Creation

let lucy = {
    // key   value
    species: "dog",
    breed: "plab",
    spayed: true,
    weight: 47,
    favoriteActivity: "jumping in the pond"
}
console.log(lucy); // displays object with all key:value pairs
console.table(lucy); // displays object in a table format with all key:value pairs
console.log(lucy.breed); // displays the property value of "breed" (plab)
console.log(lucy["breed"]);  // displays the property value of "breed" (plab)

let returnKeys = Object.keys(lucy); // returns keys as an array
console.log(returnKeys); // prints array of all keys
console.log(returnKeys[0]); // prints first key in array

let returnValues = Object.values(lucy); // returns values as an array
console.log(returnValues);  // prints array of all values
console.log(returnValues[0]); // prints first value in array



// ? Property & Value Creation

let mcmChair = {
    frame: undefined,
    finish: undefined,
    cushion: undefined,
    upholstery: undefined,
}

mcmChair.frame = 'stainless steel';
mcmChair.finish = 'chrome';
// ! property (key:value) creation requires a value to be assigned to the key
mcmChair.new = 'new value'; // Creates a new key:value pair in the object
mcmChair.anotherNew = undefined // How to do it if no known value but want to create a new key anyway

console.table(mcmChair);

// Delete property (key:value pair)

delete mcmChair.new //! This is a bit dangerous and it is better to set a value to null rather than deleting
mcmChair.new = null // This is better

let netflix = {
    id: 9,
    likes: 932,
    name: 'The Good Place',
    seasonInfo: {
        season1: {
            numberOfEpisodes: 3,
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Flying'},
                {episode: 3, episodeName: 'Tahani Al-Jamil'},
                {episode: 4, episodeName: 'Jason Mendoza'},
                {episod: 5, episodeName: 'Category 55 Emergency'}
            ]
        },
        season2: {
            numberOfEpisodes: 3,
            episodeInfo: [
                {episode: 1, episodeName: 'Everything'},
                {episode: 2, episodeName: 'Dance Dance'},
                {episode: 3, episodeName: 'Team Coackroach'},
                {episode: 4, episodeName: 'Existential Crisis'},
                {episode: 5, episodeName: 'The Trolley Problem'}
                ]
        }
    }
}
// Console log the name of season 1 episode 2:
console.log(netflix.seasonInfo.season1.episodeInfo[1].episodeName);