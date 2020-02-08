/*
import { people, getById } from "./db";

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id)
    }
};
*/

import { movies, getById, addMovie, deleteMovie} from "./db";

const resolvers = {
    Query: {
        movies: () => movies,
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }

}

export default resolvers;
