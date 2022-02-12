import { Link } from "react-router-dom";
import { getMoviePoster } from "../utils/getMoviePoster";
import styles from "./MovieCard.module.css";

export const MovieCard = ({movie}) => { 
  const imageURL = getMoviePoster(movie);
  return (
    <li className={styles.movieCard}>  
        <Link to={`/movies/${movie.id}`}>
          <img className={styles.movieImage} src={imageURL} alt={movie.title}></img>
          <div>{movie.title}</div>
        </Link>  
    </li>
  )
}
