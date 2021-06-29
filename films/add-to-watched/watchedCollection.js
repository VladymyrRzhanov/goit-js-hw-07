export default class WatchedCollection {
    constructor() {
        this.watchedCollection = [];
    };

    addMovie(movieId) {
    if (this.watchedCollection.includes(movieId)) {
            alert('Этот фильм уже есть в Вашей коллекции')
        return;
    };
        this.watchedCollection.push(movieId);
        console.log(this.watchedCollection)
    };
    
    deleteMovie(movieId) {
    if (this.watchedCollection.includes(movieId)) {
        const index = this.watchedCollection.indexOf(movieId)
        alert("Вы точно хотите удалить фильм из Вашей коллекции?");
        this.watchedCollection.splice(index, 1);
        }
        console.log(this.watchedCollection)
    };

};


