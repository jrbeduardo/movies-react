import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import styles from "./Search.module.css";


export const Search = () => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchText= useQuery().get("search");
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
            <input 
                className={styles.searchInput} 
                onChange={(e)=>{
                    const value = e.target.value;
                    history.push("/?search=" + value);
                }} 
                type="text" 
                value={searchText}/>
            <button 
                className={styles.searchButton} 
                type="submit">
                <FaSearch size={20}/>
            </button>
        </div>
    </form>
  )
}
