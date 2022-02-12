import placeholder from "../placeholder.jpg";
export function getMoviePoster(movie){
    return (movie.poster_path)
    ?"https://www.themoviedb.org/t/p/w300/"+movie.poster_path
    :placeholder;
    
}