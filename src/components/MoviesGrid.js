import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";
import { Loader } from "./Loader";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const search= useQuery().get("search");
  useEffect(() => {
    setIsloading(true);
    const searchUrl = (search)
      ? `/search/movie?query=${search}`
      :"/discover/movie";
    get(searchUrl)
      .then(
        newMovies => {
          setMovies(newMovies.results);
          setIsloading(false);
        }
      )
  }, [search]);

  return (
  <>
    {(isloading)
        ?<Loader/>
        :<ul className={styles.moviesGrid}>
            {movies.length > 0 && movies.map(el => 
                <MovieCard 
                    key = {el.id} 
                    movie={el}       
                />)}
        </ul>
    }
  </>
  
    
  )
}
