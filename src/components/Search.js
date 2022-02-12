import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import styles from "./Search.module.css";

const initialText = "";
export const Search = () => {
  const [search, setSearch] = useState(initialText);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + search)
  };
  const searchText= useQuery().get("search");
  useEffect(() => {
      setSearch(searchText || "");
  }, [searchText]);   


  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
            <input 
                className={styles.searchInput} 
                onChange={(e)=>setSearch(e.target.value)} 
                type="text" 
                value={search}/>
            <button 
                className={styles.searchButton} 
                type="submit">
                <FaSearch size={20}/>
            </button>
        </div>
    </form>
  )
}
