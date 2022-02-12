import styles from "./MovieCard.module.css";
export const MovieCard = ({movie}) => { 
  console.log(styles);
  const imageURL = "https://www.themoviedb.org/t/p/w300/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg";
  return (
    <li className={styles.movieCard}>    
        <img className={styles.movieImage} src={imageURL} alt={movie.title}></img>
        <div>{movie.title}</div>
    </li>
  )
}
