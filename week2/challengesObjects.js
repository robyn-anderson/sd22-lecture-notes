let netflix = {
    id: 9,
    likes: 932,
    name: 'The Good Place',
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Flying'},
                {episode: 3, episodeName: 'Tahani Al-Jamil'},
                {episode: 4, episodeName: 'Jason Mendoza'},
                {episode: 5, episodeName: 'Category 55 Emergency'}
            ]
        },
        season2: {
            numberOfEpisodes: 5,
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

// Challenge:
/*
* Assign a property called 'total seasons' to the object with a value of what the total seasons are. 
* Add a season 3 that is similar to season 1 & 2
* Assign episodeInfo property to season 3 with an array with 2 episodes
*/
netflix.totalSeasons = 2;
netflix.seasonInfo.season3 = {
    numberOfEpisodes: 2,
    episodeInfo: [
        {episode: 1, episodeName: 'Season 3-1'},
        {episode: 2, episodeName: 'Season 3-2'}
    ]
}
console.log(netflix);
console.log(netflix.seasonInfo.season3);