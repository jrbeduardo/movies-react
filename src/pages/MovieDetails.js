import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { get } from '../utils/httpClient';
import styles from "./MovieDetails.module.css";


export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const imageURL = "https://www.themoviedb.org/t/p/w500/";
  useEffect(() => {
    get(`/movie/${id}`)
        .then(
            newMovie => {
                console.log(newMovie);
                setMovie(newMovie);
            }
        );
  }, [id]);
 

  return ( 
  <>
    {(movie===null)? <h1>Cargando...</h1>:<div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imageURL+movie.poster_path} alt={movie.title}></img>
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p><strong>Title: </strong> {movie.title}</p>
            <p><strong>Description:</strong> {movie.overview}</p>
            <p>
                <strong>Genres: </strong>:{movie.genres.map(genre => genre.name ).join(", ")}
            </p>
        </div>
    </div>}
  </>
    
    
  )
}
