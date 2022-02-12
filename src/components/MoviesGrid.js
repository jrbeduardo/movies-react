import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Loader } from "./Loader";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty } from "./Empty";


export const MoviesGrid = ({search}) => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);


  useEffect(() => {
    setIsloading(true);
    const searchUrl = (search)
      ? `/search/movie?query=${search}&page=${page}`
      :`/discover/movie?page=${page}`;
    get(searchUrl)
      .then(
        newMovies => {
          setMovies((prevMovies) => [...prevMovies, ...newMovies.results]);
          setIsloading(false);
          setHasMore(newMovies.page < newMovies.total_pages);
        }
      )
  }, [search, page]);

  if(!isloading &&  movies.length === 0)
    return <Empty/>


  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={()=>{setPage( prevPage => prevPage + 1)}}
      hasMore={hasMore}
      loader={<Loader/>}
      endMessage={
        <p style={{ textAlign: 'center', fontSize: "2rem" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <ul className={styles.moviesGrid}>
          {movies.map(el => 
              <MovieCard 
                  key = {el.id} 
                  movie={el}       
              />)}
      </ul>
    </InfiniteScroll>    
  )
}
