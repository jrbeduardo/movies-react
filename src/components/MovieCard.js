import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
export const MovieCard = ({movie}) => { 
  
  const imageURL = "https://www.themoviedb.org/t/p/w300/"+movie.poster_path;
  return (

    <li className={styles.movieCard}>  
        <Link to={`/movies/${movie.id}`}>
          <img className={styles.movieImage} src={imageURL} alt={movie.title}></img>
          <div>{movie.title}</div>
        </Link>  
        
    </li>
  )
}
