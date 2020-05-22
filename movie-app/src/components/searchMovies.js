import React, { useState } from "react"
import MovieCards from "./movieCard";

export default function SearchMovies() {

    //states - input query, movies
    let [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const API_KEY = process.env.REACT_APP_API_KEY;

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results);
        } catch (err) {
            console.log(err);
        }




    }
    return (
        <>
            <form
                className="form"
                onSubmit={searchMovies}>
                <label
                    className="label"
                    htmlFor="query">Movie Name</label>
                <input
                    className="input"
                    required
                    name="query"
                    placeholder="i.e. John Wick"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    className="button"
                    type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCards
                        movie={movie}
                        key={movie.id}
                    />
                ))}
            </div>
        </>
    )
}