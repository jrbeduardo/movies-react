import movies from "../movies.json";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
export const MoviesGrid = () => {
  return (
    <ul className={styles.moviesGrid}>
        {movies.map(el => 
            <MovieCard 
                key = {el.id} 
                movie={el}
                
            />)}
    </ul>
  )
}
