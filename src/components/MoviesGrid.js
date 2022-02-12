import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie")
      .then(
        newMovies => setMovies(newMovies.results)
      )
  }, []);

  return (
    <ul className={styles.moviesGrid}>
        {movies.length > 0 && movies.map(el => 
            <MovieCard 
                key = {el.id} 
                movie={el}       
            />)}
    </ul>
  )
}
