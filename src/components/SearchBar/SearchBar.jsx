import { useState } from 'react';
import { toast } from 'react-hot-toast';
import css from "./SearchBar.module.css"

export default function SearchBar({onSubmit}) {
const [query, setQuery] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    if(query.trim() === "") {
        toast.error("Please enter a search query");
        return;
    }
    onSubmit(query);
    setQuery("");
};

 return (
<header className={css.searchBar}>
  <div className={css.container}>
  <form onSubmit={handleSubmit}>
    <div className={css.inputWrapper}>
    <input
    className={css.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    />
    <button type="submit" className={css.searchButton}>Search</button>
    </div>
  </form>
  </div>
</header>

    )
}