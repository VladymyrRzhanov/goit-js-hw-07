import WatchedCollection from "./watchedCollection";
import {getMovieId} from "./modal"


const watchedCollection = new WatchedCollection()


const onBtnWatchedClick = () => {
    const movieId = getMovieId()
    watchedCollection.addMovie(movieId)
}

const onQueue = () => {
    const movieId = getMovieId()
    watchedCollection.deleteMovie(movieId)
}

export {onBtnWatchedClick, onQueue}