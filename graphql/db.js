//export const movies = [
export let movies = [
    {
        id: 0,
        name: "A",
        score: 18
    },
    {
        id: 1,
        name: "B",
        score: 19
    },

    {
        id: 2,
        name: "C",
        score: 20
    },
    {
        id: 3,
        name: "D",
        score: 21
    },

];

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: parseInt(`${movies.length + 1}`),
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}

