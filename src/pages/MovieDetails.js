import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Loader } from '../components/Loader';
import { getMoviePoster } from '../utils/getMoviePoster';
import { get } from '../utils/httpClient';
import styles from "./MovieDetails.module.css";

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const { id } = useParams();


  useEffect(() => {
    setIsloading(true);
    get(`/movie/${id}`)
        .then( newMovie => {
            setMovie(newMovie);
            setIsloading(false);
        });
  }, [id]);
 
  if(!movie) return null;
  return ( 
  <>
    {(isloading)? <Loader/>:<div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} 
        src={getMoviePoster(movie)} alt={movie.title}></img>
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p><strong>Title: </strong> {movie.title}</p>
            <p><strong>Description:</strong> {movie.overview}</p>
            <p>
                <strong>Genres: </strong>{movie.genres.map(
                    genre => genre.name ).join(", ")}
            </p>
        </div>
    </div>}
  </>
    
    
  )
}
